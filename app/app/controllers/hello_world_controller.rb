# frozen_string_literal: true

class HelloWorldController < ApplicationController
  layout "hello_world"

  def index
    @hello_world_props = { 
      city: "tokyo",
      origin: "BOS",
      destination: "YYZ",
      departure_date: "2017-12-25",
      return_date: "2017-12-28",
   }
  end
end
