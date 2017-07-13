class UserSerializer < ActiveModel::Serializer
  attributes :username, :id, :about, :image, :age, :main_job
  has_one :main
  has_many :characters
end
