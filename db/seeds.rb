# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

klyn = User.create!(
  username: "klyn",
  email: "klyn@klyn.com",
  password: "password",
  password_confirmation: "password",
  about: "hi this is klyn",
  age: 26,
  main_job: "DRK",
  image: "https://pbs.twimg.com/profile_images/879615407614812160/NElFNqO__400x400.jpg"
)
klyn.characters.create!(
  lodestone_id: 9010552,
  char_type: "main"
)
