class Character < ApplicationRecord
  belongs_to :user, optional: true
  after_find do |character|
    time_updated = Time.now # check current time
    # only update character data if data hasn't already been updated in the
    # last 24hrs or doesn't exist
    days_since_update = (time_updated - character.data_updated) / (60 * 60 * 24)
    if !character.data_updated || (days_since_update >= 1)
      url = "http://api.xivdb.com/character/#{character.lodestone_id}"
      response = HTTParty.get(url, format: :plain)
      data = JSON.parse(response)
      puts 'UPDATING CHARACTER DATA'
      character.data = data
      character.data_updated = time_updated
      character.save
    end
  end
end
