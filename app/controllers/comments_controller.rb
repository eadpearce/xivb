class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authenticate_user!, :except => [:show, :index]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

  # GET /comments/1
  def show
    render :json => @comment.as_json(
      :include => {
        :user => {:only => :username},
        :character => {:only => [:id, :data]},
        :post => {
          :only => [:title, :id],
          :include => {
            :user => {:only => :username}}
          }
      },
      :only => [:body, :long_date, :short_date, :created_at]
    )
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = @current_user.id
    if @comment.save
      render json: @comment, status: :created, location: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
    render json: { message: "Comment was deleted." }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:body, :character, :post_id, :reply_level, :parent)
    end
end
