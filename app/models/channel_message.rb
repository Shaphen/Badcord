class ChannelMessage < ApplicationRecord
  validates :body, :author_id, :channel_id, presence: true

  belongs_to :channel,
    foreign_key: :channel_id,
    class_name: :Channel
  
end
