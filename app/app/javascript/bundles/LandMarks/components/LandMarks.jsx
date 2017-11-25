import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import RenderLandMarks from './RenderLandMarks';
import Map from './Map';
import Flights from './Flights';
import RenderRestaurants from './RenderRestaurants';
import Weather from './Weather';




const Todata = {
  "current_city": {
      "name": "Toronto",
      "location": {
          "latitude": 43.70011,
          "longitude": -79.4163
      },
      "geoname_id": 6167865,
      "total_points_of_interest": 9549
  },
  "points_of_interest": [
      {
          "title": "Niagara Falls",
          "categories": [],
          "grades": {
              "city_grade": 0,
              "yapq_grade": 1
          },
          "geoname_id": 5110122,
          "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Brooklyn_Museum_-_Niagara_-_Louis_R%C3%A9my_Mignot_-_overall.jpg/400px-Brooklyn_Museum_-_Niagara_-_Louis_R%C3%A9my_Mignot_-_overall.jpg",
          "details": {
              "description": "Niagara Falls  is the collective name for three waterfalls that straddle the international border between Canada and the United States; more specifically, between the province of Ontario and the state of New York. They form the southern end of the Niagara Gorge.\nFrom largest to smallest, the three waterfalls are the Horseshoe Falls, the American Falls and the Bridal Veil Falls. The Horseshoe Falls lie mostly on the Canadian side and the American Falls entirely on the American side, separated by Goat Island. The smaller Bridal Veil Falls are also located on the American side, separated from the other waterfalls by Luna Island. The international boundary line was originally drawn through Horseshoe Falls in 1819, but the boundary has long been in dispute due to natural erosion and construction.\nLocated on the Niagara River, which drains Lake Erie into Lake Ontario, the combined falls form the highest flow rate of any waterfall in the world, with a vertical drop of more than 165 feet . Horseshoe Falls is the most powerful waterfall in North America, as measured by vertical height and also by flow rate. The falls are located 17 miles  north-northwest of Buffalo, New York and 75 miles  south-southeast of Toronto, between the twin cities of Niagara Falls, Ontario, and Niagara Falls, New York.\nNiagara Falls were formed when glaciers receded at the end of the Wisconsin glaciation , and water from the newly formed Great Lakes carved a path through the Niagara Escarpment en route to the Atlantic Ocean. While not exceptionally high, the Niagara Falls are very wide. More than six million cubic feet  of water falls over the crest line every minute in high flow, and almost four million cubic feet  on average.\nThe Niagara Falls are renowned both for their beauty and as a valuable source of hydroelectric power. Managing the balance between recreational, commercial, and industrial uses has been a challenge for the stewards of the falls since the 19th century.",
              "wiki_page_link": "https://en.wikipedia.org/wiki/Niagara Falls",
              "short_description": "Niagara Falls  is the collective name for three waterfalls that straddle the international border between Canada and the United States; more specifically, between the province of Ontario and the state of New York."
          },
          "location": {
              "longitude": -79.071,
              "latitude": 43.08,
              "google_maps_link": "http://maps.google.com?q=43.08,-79.071"
          }
      }
  ]
}

const Flightdata = {
    "currency": "USD",
    "results": [
      {
        "itineraries": [
          {
            "outbound": {
              "flights": [
                {
                  "departs_at": "2017-12-25T18:30",
                  "arrives_at": "2017-12-25T20:20",
                  "origin": {
                    "airport": "BOS",
                    "terminal": "B"
                  },
                  "destination": {
                    "airport": "YYZ",
                    "terminal": "1"
                  },
                  "marketing_airline": "AC",
                  "operating_airline": "AC",
                  "flight_number": "7687",
                  "aircraft": "E75",
                  "booking_info": {
                    "travel_class": "ECONOMY",
                    "booking_code": "A",
                    "seats_remaining": 1
                  }
                }
              ]
            },
            "inbound": {
              "flights": [
                {
                  "departs_at": "2017-12-28T06:30",
                  "arrives_at": "2017-12-28T08:02",
                  "origin": {
                    "airport": "YYZ",
                    "terminal": "1"
                  },
                  "destination": {
                    "airport": "BOS",
                    "terminal": "B"
                  },
                  "marketing_airline": "AC",
                  "operating_airline": "AC",
                  "flight_number": "7622",
                  "aircraft": "E75",
                  "booking_info": {
                    "travel_class": "ECONOMY",
                    "booking_code": "K",
                    "seats_remaining": 9
                  }
                }
              ]
            }
          }
        ],
        "fare": {
          "total_price": "246.39",
          "price_per_adult": {
            "total_fare": "246.39",
            "tax": "79.39"
          },
          "restrictions": {
            "refundable": false,
            "change_penalties": true
          }
        }
      }
    ]
  }

  class LandMarks extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: '',
      cityjson: null, //hard-coded set cityjson data
      origin: 'BOS',
      destination: 'YYZ',
      departure_date: '2017-12-25',
      return_date: '2017-12-28',
      flightjson: null,
      restaurantData: null,
      googleQuery: '',
      hotelData: null,
      weatherQuery: null,
    }
  }


  search_flights() {
    let origin = this.state.origin
    let destination = this.state.destination
    let departure_date = this.state.departure_date
    let return_date = this.state.return_date
    let flight_url = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=qCogGsckyYZ0U29gZCurP7ty5JMl1yUg&origin=${origin}&destination=${destination}&departure_date=${departure_date}&return_date=${return_date}&adults=2&nonstop=true&currency=CAD&number_of_results=1`;
    console.log("featch- get request URL:", flight_url)
    // fetch(flight_url, {
    //   method: 'GET'
    // })
    // .then(response => response.json())
    // .then(json => {
    //   const flightdata = json;
    //   console.log("flightdata", flightdata);
    //   this.setState({flightjson: flightdata});
    // });
    this.setState({flightjson: Flightdata})
    

  }

  search() {
    let city = this.state.query    
    let base_url = `https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?apikey=qCogGsckyYZ0U29gZCurP7ty5JMl1yUg&city_name=${city}&category=landmark&geonames=false&vibes=false&social_media=false&image_size=small&number_of_images=1&number_of_results=5`;
    console.log("featch- get request URL:", base_url)
    console.log("hard-coded NY data for now", Todata)
    // fetch(base_url, {
    //   method: 'GET'
    // })
    // .then(response => response.json())
    // .then(json => {
    //   const citydata = json;
    //   console.log("citydata", citydata);
    //   this.setState({cityjson: citydata});
    // });

    // hard-coded for now
    this.setState({cityjson: Todata})
  }


  geocodeAddress_restaurants = (address, type) => {
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
            //keyword: "restaurant"
          },(result, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('ok, results', result)
                this.setState({restaurantData: result})
              }  
          })    
      
      }
    });
  }


  geocodeAddress_hotels = (address, type) => {
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
            //keyword: ""
          },(result, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('ok, results', result)
                this.setState({hotelData: result})
              }  
          })    
      
      }
    });
  }

  componentDidMount () {
    this.geocoder = new google.maps.Geocoder(); 
  }


  google_search(){
    //this.geocodeAddress_restaurants(this.state.googleQuery, "restaurant");
    // this.geocodeAddress_hotels(this.state.googleQuery, "lodging");

  }


  render() {
    return (
      <div className="LandMarks">
      <h1>React component Dashboard-landmarks</h1>
        <div className="App-title"><h1>LandMarks Search</h1></div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a city"
              value={this.state.query}
              onChange={ e => {this.setState({ query: e.target.value })} }
              onKeyPress={ e=> {
                if (e.key === 'Enter') {
                  this.search()
                }
              }}
            />
            <InputGroup.Addon onClick={ () => this.search() }>
              <Glyphicon glyph="search">
              </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup>

              <div className="return_landmarks">
                <RenderLandMarks 
                  data={ this.state.cityjson }
                  />
              </div>

    <div className="Flights">
        <div className="App-title"><h1>Flights Search</h1></div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="origin"
              value={this.state.origin}
              onChange={ e => {this.setState({ origin: e.target.value })} }
              onKeyPress={ e=> {
                if (e.key === 'Enter') {
                  this.search();
                  
                }
              }}
            />
            <InputGroup.Addon onClick={ () => this.search_flights() }>
              <Glyphicon glyph="search">
              </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup>


        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="destination"
              value={this.state.destination}
              onChange={ e => {this.setState({ destination: e.target.value })} }
              onKeyPress={ e=> {
                if (e.key === 'Enter') {
                  this.search_flights()
                }
              }}
            />
            <InputGroup.Addon onClick={ () => this.search_flights() }>
              <Glyphicon glyph="search">
              </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup>


      <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="departure_date 2017-12-25"
              value={this.state.departure_date}
              onChange={ e => {this.setState({ departure_date: e.target.value })} }
              onKeyPress={ e=> {
                if (e.key === 'Enter') {
                  this.search_flights()
                }
              }}
            />
            <InputGroup.Addon onClick={ () => this.search_flights() }>
              <Glyphicon glyph="search">
              </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup>


        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="return_date 2017-12-28"
              value={this.state.return_date}
              onChange={ e => {this.setState({ return_date: e.target.value })} }
              onKeyPress={ e=> {
                if (e.key === 'Enter') {
                  this.search_flights();
                  
                }
              }}
            />
            <InputGroup.Addon onClick={ () => this.search_flights() }>
              <Glyphicon glyph="search">
              </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup>
    </div>

      <div className="return_flights">
        <div>Flight data -- only show the lowest price</div>
            <Flights
              data={ this.state.flightjson } 
              />  
        </div>


        <div className="Google_Search">
          <div className="Search-title"><h2>Google Maps Search</h2></div>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Toronto"
                value={this.state.googleQuery}
                onChange={ e => {this.setState({ googleQuery: e.target.value })} }
                onKeyPress={ e=> {
                  if (e.key === 'Enter') {
                    this.google_search()
                    this.setState({weatherQuery: this.state.googleQuery})
                  }
                }}
              />
              <InputGroup.Addon onClick={ () => this.google_search() }>
                <Glyphicon glyph="search">
                </Glyphicon>
              </InputGroup.Addon>
            </InputGroup>

          </FormGroup>
      </div>



          <div><h3>Restaurants Results</h3></div>
            <div>
              <RenderRestaurants data={this.state.restaurantData} />
            </div>

            <div><h3>Hotels Results</h3></div>
            <div>
              <RenderRestaurants data={this.state.hotelData} />
            </div>




        <div className="return_data">
           {/* <div>{ JSON.stringify(this.state.cityjson) }</div>  */}
            <div>
              <h2>Maps</h2>
              <Map />
              <h2>Weather</h2>
              <Weather cityname= {this.state.weatherQuery}/>
             </div>
        </div>
      </div>

    )
  }
}

export default LandMarks;