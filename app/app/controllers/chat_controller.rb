class ChatController < TripController
  def new
    # @chat_messages_props = { 
    #   city: "DC ",
    #   origin: "BOS",
    #   destination: "YYZ",
    #   departure_date: "2017-12-25",
    #   return_date: "2017-12-28",
    # }

  end

  def trip
    @trip = Trip.find_by(id: params[:tripid])
    
    @user = User.find_by(id: current_user.id)
    # @chat_messages_props = { 
    #   city: "toronto",
    #   origin: "BOS",
    #   destination: "YYZ",
    #   departure_date: "2017-12-25",
    #   return_date: "2017-12-28",
    # } 
    
    @chat_messages_props = { 
      city: @trip.destination[0..-6],
      origin: @user.country[-4,3],
      destination: @trip.destination[-4,3],
      departure_date: @trip.start_date.strftime("%Y-%m-%d"),
      return_date: @trip.end_date.strftime("%Y-%m-%d"),
    }
  end

  def dashboard
    @hello_world_props = { 
      city: "Toronto",
      origin: "BOS",
      destination: "YYZ",
      departure_date: "2017-12-25",
      return_date: "2017-12-28",
   }
  end
end
