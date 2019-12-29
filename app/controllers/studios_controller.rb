class StudiosController < ApplicationController
  def index
    studios = Studio.all
     render json: studios
    # classes = Studio_Class.all
    #render json: studios, :include => [:studio_classes] 
  end

  def show
    studio = Studio.find(params[:id])
    classes = studio.studio_classes.all #not needed anymore
    render json: classes
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
    studio.destroy

  end

  private
  def studio_param
    params.require(:studio).permit(:name, :description, :class_type, :address)
  end
end
