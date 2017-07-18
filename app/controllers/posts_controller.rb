class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authenticate_user!, :except => [:show, :index, :index_by_user]

  # GET /posts
  def index
    @posts = Post.all
    render :json => @posts.as_json(
      :include => {
        :user => {:only => :username},
        :character => {
          :only => [:id, :data]},
      },
      :only => [:title, :body, :created_at, :id]
    )
  end

  def index_by_user
    user = User.find_by(username: params[:user_id])
    @posts = Post.where(user_id: user.id)
    render :json => @posts.as_json(
      :include => {
        :user => {:only => :username},
        :character => {
          :only => [:id, :data]},
      },
      :only => [:title, :body, :created_at, :id]
    )
  end

  # GET /posts/1
  def show
    render :json => @post.as_json(
      :include => {
        :user => {:only => :username},
        :character => {
          :only => [:id, :data]},
        :comments => {
          :only => [:body, :id],
          :include => {
            :user => {:only => :username}
          }
        }
      },
      :only => [:title, :body, :created_at]
    )
  end

  # POST /posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :body, :user, :character_id)
    end
end
