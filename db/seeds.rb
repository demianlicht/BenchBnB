# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

benches = Bench.create([
  {description:"Here's a bench", lat: 37.792038, lng: -122.393531},
  {description:"Here's another bench", lat: 37.784922, lng: -122.402650},
  {description: "This one is a bench too", lat: 37.806764, lng: -122.447631},
  {description: "DEFINITELY NOT A BENCH", lat: 37.770092, lng: -122.379388}
])
