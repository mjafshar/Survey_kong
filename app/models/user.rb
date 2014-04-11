class User < ActiveRecord::Base
  include BCrypt

  has_many :surveys
  has_many :taken_surveys

  validates :email, uniqueness: true
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => :save
  has_secure_password
end
