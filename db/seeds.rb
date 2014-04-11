#Users
5.times do
  User.create(name: Faker::Name.first_name,email: Faker::Internet.email,password: "password")
end

#Surveys
User.all.each do |user|
  bool_rand = [true, false].sample
  Survey.create(
    :title => Faker::Company.name,
    :private => bool_rand,
    :user_id => user.id
  )
end

user_id_range = (User.first.id..User.last.id)
survey_id_range = (Survey.first.id..Survey.last.id)

#TakenSurveys
10.times do
  TakenSurvey.create(
    user_id: rand(user_id_range),
    survey_id: rand(survey_id_range)
    )
end

#Questions
Survey.all.each do |survey|
  rand(1..5).times do
    bool_rand = [true, false].sample
    Question.create(
      :description => Faker::Lorem.sentence(6),
      :survey_id => survey.id
    )
  end
end

#Choices
Question.all.each do |question|
  rand(3..6).times do
    Choice.create(
      possible_choice: Faker::Lorem.word,
      question_id: question.id
    )
  end
end

TakenSurvey.all.each do |taken_survey|
  taken_survey.survey.questions.each do |question|
    Response.create(
      taken_survey_id: taken_survey.id,
      choice_id: question.choices.sample.id
      )
  end
end

