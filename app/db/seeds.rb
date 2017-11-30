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
Trip.destroy_all
User.destroy_all

# Either use cities or countries to populate the user country field.
#arrCities = ["Toronto", "New York", "Montreal", "London", "Chicago", "Los Angeles", "Las Vegas", "Paris", "Rome", "Barcelona", "DC", "Zurich", "Berlin", "Tokyo", "Taipei", "Shanghai", "Sydney", "Buenos Aires", "Prague", "Vienna", "Osaka", "Milan", "Amsterdam", "Hong Kong", "Seoul", "Istanbul", "Kuala Lumpur", "Singapore", "Bangkok"]
arrCities = ["Amsterdam(AMS)","Bangkok(DMK)","Berlin(TXL)","Chicago(ORD)","DC(DCA)","Hong Kong(HKG)","Istanbul(IST)","Kuala Lumpur(KUL)","Las Vegas(LAS)","London(LHR)","Los Angeles(LAX)","Milan(MXP)","Montreal(YUL)","New York(JFK)","Osaka(ITM)","Paris(CDG)","Prague(PRG)","Rome(FCO)","Seoul(ICN)","Shanghai(PVG)","Singapore(SIN)","Sydney(SY)","Taipei(TPE)","Tokyo(HND)","Toronto(YYZ)","Vienna(VIE)","Zurich(ZRH)"]

# Create array of file names for generic user profiles.
arrProfilePictures = ["http://localhost:3000/assets/profilepic1.png","http://localhost:3000/assets/profilepic2.png","http://localhost:3000/assets/profilepic3.png","http://localhost:3000/assets/profilepic4.png","http://localhost:3000/assets/profilepic5.png","http://localhost:3000/assets/profilepic6.png","http://localhost:3000/assets/profilepic7.png","http://localhost:3000/assets/profilepic8.png","http://localhost:3000/assets/profilepic9.png","http://localhost:3000/assets/profilepic10.png","http://localhost:3000/assets/profilepic11.png","http://localhost:3000/assets/profilepic12.png","http://localhost:3000/assets/profilepic13.png","http://localhost:3000/assets/profilepic14.png","http://localhost:3000/assets/profilepic15.png","http://localhost:3000/assets/profilepic16.png","http://localhost:3000/assets/profilepic17.png","http://localhost:3000/assets/profilepic18.png","http://localhost:3000/assets/profilepic19.png","http://localhost:3000/assets/profilepic20.png"]

# arrCountries = [""]

arrHobbies = ["3D printing","Acting","Amateur radio","Baton twirling","Board/Tabletop games","Book restoration","Cabaret","Calligraphy","Candle making","Coffee roasting","Coloring","Computer programming","Cooking","Cosplaying","Couponing","Creative writing","Crocheting","Cross-stitch","Crossword puzzles","Cryptography","Dance","Digital arts","Do it yourself","Drama","Drawing","Electronics","Embroidery","Fantasy Sports","Fashion","Fishkeeping","Flower arranging","Foreign language learning","Gaming (tabletop games and role-playing games)","Genealogy","Glassblowing","Gunsmithing","Herp keeping","Homebrewing","Hydroponics","Ice skating","Jewelry making","Jigsaw puzzles","Juggling","Knapping","Knife making","Knitting","Kombucha Brewing","Lacemaking","Lapidary","Leather crafting","Lego building","Listening to music","Machining","Macrame","Magic","Metalworking","Model building","Origami","Painting","Pet","Philately","Photography","Plastic embedding","Playing musical instruments","Poi","Pottery","Puzzles","Quilling","Quilting","Reading","Scrapbooking","Sculpting","Sewing","Singing","Sketching","Soapmaking","Stand-up comedy","Table tennis","Tatting","Taxidermy","Video gaming","Watching movies","Watching television","Web surfing","Whittling","Wood carving","Woodworking","Worldbuilding","Writing","Yo-yoing","Yoga","Outdoor hobbiesedit","Air sports","Archery","Astronomy","BASE jumping","Baseball","Basketball","Beekeeping","Bird watching","Blacksmithing","Board sports","Bodybuilding","Brazilian jiu-jitsu","Camping","Canyoning","Dowsing","Driving","Fishing","Flag football","Flying","Flying disc","Foraging","Freestyle football","Gardening","Geocaching","Ghost hunting","Graffiti","Handball","High-power rocketry","Hiking","Hooping","Horseback riding","Hunting","Inline skating","Jogging","Kayaking","Kite flying","Kitesurfing","LARPing","Letterboxing","Metal detecting","Motor sports","Mountain biking","Mountaineering","Mushroom hunting/Mycology","Netball","Nordic skating","Orienteering","Paintball","Parkour","Photography","Polo","Powerlifting","Rafting","Rappelling","Road biking","Rock climbing","Roller skating","Rugby","Running","Sailing","Sand art","Scouting","Scuba diving","Sculling or Rowing","Topiary","Shooting","Shopping","Skateboarding","Skiing","Skimboarding","Skydiving","Slacklining","Snowboarding","Stone skipping","Surfing","Swimming","Travel","Taekwondo","Tai chi","Urban exploration","Vacation","Vehicle restoration","Walking","Water sports"]

# Add some users to the database.
200.times do |index|
  user = User.create!({
    email: Faker::Internet.email,
    password: "password",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    gender: Faker::Demographic.sex,
    country: arrCities.sample,
    user_img: arrProfilePictures.sample,#"http://localhost:3000/assets/profilepic1.png",
    description: arrHobbies.sample + ", " + arrHobbies.sample + ", " + arrHobbies.sample
    # description: Faker::Company.profession
  })

  # # Then add 1-3 trips for each user.
  # 1 + rand(2).times do |index2|
  # Then add 1 trip for each user.
  1.times do |index2|
    Trip.create!({
      destination: arrCities.sample,
      description: Faker::Lorem.sentence(3, true, 4),
      start_date: Faker::Date.between(2.days.from_now, 6.days.from_now),
      end_date: Faker::Date.between(9.days.from_now, 21.days.from_now),
      user_id: user.id
    })
  end

end

puts "User and Trips have been added"