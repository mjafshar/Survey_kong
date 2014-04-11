#create survey => new
#participate in survey => view
#creater may delete the survey
# initialize routes

get '/survey/new' do
  @user = User.find(session[:value])

  erb :"survey/new"
end
get "/survey/:id" do
  @survey = Survey.find(params[:id])
  erb :"survey/show"
end

post '/survey/new' do
  @user = User.find(session[:value])
  if params[:privacy] == true
    @private = true
  else
    @private = false
  end
  @survey = Survey.new(
    title: params[:title],
    user_id: @user.id,
    :private => @private
    )

  if @survey.save
    @question = Question.create(
      description: params[:question],
      survey_id: @survey.id
      )

    @choice = Choice.create(
      possible_choice: params[:chosen_answer],
      question_id: @question.id
      )

    redirect to ('/users/index')
  else
    erb :"survey/new"
  end
end

post '/survey/:id' do
  @user = User.find(session[:value])
  @survey = Survey.find(params[:survey_id])
  @taken_survey = TakenSurvey.create(
    user_id: @user.id,
    survey_id: @survey.id
    )
  @user_response = Response.create(
    taken_survey_id: @taken_survey.id,
    choice_id: params[:answer]
    )
  redirect to ("/")
end
