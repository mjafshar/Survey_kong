#create survey => new
#participate in survey => view
#creater may delete the survey
# initialize routes

get "/survey/:id" do
  @survey = Survey.find(params[:id])
  erb :"survey/show"
end

post '/survey/:id' do

end

get '/survey/new' do
  @user = User.find(session[:value])

  erb :"survey/new"
end

post '/survey/new' do
  survey_title = params[:title]
  survey
  @survey = Survey.new(
    )
end
