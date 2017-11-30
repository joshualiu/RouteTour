import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, InputGroup, Glyphicon, ButtonToolbar, Button } from 'react-bootstrap';
import RenderLandMarks from './RenderLandMarks';
import Map from './Map';
import Flights from './Flights';
import RenderRestaurants from './RenderRestaurants';
import RenderHotels from './RenderHotels';
import Weather from './Weather';


  class LandMarks extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: null,
      cityjson: null, //hard-coded set cityjson data
      origin: null,
      destination: null,
      departure_date: null,
      return_date: null,
      flightjson: null,
      restaurantData: null,
      googleQuery: null,
      hotelData: null,
      weatherQuery: null,
      click: false,
    }
  }


  search_flights() {
    let origin = this.state.origin
    let destination = this.state.destination
    let departure_date = this.state.departure_date
    let return_date = this.state.return_date

    let flight_url = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=tECkidFhJHgeSVtvdAoN7hNRc9dOGArq&origin=${origin}&destination=${destination}&departure_date=${departure_date}&return_date=${return_date}&adults=2&nonstop=true&currency=CAD&number_of_results=1`;
    // console.log("featch- get request URL:", flight_url)
    fetch(flight_url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const flightdata = json;
      console.log("flightdata", flightdata);
      this.setState({flightjson: flightdata});
    });
    // this.setState({flightjson: Flightdata})
    

  }

  search() {
    let city = this.state.query    
    let base_url = `https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?apikey=tECkidFhJHgeSVtvdAoN7hNRc9dOGArq&city_name=${city}&lang=EN&category=landmark&geonames=true&social_media=false&image_size=small&number_of_images=1&number_of_results=50`
    console.log("featch- get request URL:", base_url)
    fetch(base_url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const citydata = json;
      // console.log("citydata", citydata);
      this.setState({cityjson: citydata});
    });

    // hard-coded for now
    // this.setState({cityjson: Todata})
  }


  geocodeAddress = (address, type, keyword, data) => {
    this.geocoder.geocode({ 'address': address }, (results, status) => {
      let latGeo;
      let lngGeo;
      if (status === google.maps.GeocoderStatus.OK) {
        latGeo = results[0].geometry.location.lat();
        lngGeo = results[0].geometry.location.lng();
        let locationToCenter = {lat: latGeo, lng: lngGeo};
        let service = new google.maps.places.PlacesService(document.createElement('div'));
        let typeForAPI = type; //'lodging', 'park','museum','amusement_park','art_gallery', 'restaurant'
        // for(let elem in typeForAPI){
          service.nearbySearch({
            location: locationToCenter,
            radius: 5000,
            type: type,
            keyword: keyword
          },(result, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                // console.log('ok, results', result)
                this.setState({[data]: result})
              }  
          })    
      
      }
    });
  }

 componentWillMount() {
   this.setState({
      googleQuery: this.props.city,
      origin: this.props.origin,
      destination: this.props.destination,
      departure_date: this.props.departure_date,
      return_date: this.props.return_date,
      query: this.props.city,
    })
  }
  
  
  componentDidMount () {
    this.geocoder = new google.maps.Geocoder(); 
  }
  
  
  google_search(){
    this.geocodeAddress(this.state.googleQuery, "restaurant", "restaurants", "restaurantData");
    this.geocodeAddress(this.state.googleQuery, "lodging", "hotel", "hotelData");
  }
  
  
  
  render() {
    return (
      <div className="LandMarks">
        {console.log("passing data",this.props)}
        {console.log("current state",this.state)}
        { this.state.click ? <div></div> : <div id="inspiration" style={{paddingTop: '250px'}}>
          <img style={{marginLeft: '400px'}}
          src={"https://cdn.worldvectorlogo.com/logos/react-router.svg"} width={300} height={300}
          onClick={ () => {
            this.setState({click: true})
            console.log("states", this.state)
            this.search()
            this.google_search()
            this.search_flights()
            this.setState({weatherQuery: this.props.city})
          }
          }/><div><h4 style={{fontSize: '1.6em', paddingTop: '30px',paddingLeft: '240px'}}>Click RouteTour to get travel destination inspirations</h4></div>
          </div>}
          {/* {this.search()}
          {this.google_search()}
          {this.search_flights()} */}
        


              <div className="return_landmarks">
                <RenderLandMarks 
                  data={ this.state.cityjson }
                  />
              </div>
              <div>
                  <RenderRestaurants data={this.state.restaurantData} />
              </div>
              <div>
                  <RenderHotels data={this.state.hotelData} />
              </div>


              <div className="return_flights">
                <Flights data={ this.state.flightjson }  />  
                </div>

               
              <div>
                  <Weather cityname= {this.state.weatherQuery}/> 
              </div>



        {/* <div className="return_data"> */}
           {/* <div>{ JSON.stringify(this.state.cityjson) }</div>  */}
        {/* </div> */}
            </div>

    )
  }
}

export default LandMarks;