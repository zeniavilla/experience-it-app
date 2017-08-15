class Api::ExperiencesController < ApplicationController

    def index
        render json: Experience.all
    end

    def create
        experience = Experience.new(experience_params)
        if experience.save
            render json: experience
        else
            render json: { message: experience.errors }, status: 400
        end
    end

    def show
        render json: Experience.find_by(id: params[:id])
    end

    def update
        experience = Experience.find_by(id: params[:id])
        if experience.update(experience_params)
            render json: experience
        else
            render json: { message: experience.errors }, status: 400
        end
    end

    private

    def experience_params
        params.require(:experience).permit(:name, :category, :location, :time, :recommended_times, :img_url, :likes, :liked)
    end

end