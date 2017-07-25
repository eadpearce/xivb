class Post < ApplicationRecord
  belongs_to :character, optional: true
  belongs_to :user
  has_many :comments, dependent: :destroy
  def as_json(options={})
    options[:methods] = [:long_date, :short_date]
    super
  end
  def long_date
    require 'date'
    date = self.created_at
    formatted_date = date.strftime('%X %D')
    formatted_date
  end
  def short_date
    require 'date'
    date = self.created_at
    formatted_date = date.strftime('%D')
    formatted_date
  end
end
