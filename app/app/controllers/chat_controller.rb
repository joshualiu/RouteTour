class ChatController < TripController
  def new
  end

  def trip
  end

  def dashboard
    @hello_world_props = { 
      city: "Tokyo",
      origin: "BOS",
      destination: "YYZ",
      departure_date: "2017-12-25",
      return_date: "2017-12-28",
   }
  end
end
