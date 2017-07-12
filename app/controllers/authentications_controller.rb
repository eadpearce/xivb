class AuthenticationsController < ApplicationController
  # skip_before_action :authenticate_user!

  def register
    user = User.new(user_params)
    if user.save
      # token = Auth.issue({username: user.username})
      # render json: { token: token, user: UserSerializer.new(user) }, status: :ok
      render json: { user: user }, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
    #   token = Auth.issue({username: user.username})
      # render json: { token: token, user: UserSerializer.new(user) }, status: :ok
      render json: { user: user }, status: :ok
    else
      render json: { errors: ["Invalid login credentials."]}, status: 401
    end
  end

  private
  def user_params
    hash = {}
    hash.merge! params.slice(:username, :email, :password, :password_confirmation).permit!
    hash
  end
end
