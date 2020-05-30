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
    @server.photo.attach(params[:server][:photo]) if params[:server][:photo]

    if @server.save
      render :show
    else
      render json: @server.errors.full_messages, status: 422
    end
  end

  def update
    @server = current_user.owned_servers.find_by(id: params[:id])
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
    else
      render json: ["Only the owner can delete this server"], status: 404
    end
  end

  private
  def server_params
    params.require(:server).permit(:name, :owner_id, :photo)
  end
end
