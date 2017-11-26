class HomeController < ApplicationController
  #before_action :authenticate_request!
  before_action :authenticate_user!
  
  def index
    #render json: {'logged_in' => true}
  end
end
