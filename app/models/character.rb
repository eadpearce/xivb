class Character < ApplicationRecord
  belongs_to :user, optional: true
  after_find do |character|
    response = HTTParty.get("http://api.xivdb.com/character/#{character.lodestone_id}", format: :plain)
    character.data = JSON.parse(response)
  end
end
