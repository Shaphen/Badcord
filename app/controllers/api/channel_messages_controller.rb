class Api::ChannelMessagesController < ApplicationController
  def index
    @messages = Channel.find(params[:channelId]).channel_messages
    render :index
  end
  
  def create
    @message = ChannelMessage.new(channel_message_params)
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def update
    @message = ChannelMessage.find_by(id: params[:id])
    if @message.update(channel_message_params)
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  def destroy
    @message = ChannelMessage.find_by(id: params[:id])
    if @message
      @message.destroy
      render json: ["It worked!"], status: 200
    else
      render json: ["Could not find or delete message. Big sad"], status: 422
    end
  end

  private
  def channel_message_params
    params.require(:channel_messages).permit(:body, :author_id, :channel_id)
  end
end
