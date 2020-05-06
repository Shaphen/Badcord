class ChannelMessage < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true
  validates :body, length: { minimum: 1 }

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
  
end
