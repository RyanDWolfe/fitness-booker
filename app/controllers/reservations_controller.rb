class ReservationsController < ApplicationController

  def index
    reservations = Reservation.all
    render json: reservations
  end

  def create
    reservation = Reservation.create(reservation_param)
    render json: reservation
  end

  def update 
    reservation = Reservation.find(params[:id])
    reservation.update_attributes(status: 2)
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy
  end

  private

  def reservation_param
    params.require(:reservation).permit(:status, :user_id, :studio_class_id, :studio_id)
  end
end
