class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_channel"
  end

  def speak(data)
    message = ChannelMessage.create(body: data['message'], author_id: data["authorId"], channel_id: data["channelId"])
    socket = { body: message.body, author_id: message.author_id, channel_id: message.channel_id }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end
end
