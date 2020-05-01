class Api::ServersController < ApplicationController
  before_action :require_logged_in
  
  def index
    @servers = current_user.servers.concat(current_user.owned_servers)
    render :index
  end

  def show
    @server = Server.find(server_params)
    render :show
  end

  def create
    @server = Server.new(server_params)

    if @server.save
      render :show
    else
      render json @server.errors.full_messages
    end
  end

  def destroy
    @server = current_user.owned_servers.find_by(id: params[:id])
    if @server
      @server.destroy
    end
    render `api/users/#{current_user.id}/servers`
  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end
