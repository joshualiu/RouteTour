class HomeController < ApplicationController
  #before_action :authenticate_request!
  before_action :authenticate_user!
  
  def index
    @trips = Trip.where(user_id: current_user.id)

    #render json: {'logged_in' => true}
  end
end
