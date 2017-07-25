class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  before_action :authenticate_user!, :except => [:show, :index]

  # GET /users
  def index
    @users = User.all
    render :json => @users.as_json(:only => :username)
  end

  # GET /users/1
  def show
    render :json => @user.as_json(
      :include => {
        :main => {:only => [:id, :data, :lodestone_id]},
        :alts => {:only => [:id, :data, :lodestone_id]},
        :posts => {
          :only => [:title, :id, :created_at],
          :methods => [:long_date, :short_date]
        }
      },
      :only => [:username, :main_job, :about, :age]
    )
  end

  # POST /users
  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @current_user.id === @user.id # only allow the user to edit themselves
      if user_params[:password].blank? # allows editing of other sections without needing password conf
        user_params.delete(:password)
        user_params.delete(:password_confirmation)
      end
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    else
      render json: { message: "You cannot edit another user's profile >:(" }, status: :unauthorized
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find_by(username: params[:username])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :image, :about, :main_job, :age, :password, :password_confirmation)
    end
end
