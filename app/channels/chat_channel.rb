class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_channel"
  end

  def speak(data)
    message = ChannelMessage.create(body: data['body'], author_id: data['autho_id'], channel_id: data['channel_id'])
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end
end
