class ChatController < TripController
  def new
  end

  def trip
  end

  def dashboard
    @hello_world_props = { name: "Stranger" }
  end
end
