#create survey => new
#participate in survey => view
#creater may delete the survey
# initialize routes

get '/survey/new' do
  erb :"survey/new"
end

get "/survey/:id" do
  @survey = Survey.find(params[:id])
  erb :"survey/show"
end

post '/survey/new' do
  user = User.find(session[:value])
  if params[:privacy] == "true"
    @private = true
  else
    @private = false
  end
  questions = params[:questions]
  puts "================================================"
  puts "This is the survey title: #{params[:title]}"
  puts "These are questions: #{questions.inspect}"
  puts "This is question 1: #{questions[:question1][:question]}"
  puts "This is question 2: #{questions[:question1][:answers]}"
  puts "Is this survey private? #{params[:privacy]}"
  puts "================================================"
  survey = Survey.new(
    title: params[:title],
    user_id: user.id,
    :private => @private
    )

  #Harry's attempt to refactor :)
  if survey.save
    questions.each do |question_count, question_answer|
      question = Question.create(
        description: question_answer[:question],
        survey_id: survey.id
        )
      question_answer[:answers].each_value do |choice|
        Choice.create(
          possible_choice: choice,
          question_id: question.id
          )
      end
    end
    redirect to ('/users/index')
  else
    erb :"survey/new"
  end

  # if survey.save
  #   questions.each do |new_question|
  #     question = Question.create(
  #       description: new_question.last[:question],
  #       survey_id: survey.id
  #       )
  #     new_question.last[:answers].each_value do |choice|
  #       Choice.create(
  #         possible_choice: choice,
  #         question_id: question.id
  #       )
  #     end
  #   end
  #   redirect to ('/users/index')
  # else
  #   erb :"survey/new"
  # end
end

post '/survey/:id' do
  @user = User.find(session[:value])
  @survey = Survey.find(params[:survey_id])
  @taken_survey = TakenSurvey.create(
    user_id: @user.id,
    survey_id: @survey.id
    )
  question_count = params[:question_count].to_i
  question_counter = 1
  question_count.times do
    choice = params["#{question_counter}"]
    @user_response = Response.create(
      taken_survey_id: @taken_survey.id,
      choice_id: choice
      )
    question_counter += 1
  end
  redirect to ("/")
end

delete '/survey/:id' do
  @survey = Survey.find(params[:id])
  @survey.destroy
  redirect to ("/")
end
