class ChatChannel < ApplicationCable::Channel
  def subscribed
    # find channel that is currently making subscription (@channel)
    # @channel = Channel.find_by(id: params[:channelId])
    stream_from "chat_channel" # @channel
  end

  def speak(data)
    message = ChannelMessage.create(body: data['body'], author_id: data['authorId'], channel_id: data['channelId'])
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed; end
end
