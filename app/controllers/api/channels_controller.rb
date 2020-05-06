class Api::ChannelsController < ApplicationController
  before_action :require_logged_in
  
  def index
    @channels = current_user.owned_servers.find_by(id: params[:server_id]).channels #serverId?
    render :index
  end
  
  def show
    @channel = Channel.find(params[:id])
    render :show
  end
  
  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = Channel.find(params[:channel][:name])
    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = current_user.owned_servers.find_by(id: params[:server_id])
    @channel = @server.channels.find_by(id: params[:id])
    if @channel
      @channel.destroy
      render json: ["It worked!"], status: 200
    else
      render json: ["Could not find channel. Big sad"], status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :server_id)
  end
end
