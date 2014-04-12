get '/stats/:id' do
  @user = User.find(session[:value])
end