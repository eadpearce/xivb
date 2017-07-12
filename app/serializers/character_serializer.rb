class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :about, :lodestone_id
  has_one :user
end
