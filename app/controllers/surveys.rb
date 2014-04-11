#create survey => new
#participate in survey => view
#creater may delete the survey
# initialize routes


post '/survey/:id' do

end

get '/survey/new' do
  @user = User.find(session[:value])

  erb :"survey/new"
end
get "/survey/:id" do
  @survey = Survey.find(params[:id])
  erb :"survey/show"
end

post '/survey/new' do
  @user = session[:value]
  @survey = Survey.new(
    title: params[:title],
    user_id: @user,
    description: params[:question],
    answer: params[:answer]
    )

  if @survey.save
    redirect to ('/users/index')
  else
    redirect to ('survey/new')
  end
end
