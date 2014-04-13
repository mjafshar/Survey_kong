get '/stats/:id' do
  @user = User.find(session[:value])
  @survey = Survey.find(params[:id])
  @question_count = 0
  @question = @survey.questions.first

  if @user == @survey.creator

    erb :"stats/show"
  else
    redirect to ('users/index')
  end
end

post '/stats/:id' do
  @survey = Survey.find(params[:id])
  @question_count = params[:count].to_i
  @questions = @survey.questions.all

  if @question_count < @questions.length
    @question = @questions[@question_count]
     erb :"stats/show"
  else
    redirect to ('users/index')
  end
end
