class StudiosController < ApplicationController
  def index
    studios = Studio.all
     render json: studios
    # classes = Studio_Class.all
    #render json: studios, :include => [:studio_classes] 
  end

  def show
    studio = Studio.find(params[:id])
    classes = studio.studio_classes.all
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
    # binding.remote_pry
    studio = Studio.find(params[:id])
    # classes = studio.studio_classes.all
    # reservations = studio.studio_classes.reservations.all
    # reservations.destroy
    # classes.destroy
    studio.destroy
#rails dependent destroy https://stackoverflow.com/questions/29560805/how-to-use-dependent-destroy-in-rails 

  end

  private
  def studio_param
    params.require(:studio).permit(:name, :description, :class_type, :address)
  end
end
