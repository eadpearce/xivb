class Post < ApplicationRecord
  belongs_to :character, optional: true
  belongs_to :user
  has_many :comments, dependent: :destroy
  def as_json(options={})
    options[:methods] = [:date_created]
    super
  end
  def date_created
    require 'date'
    date = self.created_at
    formatted_date = date.strftime('%c')
    formatted_date
  end
end
