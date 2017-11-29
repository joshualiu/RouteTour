# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

# Helper functions
def open_asset(file_name)
  File.open(Rails.root.join('app/assets', 'images', file_name))
end

# THE LINES BELOW should purge all tables.
# User.destroy_all
# Trip.destroy_all

# Either use cities or countries to populate the user country field.
#arrCities = ["Toronto", "New York", "Montreal", "London", "Chicago", "Los Angeles", "Las Vegas", "Paris", "Rome", "Barcelona", "DC", "Zurich", "Berlin", "Tokyo", "Taipei", "Shanghai", "Sydney", "Buenos Aires", "Prague", "Vienna", "Osaka", "Milan", "Amsterdam", "Hong Kong", "Seoul", "Istanbul", "Kuala Lumpur", "Singapore", "Bangkok"]
arrCities = ["Amsterdam(AMS)","Bangkok(DMK)","Berlin(TXL)","Chicago(ORD)","DC(DCA)","Hong Kong(HKG)","Istanbul(IST)","Kuala Lumpur(KUL)","Las Vegas(LAS)","London(LHR)","Los Angeles(LAX)","Milan(MXP)","Montreal(YUL)","New York(JFK)","Osaka(ITM)","Paris(CDG)","Prague(PRG)","Rome(FCO)","Seoul(ICN)","Shanghai(PVG)","Singapore(SIN)","Sydney(SY)","Taipei(TPE)","Tokyo(HND)","Toronto(YYZ)","Vienna(VIE)","Zurich(ZRH)"]

# Create array of file names for generic user profiles.
arrProfilePictures = ["http://localhost:3000/assets/profilepic1.png","http://localhost:3000/assets/profilepic2.png","http://localhost:3000/assets/profilepic3.png","http://localhost:3000/assets/profilepic4.png","http://localhost:3000/assets/profilepic5.png","http://localhost:3000/assets/profilepic6.png","http://localhost:3000/assets/profilepic7.png","http://localhost:3000/assets/profilepic8.png","http://localhost:3000/assets/profilepic9.png","http://localhost:3000/assets/profilepic10.png","http://localhost:3000/assets/profilepic11.png","http://localhost:3000/assets/profilepic12.png","http://localhost:3000/assets/profilepic13.png","http://localhost:3000/assets/profilepic14.png","http://localhost:3000/assets/profilepic15.png","http://localhost:3000/assets/profilepic16.png","http://localhost:3000/assets/profilepic17.png","http://localhost:3000/assets/profilepic18.png","http://localhost:3000/assets/profilepic19.png","http://localhost:3000/assets/profilepic20.png"]

# arrCountries = [""]

# Add some users to the database.
20.times do |index|
  user = User.create!({
    email: Faker::Internet.email,
    password: "fake_encrypted_password",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    gender: Faker::Demographic.sex,
    country: arrCities.sample,
    user_img: arrProfilePictures.sample,#"http://localhost:3000/assets/profilepic1.png",
    description: Faker::Company.profession
  })

  # Then add 1-3 trips for each user.
  1 + rand(2).times do |index2|
    Trip.create!({
      destination: arrCities.sample,
      description: Faker::Lorem.sentence(3, true, 4),
      start_date: Faker::Date.between(2.days.from_now, Date.today),
      end_date: Faker::Date.between(7.days.from_now, 21.days.from_now),
      user_id: user.id
    })
  end

end

puts "User and Trips have been added"