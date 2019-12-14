class ReservationsController < ApplicationController

  def create
    reservation = Reservation.create(reservation_param)
    render json: reservation
  end

  def update
    reservation = Reservation.find(params[:id])
    reservation.update_attributes(reservation_param)
  end

  def destroy
    reservation = Reservation.find(params[:id])
    reservation.destroy
  end

  private

  def reservation_param
    params.require(:reservation).permit()
  end
end
