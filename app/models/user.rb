require 'open-uri'

class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token, :ensure_default_photo

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= self.reset_session_token!
  end

  has_many :owned_servers,
    foreign_key: :owner_id,
    class_name: :Server

  has_many :server_memberships,
    foreign_key: :member_id,
    class_name: :ServerMember

  has_many :servers,
    through: :server_memberships,
    source: :server

  has_many :owned_channels,
    through: :owned_servers,
    source: :channels

  has_one_attached :photo

  def ensure_default_photo
    unless self.photo.attached?
      icon_paths = [
        "https://badcord-seeds.s3-us-west-1.amazonaws.com/isolated-monochrome-blue.png",
        "https://badcord-seeds.s3-us-west-1.amazonaws.com/isolated-monochrome-brown.png",
        "https://badcord-seeds.s3-us-west-1.amazonaws.com/isolated-monochrome-green.png",
        "https://badcord-seeds.s3-us-west-1.amazonaws.com/isolated-monochrome-peach.png",
        "https://badcord-seeds.s3-us-west-1.amazonaws.com/isolated-monochrome-pink.png",
        "https://badcord-seeds.s3-us-west-1.amazonaws.com/isolated-monochrome-purple.png"
      ]
      file = open(icon_paths.sample)
      self.photo.attach(io: file, filename: "default-icon.png")
    end
  end

end
