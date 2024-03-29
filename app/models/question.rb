class Question < ActiveRecord::Base
  belongs_to :survey
  has_many :choices, dependent: :destroy
  has_many :responses, through: :choices
end
