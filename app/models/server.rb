class Server < ApplicationRecord
  validates :name, presence: true
  
  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :memberships,
    foreign_key: :server_id,
    class_name: :ServerMember

  has_many :members,
    through: :memberships,
    source: :member

  has_many :channels,
    foreign_key: :server_id,
    class_name: :Channel

  has_one_attached :photo
  
end
