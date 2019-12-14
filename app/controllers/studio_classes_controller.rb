class StudioClassesController < ApplicationController
  def index
    classes = StudioClass.all
  end

  def show
    studio_class = StudioClass.find(params[:id])
  end

  def create
    studio_class = StudioClass.create(studio_class_param)
    render json: studio_class
  end

  def update
    studio_class = StudioClass.find(params[:id])
    studio.update_attributes(studio_class_param)
  end

  def destroy
    studio_class = StudioClass.find(params[:id])
    reservations = studio_class.reservations.all #check casing
    reservations.destroy
    studio_class.destroy
  end

  private

  def studio_class_param
    params.require(:studio_class).permit(:name, :type, :description, :occupancy, :studio_id)
  end

end
