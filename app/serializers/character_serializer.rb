class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :about, :lodestone_id, :data, :char_type
  belongs_to :user # write it this way not up here ^^^ to serialize the user inside the character data 
end
