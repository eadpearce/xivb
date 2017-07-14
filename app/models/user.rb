class User < ApplicationRecord
  has_secure_password
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password, presence: true, on: :create
  validates :password_confirmation, presence: true, on: :create

  has_many :characters
  def main
    characters.where(char_type: "main").first
  end
  def alts
    characters.where(char_type: "alt")
  end
end
