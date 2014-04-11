get '/' do
  # Look in app/views/index.erb
  if session[:value]
    redirect to ('/users/index')
  else
    erb :index
  end
end
