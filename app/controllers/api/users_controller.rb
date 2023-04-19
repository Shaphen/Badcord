class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end
  
  def create
    @user = User.new(user_params)
    @user.photo.attach(params[:photo]) if params[:photo]
    if @user.save
      ServerMember.create([
        {member_id: @user.id, server_id: Server.first.id},
        {member_id: @user.id, server_id: Server.second.id},
        {member_id: @user.id, server_id: Server.third.id},
        {member_id: @user.id, server_id: Server.fourth.id},
      ])
      login!(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :photo)
  end
end
