class Post < ApplicationRecord
  belongs_to :character, optional: true
  belongs_to :user
  has_many :comments, dependent: :destroy
end
