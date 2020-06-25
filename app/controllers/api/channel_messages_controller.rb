class Api::ChannelMessagesController < ApplicationController
  def index
    @messages = ChannelMessage.all
    render :index
  end
  
  def create
    @message = ChannelMessage.new(
      body: params[:body],
      author_id: params[:author_id],
      channel_id: params[:channel_id]
    )
    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  # def update
  #   @message = ChannelMessage.find_by(id: params[:id])
  #   if @message.update(channel_message_params)
  #     render :show
  #   else
  #     render json: @message.errors.full_messages, status: 422
  #   end
  # end

  def destroy
    @message = current_user.messages.find_by(id: params[:id])
    if @message
      @message.destroy
      render json: ["It worked!"], status: 200
    else
      render json: ["Can't delete other people's messages. Big sad"], status: 422
    end
  end
end
