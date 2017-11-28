class ChatController < TripController
  def new
    @chat_messages_props = { 
    }

  end

  def trip
  end

  def dashboard
    @hello_world_props = { name: "Stranger" }
  end
end
