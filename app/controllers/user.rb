enable :sessions

get '/users/login' do
  erb :'users/login'
end

get '/users/index' do
    @user = User.find(session[:value])
    @created_surveys = Survey.where(user_id: session[:value])
    taken_surveys = @user.taken_surveys.all
    @completed_surveys = []
    taken_surveys.each do |taken_survey|
      @completed_surveys << Survey.find(taken_survey.survey_id)
    end

    all_surveys = Survey.all
    @available_surveys = all_surveys - @completed_surveys
  erb :'users/index'
end

post '/users/login' do
  @user = User.where(email: params[:email]).first
  if @user && @user.authenticate(params[:password])
    session[:value] = @user.id
    redirect to ('/users/index')
  else
    'false'
  end
end

get '/users/logout' do
  session.clear
  redirect to ('/')
end

get '/users/signup' do
  erb :'users/signup'
end

post '/users/signup' do
  user_info = params[:user_info]
  @user = User.new(user_info)

  if @user.save
    session[:value] = @user.id
    redirect to ('/users/index')
  else
    redirect to ('/users/login')
  end
end


