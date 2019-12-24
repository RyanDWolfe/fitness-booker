class StudioClassesController < ApplicationController
  def index
    classes = StudioClass.all
    render json: classes
  end

  def show
    studio_class = StudioClass.find(params[:id])
    render json: studio_class
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
    studio_class.destroy
  end

  private

  def studio_class_param
    params.require(:studio_class).permit(:name, :class_type, :description, :occupancy, :studio_id)
  end

end
