get '/' do
  # Look in app/views/index.erb
  if session[:value]
    erb :"/users/index"
  else
    erb :index
  end
end
