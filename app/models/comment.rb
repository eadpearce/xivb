class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :character
  belongs_to :post
  def as_json(options={})
    options[:methods] = [:long_date, :short_date]
    super
  end
  def long_date
    require 'date'
    date = self.created_at
    formatted_date = date.strftime('%c')
    formatted_date
  end
  def short_date
    require 'date'
    date = self.created_at
    formatted_date = date.strftime('%D')
    formatted_date
  end
end
