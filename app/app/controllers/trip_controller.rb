class TripController < ApplicationController
  before_action :authenticate_user!

  def index
    # @hello_world_props = { name: "Stranger" }
    @userlistprops = {name: "T.O."}

    # Get the COUNT(*) of Users GROUPED BY City.
    @users_per_city = User.group(:country).count

    # Keep the variables separate to slide them into the javascript in the erb files.
    @cAmsterdam = @users_per_city["Amsterdam(AMS)"] || 0
    @cBangkok = @users_per_city["Bangkok(DMK)"] || 0
    @cBerlin = @users_per_city["Berlin(TXL)"] || 0
    @cChicago = @users_per_city["Chicago(ORD)"] || 0
    @cDC = @users_per_city["DC(DCA)"] || 0
    @cHongKong = @users_per_city["Hong Kong(HKG)"] || 0
    @cIstanbul = @users_per_city["Istanbul(IST)"] || 0
    @cKualaLumpur = @users_per_city["Kuala Lumpur(KUL)"] || 0
    @cLasVegas = @users_per_city["Las Vegas(LAS)"] || 0
    @cLondon = @users_per_city["London(LHR)"] || 0
    @cLosAngeles = @users_per_city["Los Angeles(LAX)"] || 0
    @cMilan = @users_per_city["Milan(MXP)"] || 0
    @cMontreal = @users_per_city["Montreal(YUL)"] || 0
    @cNewYork = @users_per_city["New York(JFK)"] || 0
    @cOsaka = @users_per_city["Osaka(ITM)"] || 0
    @cParis = @users_per_city["Paris(CDG)"] || 0
    @cPrague = @users_per_city["Prague(PRG)"] || 0
    @cRome = @users_per_city["Rome(FCO)"] || 0
    @cSeoul = @users_per_city["Seoul(ICN)"] || 0
    @cShanghai = @users_per_city["Shanghai(PVG)"] || 0
    @cSingapore = @users_per_city["Singapore(SIN)"] || 0
    @cSydney = @users_per_city["Sydney(SY)"] || 0
    @cTaipei = @users_per_city["Taipei(TPE)"] || 0
    @cTokyo = @users_per_city["Tokyo(HND)"] || 0
    @cToronto = @users_per_city["Toronto(YYZ)"] || 0
    @cVienna = @users_per_city["Vienna(VIE)"] || 0
    @cZurich = @users_per_city["Zurich(ZRH)"] || 0
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
