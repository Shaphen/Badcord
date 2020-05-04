class Api::ServersController < ApplicationController
  before_action :require_logged_in
  
  def index
    @servers = current_user.servers
    @servers += current_user.owned_servers
    render :index
  end

  def show
    @server = Server.find(params[:id])
    render :show
  end

  def create
    @server = Server.new(server_params)

    if @server.save
      render json: @server, status: 200
    else
      render json: @server.errors.full_messages
    end
  end

  def update
    if @server.update(server_params)
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def destroy
    @server = current_user.owned_servers.find_by(id: params[:id])
    if @server
      @server.destroy
      render json: ["it worked!"], status: 200
    else
      render json: ["not a valid server id"], status: 422
    end
  end

  private
  def server_params
    params.require(:server).permit(:name, :owner_id)
  end
end
