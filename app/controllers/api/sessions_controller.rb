class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if @user
      login(@user)
    else
      render json: ['Invalid credentials'], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ['No user'], status: 404
    end
  end
end
