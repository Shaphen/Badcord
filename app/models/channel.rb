class Channel < ApplicationRecord
  validates :name, :server_id, presence: true

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

  has_many :messages,
    foreign_key: :channel_id,
    class_name: :ChannelMessage,
    dependent: :destroy

  has_one :owner,
    through: :server,
    source: :owner
  
end
