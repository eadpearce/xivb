class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :character
  belongs_to :post
end
