class Api::ServersController < ApplicationController
  before_action :require_logged_in
  
  def index
    @servers = Server.all
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

  end

  private
  def server_params
    params.require(:server).permit(:name)
  end
end
