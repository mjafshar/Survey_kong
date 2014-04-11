get '/' do
  # Look in app/views/index.erb
  if session[:value]

    @user = User.find(session[:value])
    @user_surveys = Survey.where(user_id: session[:value])

    erb :'/users/index'
  else
    erb :index
  end
end
