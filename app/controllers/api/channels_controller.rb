class Api::ChannelsController < ApplicationController
  before_action :require_logged_in
  
  def index
    @channels = Server.find(params[:serverId]).channels
    render :index
  end
  
  def show
    @channel = Channel.find_by(id: params[:id])
    render :show
  end
  
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: ["We can't call it the 'nothing' channel. Unless you name it that. Then we will"], status: 422
    end
  end

  def update
    @channel = current_user.owned_channels.find_by(id: params[:id])
    if @channel
      if @channel.update(channel_params)
        render :show
      else
        render json: ["I see we have a rebellious user today"], status: 422
      end
    else
      render json: ["Don't change other people's channel names just cause they suck at naming"], status: 422
    end
  end

  def destroy
    @channel = current_user.owned_channels.find_by(id: params[:id])
    if @channel
      @channel.destroy
    else
      render json: ["Only the owner can delete channels. Duh."], status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end
end
