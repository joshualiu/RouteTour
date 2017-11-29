class TripController < ApplicationController
  def index
    # @hello_world_props = { name: "Stranger" }
    @userlistprops = User.all
    @trip = Trip.all
  end

  def new
    @trip = Trip.new

    @trip.user_id = current_user.id
    @trip.start_date = Time.now + 7.hours
    @trip.end_date = Time.now + 7.days + 7.hours
  end

  def create
    @trip = Trip.new(trip_params)

    if @trip.save
      redirect_to :trip_index, notice: 'Trip created!'
    else
      render :new
    end
  end

  def show
    trip = Trip.find_by(id: params[:id])
    render json: {status: trip}
  end

  def edit
    @trip = Trip.find_by(id: params[:id])
  end

  def update

    if Trip.update(trip_params[:id], trip_params)
      redirect_to controller: 'trip', action: 'edit', id: trip_params[:id]
    else
      render :back
    end
  end

  private
  
    def trip_params
      params.require(:trip).permit(
        :id,
        :destination,
        :description,
        :start_date,
        :end_date,
        :user_id
      )
    end
end
