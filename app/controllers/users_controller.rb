class UsersController < ApplicationController
  def create
    user = User.create(user_param)
    render json: user
  end

  def show
    user = User.find(params[:id])
    reservations = user.reservations.all
  end

  def destroy
    user = User.find(params[:id])
    reservations = user.reservations.all
    reservations.destroy
    user.destroy
  end

  private

  def user_param
    params.require(:user).permit(:email, :name)
  end
end
