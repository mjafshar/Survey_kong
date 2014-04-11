helpers do
  def current_user
    @user ||= User.find(session[:value]) if session[:value]
  end
end
