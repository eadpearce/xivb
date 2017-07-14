class ApplicationController < ActionController::API
  before_action :authenticate_user!

  def authenticate_user!
    render json: { errors: ["Unauthorized"] }, status: 401 unless user_signed_in?
  end

  def user_signed_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(username: decoded_token[:username]) if id_found?
  rescue
    nil
  end

  private

  def id_found?
    # puts "DECODED TOKEN: #{decoded_token}"
    token && decoded_token && decoded_token[:username]
  end

  def decoded_token
    @decoded_token ||= Auth.decode(token) if token
  end

  def token
    @token ||= if request.headers['Authorization'].present?
      request.headers['Authorization'].split.last
    end
  end
end
