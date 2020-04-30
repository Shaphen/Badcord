class Api::ServersController < ApplicationController
  def index
    @servers = Server.all
    render :index
  end

  def create
    
  end

  def destroy

  end
end
