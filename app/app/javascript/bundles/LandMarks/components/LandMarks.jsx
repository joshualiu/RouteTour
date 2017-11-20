import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Profile from './Profile';
import Map from './Map';
import Flights from './Flights';

const NYdata = {
  "current_city": {
      "name": "New York City",
      "location": {
          "latitude": 40.71427,
          "longitude": -74.00597
      },
      "geoname_id": 5128581,
      "total_points_of_interest": 1122,
      "important_note": "This city is not yet supported with Yapq Api.                     Please check our supported city list here: http://yapq.io/cities.html or in json format: http://yapq.io/cities.txt"
  },
  "points_of_interest": [
      {
          "title": "Empire State Building",
          "categories": [
              "Latin rhythmic radio stations",
              "Radio stations established in 1964",
              "Radio stations in New York City",
              "Spanish-language radio stations in New York",
              "Univision Radio Network stations"
          ],
          "grades": {
              "city_grade": 0,
              "yapq_grade": 5
          },
          "geoname_id": 5116597,
          "main_image": "https://upload.wikimedia.org/wikipedia/en/5/54/WXNY_X96.jpg",
          "details": {
              "description": "WXNY-FM is a radio station that broadcasts a Spanish language format. It is licensed to Univision Radio at 96.3 FM, and airs in the New York City metropolitan area. The station has a transmitter atop the Empire State Building.\n\n",
              "wiki_page_link": "https://en.wikipedia.org/wiki/Empire State Building",
              "short_description": "WXNY-FM is a radio station that broadcasts a Spanish language format."
          },
          "location": {
              "longitude": -73.9857,
              "latitude": 40.7484,
              "google_maps_link": "http://maps.google.com?q=40.7484,-73.9857"
          }
      },
      {
          "title": "Madison Square Garden",
          "categories": [
              "1998 Goodwill Games venues",
              "Arena football venues",
              "Basketball venues in New York",
              "Boxing venues in the United States",
              "Cablevision",
              "College basketball venues in the United States",
              "Convention centers in New York",
              "Eighth Avenue (Manhattan)",
              "Former Viacom subsidiaries",
              "Indoor ice hockey venues in New York",
              "Indoor lacrosse venues in the United States",
              "Indoor soccer venues in the United States",
              "Indoor track and field venues in the United States",
              "Landmarks in Manhattan",
              "Madison Square Garden",
              "Music venues in Manhattan",
              "National Basketball Association venues",
              "National Hockey League venues",
              "New York Knicks venues",
              "New York Liberty",
              "New York Rangers arenas",
              "Pennsylvania Plaza",
              "Rebuilt buildings and structures in the United States",
              "Round buildings",
              "Sports venues completed in 1968",
              "Sports venues in Manhattan",
              "St. John's Red Storm basketball venues",
              "World Hockey Association venues"
          ],
          "grades": {
              "city_grade": 1,
              "yapq_grade": 4
          },
          "geoname_id": 5125640,
          "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Britney_Spears_MSG.jpg/400px-Britney_Spears_MSG.jpg",
          "details": {
              "description": "Madison Square Garden, sometimes called MSG or The Garden, is a multi-purpose indoor arena in the New York City borough of Manhattan in the U.S. state of New York. Located in Midtown Manhattan between Seventh and Eighth Avenues from 31st to 33rd Streets, it is situated atop Pennsylvania Station. It is the fourth venue to bear the \"MSG\" name, the first two  of which were located on Madison Square, on East 26th Street and Madison Avenue, with the third Madison Square Garden further uptown at Eighth Avenue and 50th Street. The Garden is used for professional basketball and ice hockey, as well as boxing, concerts, ice shows, circuses, and other forms of sports and entertainment. It is close to other midtown Manhattan landmarks, including the Empire State Building, Koreatown, and Macy's at Herald Square. It is home to the New York Rangers of the National Hockey League, the New York Knicks of the National Basketball Association, and residency to singer-songwriter, Billy Joel.\nOpening on February 11, 1968, it is the oldest and most active major sporting facility in the New York metropolitan area. It is the oldest arena in the National Hockey League and the second-oldest arena in the National Basketball Association. MSG is the fourth-busiest music arena in the world in terms of ticket sales, behind England's The O2 Arena, Manchester Arena and Scotland's The SSE Hydro. At a total construction cost of approximately $1.1 billion, MSG has been ranked as one of the ten most expensive stadium venues ever built. It is part of the Pennsylvania Plaza office and retail complex. Several other operating entities related to the Garden share its name.",
              "wiki_page_link": "https://en.wikipedia.org/wiki/Madison Square Garden",
              "short_description": "Madison Square Garden, sometimes called MSG or The Garden, is a multi-purpose indoor arena in the New York City borough of Manhattan in the U."
          },
          "location": {
              "longitude": -73.9936,
              "latitude": 40.7506,
              "google_maps_link": "http://maps.google.com?q=40.7506,-73.9936"
          }
      },
      {
          "title": "Death of John Lennon",
          "categories": [
              "1980 in music",
              "1980 in New York",
              "1980 murders in the United States",
              "20th century in New York City",
              "Central Park West Historic District",
              "Crimes in New York City",
              "Deaths by firearm in New York",
              "Deaths by person",
              "John Lennon"
          ],
          "grades": {
              "city_grade": 2,
              "yapq_grade": 3
          },
          "geoname_id": 0,
          "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/1_West_72nd_Street_%28The_Dakota%29_by_David_Shankbone.jpg/400px-1_West_72nd_Street_%28The_Dakota%29_by_David_Shankbone.jpg",
          "details": {
              "description": "John Lennon was an English musician who gained worldwide fame as one of the members of The Beatles, for his subsequent solo career, and for his political activism and pacifism. He was shot by Mark David Chapman in the archway of the building where he lived, The Dakota, in New York City on Monday, 8 December 1980. Lennon had just returned from Record Plant Studio with his wife, Yoko Ono.\nLennon was pronounced dead on arrival at Roosevelt Hospital. He was 40 years old. At the hospital, it was stated that nobody could have lived for more than a few minutes after sustaining such injuries. Shortly after local news stations reported Lennon's death, crowds gathered at Roosevelt Hospital and in front of the Dakota. Lennon was cremated on 10 December 1980 at the Ferncliff Cemetery in Hartsdale, New York; the ashes were given to Ono, who chose not to hold a funeral for him. The first media report of Lennon's death to a US national audience was announced by Howard Cosell, on ABC's Monday Night Football.",
              "wiki_page_link": "https://en.wikipedia.org/wiki/Death of John Lennon",
              "short_description": "John Lennon was an English musician who gained worldwide fame as one of the members of The Beatles, for his subsequent solo career, and for his political activism and pacifism."
          },
          "location": {
              "longitude": -73.976,
              "latitude": 40.7764,
              "google_maps_link": "http://maps.google.com?q=40.7764,-73.976"
          }
      },
      {
          "title": "Trump Tower (New York City)",
          "categories": [
              "1980s architecture in the United States",
              "1983 establishments in New York",
              "Fifth Avenue",
              "Midtown Manhattan",
              "Office buildings completed in 1983",
              "Office buildings in Manhattan",
              "Residential buildings completed in 1983",
              "Residential condominiums in New York City",
              "Residential skyscrapers in Manhattan",
              "Skyscrapers between 200 and 249 meters"
          ],
          "grades": {
              "city_grade": 3,
              "yapq_grade": 2
          },
          "geoname_id": 0,
          "main_image": "http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Trump-Tower-2.jpg/250px-Trump-Tower-2.jpg",
          "details": {
              "description": "Trump Tower is a 68-story mixed-use skyscraper located at 725 Fifth Avenue, at the corner of East 56th Street in Midtown Manhattan, New York City. It was developed by Donald Trump and the Equitable Life Assurance Company, it is now just developed and owned by Donald Trump, and designed by Der Scutt of Swanke, Hayden Connell. The ground floor stores in the tower were opened for business on November 30, 1983. The grand opening of the Atrium and stores was held on February 14, 1983 with the apartments and offices following shortly thereafter. HRH Construction was the contractor on the building and the Construction Executive was Barbara Res.",
              "wiki_page_link": "https://en.wikipedia.org/wiki/Trump Tower (New York City)",
              "short_description": "Trump Tower is a 68-story mixed-use skyscraper located at 725 Fifth Avenue, at the corner of East 56th Street in Midtown Manhattan, New York City."
          },
          "location": {
              "longitude": -73.9742,
              "latitude": 40.7625,
              "google_maps_link": "http://maps.google.com?q=40.7625,-73.9742"
          }
      },
      {
          "title": "One World Trade Center",
          "categories": [],
          "grades": {
              "city_grade": 4,
              "yapq_grade": 1
          },
          "geoname_id": 0,
          "main_image": "http://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/OWTC1sep.jpg/220px-OWTC1sep.jpg",
          "details": {
              "description": "One World Trade Center  refers to the main building of the new World Trade Center complex in Lower Manhattan, New York City. It is the tallest skyscraper in the Western Hemisphere, and the fourth-tallest in the world. The 104-story supertall structure shares a numeric name with the northern Twin Tower of the original World Trade Center, which was destroyed in the terrorist attacks of September 11, 2001. The new skyscraper stands on the northwest corner of the 16-acre  World Trade Center site, on the site of the original 6 World Trade Center. The building is bordered by West Street to the west, Vesey Street to the north, Fulton Street to the south, and Washington Street to the east.\nConstruction of below-ground utility relocations, footings, and foundations for the new building began on April 27, 2006. On March 30, 2009, the Port Authority of New York and New Jersey confirmed that the building would be officially known by its legal name of \"One World Trade Center\", rather than its colloquial name of \"Freedom Tower\". The building is 104 standard floors high, but the tower has only 94 actual stories.\nOne World Trade Center became the tallest structure in New York City on April 30, 2012, when it surpassed the height of the Empire State Building. The tower's steel structure was topped out on August 30, 2012. On May 10, 2013, the final component of the skyscraper's spire was installed, making the building, including its spire, reach a total height of 1,776 feet . Its height in feet is a deliberate reference to the year when the United States Declaration of Independence was signed. The building opened on November 3, 2014. The new World Trade Center complex will initially include three other high-rise office buildings, which will be built along Greenwich Street, and the National September 11 Memorial & Museum, located just south of One World Trade Center, where the original Twin Towers stood. The construction of the new building is part of an effort to memorialize and rebuild following the destruction of the original World Trade Center complex.",
              "wiki_page_link": "https://en.wikipedia.org/wiki/One World Trade Center",
              "short_description": "One World Trade Center  refers to the main building of the new World Trade Center complex in Lower Manhattan, New York City."
          },
          "location": {
              "longitude": -74.0135,
              "latitude": 40.713,
              "google_maps_link": "http://maps.google.com?q=40.713,-74.0135"
          }
      }
  ]
}

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
      cityjson: NYdata, //hard-coded set cityjson data
      origin: 'BOS',
      destination: 'YYZ',
      departure_date: '2017-12-25',
      return_date: '2017-12-28',
      flightjson: Flightdata
    }
  }


  search_flights() {
    let origin = this.state.origin
    let destination = this.state.destination
    let departure_date = this.state.departure_date
    let return_date = this.state.return_date
    let flight_url = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=qCogGsckyYZ0U29gZCurP7ty5JMl1yUg&origin=${origin}&destination=${destination}&departure_date=${departure_date}&return_date=${return_date}&number_of_results=1`;
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
    console.log("cityata", this.state.cityjson)
  }

  render() {
    return (
      <div className="LandMarks">
        <div className="App-title"> amadeus api</div>
        <h1>Landmarks Search</h1>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for a city"
              value={this.state.query}
              onChange={ e => {this.setState({ query: e.target.value })} }
            //   onKeyPress={ e=> {
            //     if (e.key === 'Enter') {
            //       this.search()
            //     }
            //   }}
            />
            <InputGroup.Addon onClick={ () => this.search() }>
              <Glyphicon glyph="search">
              </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup>


    <div className="Flights">
        <div className="App-title"> amadeus api</div>
        <h1>Flights Search</h1>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="origin"
              value={this.state.origin}
              onChange={ e => {this.setState({ origin: e.target.value })} }
              onKeyPress={ e=> {
                if (e.key === 'Enter') {
                  this.search()
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
    </div>


        <div className="return_data">
          <Profile 
            city={ this.state.cityjson.current_city.name }
            landmark={ this.state.cityjson.points_of_interest}
            />
           {/* <div>{ JSON.stringify(this.state.cityjson) }</div>  */}
            <div>
              <h2>Maps</h2>
              <Map />
             </div>Flight data -- only show the lowest price
                <div>{ JSON.stringify(this.state.flightjson) }</div>
                <Flights 
                  result={ this.state.flightjson.results[0].itineraries }
                  fare={ this.state.flightjson.results[0].fare } 
                  restrictions={ this.state.flightjson.results[0].restrictions }
                  />  
             <div>
                 
             </div>
        </div>
      </div>

    )
  }
}

export default LandMarks;