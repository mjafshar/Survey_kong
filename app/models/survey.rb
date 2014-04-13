class Survey < ActiveRecord::Base
  belongs_to :creator, class_name: "User", foreign_key: "user_id"
  has_many :participants, through: :taken_surveys, source: :user
  has_many :questions, dependent: :destroy
  has_many :taken_surveys, dependent: :destroy
  has_many :choices, through: :questions

end
