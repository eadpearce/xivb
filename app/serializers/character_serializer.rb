class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :about, :lodestone_id, :data
  has_one :user
end
