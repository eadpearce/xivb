class Character < ApplicationRecord
  belongs_to :user, optional: true
  after_find do |character|
    time_updated = Time.now
    puts "DATA UPDATED #{character.data_updated}" 
    # if ((time_updated - character.data_updated)/(60*60*24)) >= 1 || !character.data_updated
    #   response = HTTParty.get("http://api.xivdb.com/character/#{character.lodestone_id}", format: :plain)
    #   character.data = JSON.parse(response)
    #   character.data_updated = Time.now
    # end
  end
end
