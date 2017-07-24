class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :character
  belongs_to :post
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
