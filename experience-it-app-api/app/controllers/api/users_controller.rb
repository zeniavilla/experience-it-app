class Api::UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: { messages: user.errors }, status: 400
    end

    private

    def user_params
        params.require(:user).permit(:name, :email, :password)
    end

end