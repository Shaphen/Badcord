json.extract! @channel, :id, :name, :server_id

# json.messages do
#   @channel.channel_messages.each do |message|
#     json.set! message.id do
#       json.extract! message, :id, :body, :author_id
#     end
#   end
# end