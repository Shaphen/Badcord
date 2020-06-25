class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for "chat_channel#{params[:channelId]}"
  end

  def speak(data)
    socket = { body: data['message'], author_id: data["authorId"], channel_id: data["channelId"] }
    ChatChannel.broadcast_to("chat_channel", socket)
  end

  def unsubscribed; end
end
