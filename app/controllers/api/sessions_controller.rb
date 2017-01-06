class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      user_params[:username],
      user_params[:password]
    )
    if @user
      login(@user)
    else
      render json: ['Invalid credentials']
    end
  end

  def destroy
    logout
  end
end
