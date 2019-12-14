class StudiosController < ApplicationController
  def index
    studios = Studio.all
    render json: studios
  end

  def show
    studio = Studio.find(params[:id])
    classes = StudioClass.all
  end

  def create
    studio = Studio.create(studio_param)
    render json: studio
  end

  def update
    studio = Studio.find(params[:id])
    studio.update_attributes(studio_param)
  end

  def destroy
    studio = Studio.find(params[:id])
    classes = studio.studio_classes.all #check casing
    reservations = classes.reservations.all
    reservations.destroy
    classes.destroy
    studio.destroy
  end

  private
  def studio_param
    params.require(:studio).permit(:name, :description, :class_type, :address)
  end
end
