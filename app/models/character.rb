class Character < ApplicationRecord
  belongs_to :user, optional: true
  after_find do |character|
  time_updated = Time.now # check current time
  # only update character data if data hasn't already been updated in the last 24hrs or doesn't exist
    if !character.data_updated or ((time_updated - character.data_updated)/(60*60*24) >= 1)
      response = HTTParty.get("http://api.xivdb.com/character/#{character.lodestone_id}", format: :plain)
      data = JSON.parse(response)
      puts "UPDATING CHARACTER DATA"
      character.data = data
      character.data_updated = time_updated
      character.save
    end
  end
end
