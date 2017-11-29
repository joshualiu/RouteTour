import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, InputGroup, Glyphicon, ButtonToolbar, Button } from 'react-bootstrap';
import RenderLandMarks from './RenderLandMarks';
import Map from './Map';
import Flights from './Flights';
import RenderRestaurants from './RenderRestaurants';
import RenderHotels from './RenderHotels';
import Weather from './Weather';




const Todata = {
  "current_city": {
    "name": "Toronto",
    "location": {
      "latitude": 43.70011,
      "longitude": -79.4163
    },
    "geoname_id": 6167865,
    "total_points_of_interest": 251
  },
  "points_of_interest": [
    {
      "title": "CN Tower",
      "categories": [
        "1976 establishments in Ontario",
        "Buildings and structures in Toronto",
        "Buildings and structures with revolving restaurants",
        "Canadian National Railway facilities",
        "Communication towers in Canada",
        "Modernist architecture in Canada",
        "Observation towers in Canada",
        "Railway Lands",
        "Stairways",
        "Towers completed in 1976",
        "Towers in Ontario",
        "Transmitter sites in Canada",
        "Visitor attractions in Toronto",
        "WZMH Architects buildings"
      ],
      "grades": {
        "city_grade": 0,
        "yapq_grade": 5
      },
      "geoname_id": 6325500,
      "main_image": "http://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Toronto_-_ON_-_CN_Tower_bei_Nacht2.jpg/250px-Toronto_-_ON_-_CN_Tower_bei_Nacht2.jpg",
      "details": {
        "description": "The CN Tower  is a 553.33 m-high  concrete communications and observation tower in Downtown Toronto, Ontario, Canada. Built on the former Railway Lands, it was completed in 1976, becoming the world's tallest free-standing structure and world's tallest tower at the time. It held both records for 34 years until the completion of Burj Khalifa and Canton Tower in 2010. It is now the 3rd tallest tower in the world and remains the tallest free-standing structure in the Western Hemisphere, a signature icon of Toronto's skyline, and a symbol of Canada, attracting more than two million international visitors annually.\nIts name \"CN\" originally referred to Canadian National, the railway company that built the tower. Following the railway's decision to divest non-core freight railway assets, prior to the company's privatization in 1995, it transferred the tower to the Canada Lands Company, a federal Crown corporation responsible for real estate development. Since the name CN Tower became common in daily usage, the abbreviation was eventually expanded to Canadian National Tower or Canada's National Tower. However, neither of these names is commonly used.\nIn 1995, the CN Tower was declared one of the modern Seven Wonders of the World by the American Society of Civil Engineers. It also belongs to the World Federation of Great Towers, where it holds second-place ranking.",
        "wiki_page_link": "https://en.wikipedia.org/wiki/CN Tower",
        "short_description": "The CN Tower  is a 553.33 m-high  concrete communications and observation tower in Downtown Toronto, Ontario, Canada."
      },
      "location": {
        "longitude": -79.3871,
        "latitude": 43.6426,
        "google_maps_link": "http://maps.google.com?q=43.6426,-79.3871"
      }
    },
    {
      "title": "Royal Ontario Museum",
      "categories": [],
      "grades": {
        "city_grade": 1,
        "yapq_grade": 4.72
      },
      "geoname_id": 6615570,
      "main_image": "http://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Royal_Ontario_Museum-Michael_Lee-Chin_Crystal.jpg/400px-Royal_Ontario_Museum-Michael_Lee-Chin_Crystal.jpg",
      "details": {
        "description": "The Royal Ontario Museum  is a museum of art, world culture and natural history in Toronto, Canada. It is one of the largest museums in North America and attracts over one million visitors every year, the second most for a Canadian art museum. The museum is north of Queen's Park, in the University of Toronto district, with its main entrance on Bloor Street West. The Museum subway station is named after the ROM, and since 2008, it is decorated to resemble the institution's collection.\nEstablished on 16 April 1912 and opened on 19 March 1914, the museum has maintained close relations with the University of Toronto throughout its history, often sharing expertise and resources. The museum was under the direct control and management of the University of Toronto until 1968, when it became an independent institution. Today, the museum is Canada's largest field-research institution, with research and conservation activities that span the globe.\nWith more than six million items and forty galleries, the museum's diverse collections of world culture and natural history contribute to its international reputation. The museum contains notable collections of dinosaurs, minerals and meteorites, Near Eastern and African art, Art of East Asia, European history, and Canadian history. It houses the world's largest collection of fossils from the Burgess Shale with more than 150,000 specimens. The museum also contains an extensive collection of design and fine arts, including clothing, interior, and product design, especially Art Deco.",
        "wiki_page_link": "https://en.wikipedia.org/wiki/Royal Ontario Museum",
        "short_description": "The Royal Ontario Museum  is a museum of art, world culture and natural history in Toronto, Canada."
      },
      "location": {
        "longitude": -79.3942,
        "latitude": 43.6675,
        "google_maps_link": "http://maps.google.com?q=43.6675,-79.3942"
      }
    },
    {
      "title": "Toronto Eaton Centre",
      "categories": [],
      "grades": {
        "city_grade": 2,
        "yapq_grade": 4
      },
      "geoname_id": 7304071,
      "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Eatoncentrertorontohall.JPG/400px-Eatoncentrertorontohall.JPG",
      "details": {
        "description": "The Toronto Eaton Centre is a shopping mall and office complex in downtown Toronto, Ontario, Canada, named after the now-defunct Eaton's department store chain that once anchored it. In terms of the number of visitors, the shopping mall is Toronto's top tourist attraction, with around one million visitors per week.\nThe Eaton Centre is bounded by Yonge Street on the east, Queen Street West on the south, Dundas Street West on the north, and to the west by James Street and Trinity Square. Its interior passages also form part of Toronto's PATH underground pedestrian network, and the centre is served by two Toronto subway stations: Dundas and Queen on Line 1 Yonge–University. The complex also contains three office buildings  and the Ryerson University Ted Rogers School of Management. Additionally, the Eaton Centre is linked to a 17-storey Marriott hotel, and to Canada's largest store, the flagship location of the Hudson's Bay department store chain.",
        "wiki_page_link": "https://en.wikipedia.org/wiki/Toronto Eaton Centre",
        "short_description": "The Toronto Eaton Centre is a shopping mall and office complex in downtown Toronto, Ontario, Canada, named after the now-defunct Eaton's department store chain that once anchored it."
      },
      "location": {
        "longitude": -79.3803,
        "latitude": 43.654,
        "google_maps_link": "http://maps.google.com?q=43.654,-79.3803"
      }
    },
    {
      "title": "Hockey Hall of Fame",
      "categories": [],
      "grades": {
        "city_grade": 3,
        "yapq_grade": 3.45
      },
      "geoname_id": 6615568,
      "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hockey_Hall_of_Fame%2C_Toronto.jpg/400px-Hockey_Hall_of_Fame%2C_Toronto.jpg",
      "details": {
        "description": "The Hockey Hall of Fame is located in Toronto, Ontario, Canada. Dedicated to the history of ice hockey, it is both a museum and a hall of fame. It holds exhibits about players, teams, National Hockey League  records, memorabilia and NHL trophies, including the Stanley Cup. Originally founded in Kingston, Ontario, the Hockey Hall of Fame was first established in 1943 under the leadership of James T. Sutherland. The first class of honoured members was inducted in 1945, before the Hall of Fame had a permanent location. It moved to Toronto in 1958 after the NHL withdrew its support for the International Hockey Hall of Fame in Kingston, Ontario. Its first permanent building opened at Exhibition Place in 1961. In 1993, the Hall was relocated to a former Bank of Montreal building in Downtown Toronto, where it is now located.\nAn 18-person committee of players, coaches and others meets annually in June to select new honourees, who are inducted as players, builders or on-ice officials. In 2010, a subcategory was established for female players. The builders' category includes coaches, general managers, commentators, team owners and others who have helped build the game. Honoured members are inducted into the Hall of Fame in an annual ceremony held at the Hall of Fame building in November, which is followed by a special \"Hockey Hall of Fame Game\" between the Toronto Maple Leafs and a visiting team. As of 2014, 263 players , 102 builders and 16 on-ice officials have been inducted into the Hall of Fame. The Hall of Fame has been criticized for focusing mainly on players from the National Hockey League and largely ignoring players from other North American and international leagues.\n\n^ \"Visitor Information\". Hockey Hall of Fame. Retrieved 2007-12-26. \n^ \"McDonald named chair of HHOF\". TSN.ca.",
        "wiki_page_link": "https://en.wikipedia.org/wiki/Hockey Hall of Fame",
        "short_description": "The Hockey Hall of Fame is located in Toronto, Ontario, Canada."
      },
      "location": {
        "longitude": -79.3773,
        "latitude": 43.647,
        "google_maps_link": "http://maps.google.com?q=43.647,-79.3773"
      }
    },
    {
      "title": "Art Gallery of Ontario",
      "categories": [],
      "grades": {
        "city_grade": 4,
        "yapq_grade": 3
      },
      "geoname_id": 9409893,
      "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/AGO_at_dusk.jpg/400px-AGO_at_dusk.jpg",
      "details": {
        "description": "The Art Gallery of Ontario   is an art museum in Toronto's Downtown Grange Park district, on Dundas Street West between McCaul Street and Beverley Street.\nIts collection includes more than 80,000 works spanning the 1st century to the present day. The gallery has 45,000 square metres  of physical space, making it one of the largest galleries in North America.\nSignificant collections include the largest collection of Canadian art, an expansive body of works from the Renaissance and the Baroque eras, European art, African and Oceanic art, and a modern and contemporary collection. The photography collection is a large part of the collection, as well as an extensive drawing and prints collection. The museum contains many significant sculptures, such as in the Henry Moore sculpture centre, and represents other forms of art like historic objects, miniatures, frames, books and medieval illuminations, film and video art, graphic art, installations, architecture, and ship models.\nDuring the AGO's history, it has hosted and organized some of the world's most renowned and significant exhibitions, and continues to do so, to this day.\nSince 1974, the gallery has seen four major expansions and renovations, typically considered a high number and unseen by most galleries of the world, and continues to add spaces. The most recent are the Weston Family Learning Centre which opened in October 2011 and the David Milne Research Centre that opened in April 2012. Both projects were designed by Hariri Pontarini Architects. Earlier major renovations were designed by noted architects John C. Parkin , Barton Myers and KPMB Architects , and most recently, Frank Gehry .\nIn addition to display galleries, the structure houses an extensive library, student spaces, gallery workshop space, artist-in-residence, a high-end restaurant, café, espresso bar, research centre, theatre and lecture hall, Gehry-designed gift shop, and an event space called the Baillie Court, which occupies the entirety of the 3rd floor.\n^ \"AGO attendance set record in 2009-10\". cbc.ca. June 24, 2010. \n^ \"Curator / Director / Chief Curator Fact Sheet\". Art Gallery of Ontario. Art Gallery of Ontario. Retrieved 26 July 2011. \n^ \"AGO Appoints New President\". Art Gallery of Ontario. Art Gallery of Ontario. Retrieved 26 July 2011. \n^ \"Feneral Information Fact Sheet\". Art Gallery of Ontario. 14 September 2012. Retrieved 2012-10-16. \n^ \"Art, technology and archives unite at the AGO’s new David Milne Centre\" . Art Gallery of Ontario. 13 April 2012. Retrieved 2012-10-16.",
        "wiki_page_link": "https://en.wikipedia.org/wiki/Art Gallery of Ontario",
        "short_description": "The Art Gallery of Ontario   is an art museum in Toronto's Downtown Grange Park district, on Dundas Street West between McCaul Street and Beverley Street."
      },
      "location": {
        "longitude": -79.3928,
        "latitude": 43.6539,
        "google_maps_link": "http://maps.google.com?q=43.6539,-79.3928"
      }
    },
    {
      "title": "Niagara Falls, Ontario",
      "categories": [],
      "grades": {
        "city_grade": 5,
        "yapq_grade": 2
      },
      "geoname_id": 10128391,
      "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Niagara_Falls_Skyline.jpg/400px-Niagara_Falls_Skyline.jpg",
      "details": {
        "description": "Niagara Falls  is a Canadian city on the western bank of the Niagara River in the Golden Horseshoe region of Southern Ontario, with a population of 82,997 at the 2011 census. The municipality was incorporated on 12 June 1903. Across the Niagara River is Niagara Falls, New York.\nThe city is dominated by the Niagara Falls, a world-famous set of three large waterfalls on the Niagara River. Both the American and Horseshoe falls can be best seen from the Canadian side of the river, so the city has one of the major tourist attractions of the world. The natural spectacle attracts millions of tourists yearly.\nThis area, which stretches along the Niagara Parkway and tourist promenade, is particularly concentrated at the brink of the falls. Apart from the natural attractions along the river, it includes observation towers, high-rise hotels, souvenir shops, casinos and theatres, mostly with colourful neon billboards and advertisements, and sufficient parking to accommodate visitors. Further to the north or south, golf courses are operated alongside historic sites from the War of 1812.",
        "wiki_page_link": "https://en.wikipedia.org/wiki/Niagara Falls, Ontario",
        "short_description": "Niagara Falls  is a Canadian city on the western bank of the Niagara River in the Golden Horseshoe region of Southern Ontario, with a population of 82,997 at the 2011 census."
      },
      "location": {
        "longitude": -79.0667,
        "latitude": 43.1167,
        "google_maps_link": "http://maps.google.com?q=43.1167,-79.0667"
      }
    },
    {
      "title": "Markham, Ontario",
      "categories": [],
      "grades": {
        "city_grade": 6,
        "yapq_grade": 2
      },
      "geoname_id": 6066514,
      "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/MarkhamCivicCenter5.jpg/400px-MarkhamCivicCenter5.jpg",
      "details": {
        "description": "Markham /ˈmɑrkəm/, a city in the Regional Municipality of York, lies within the Greater Toronto Area of Southern Ontario, Canada. At the 2011 Canadian census it had a population of 301,709. The city is the fourth-largest community within the Greater Toronto Area after Toronto, Mississauga and Brampton. Markham changed its status from town to city on July 1, 2012.\nThe city gained its name from the first Lieutenant-Governor of Upper Canada, John Graves Simcoe , who named the area after his friend, William Markham, the Archbishop of York from 1776 to 1807. The first European settlement in Markham occurred when William Berczy, a German artist and developer, led a group of approximately sixty-four German families to North America. While they initially planned to settle in New York, disputes over finances and land tenure there would eventually lead to Berczy to negotiate with Simcoe for 64,000 acres  in Markham Township in 1794. Through much of Markham's history the community has been described as an agricultural community. A turn towards a more urbanized community within the township began after World War II when the township had begun to feel the effects of urban encroachment from Toronto. The completion of Highway 404 during the mid-1970s further accelerated urban development in Markham.\nAs of 2013 tertiary industry mainly drives Markham. As of 2010 \"business services\" employed the largest proportion of workers in Markham – nearly 22% of its labour force. The city also has over 900 technology and life-sciences companies, with IBM as the city's largest employer. A number of multinational companies also have their Canadian headquarters located in Markham, including: Honda Canada, Hyundai, Advanced Micro Devices, American Express, Johnson & Johnson, Apple Inc., Avaya, IBM, Motorola, Oracle, Toshiba, Toyota Financial Services  and Honeywell.",
        "wiki_page_link": "https://en.wikipedia.org/wiki/Markham, Ontario",
        "short_description": "Markham /ˈmɑrkəm/, a city in the Regional Municipality of York, lies within the Greater Toronto Area of Southern Ontario, Canada."
      },
      "location": {
        "longitude": -79.25,
        "latitude": 43.8833,
        "google_maps_link": "http://maps.google.com?q=43.8833,-79.25"
      }
    },
    {
      "title": "Niagara Falls",
      "categories": [],
      "grades": {
        "city_grade": 7,
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
    },
    {
      "title": "Canada's Wonderland",
      "categories": [],
      "grades": {
        "city_grade": 8,
        "yapq_grade": 1
      },
      "geoname_id": 6615572,
      "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Wonder_Mountain.jpg/400px-Wonder_Mountain.jpg",
      "details": {
        "description": "Canada's Wonderland is a 330-acre  theme park located in Vaughan, Ontario, a suburb approximately 40 kilometres  north of Toronto. Opened in 1981 by the Taft Broadcasting Company and The Great-West Life Assurance Company as the first major theme park in Canada, it remains the country's largest. The park was owned by Paramount Parks from 1994 to 2006 when it was known as Paramount Canada's Wonderland. Cedar Fair Entertainment Company purchased the park in 2006 dropping Paramount from the title. Canada's Wonderland has been the most visited seasonal amusement park in North America for several consecutive years. In 2013, it was the second most visited park in the Cedar Fair chain, behind Knott's Berry Farm, with 3.58 million visitors.\nCanada's Wonderland is open daily from May to September, and then only on weekends through early November. The park features 16 roller coasters, tied with Cedar Point for second-most roller coasters in an amusement park behind Six Flags Magic Mountain. Wonderland also features a 20-acre  water park called Splash Works, and during the fall season, a Halloween-themed event called Halloween Haunt.",
        "wiki_page_link": "https://en.wikipedia.org/wiki/Canada's Wonderland",
        "short_description": "Canada's Wonderland is a 330-acre  theme park located in Vaughan, Ontario, a suburb approximately 40 kilometres  north of Toronto."
      },
      "location": {
        "longitude": -79.5419,
        "latitude": 43.8425,
        "google_maps_link": "http://maps.google.com?q=43.8425,-79.5419"
      }
    },
    {
      "title": "Horseshoe Falls",
      "categories": [],
      "grades": {
        "city_grade": 9,
        "yapq_grade": 1
      },
      "geoname_id": 5121316,
      "main_image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Canadian_Horseshoe_Falls_with_Buffalo_in_background.jpg/400px-Canadian_Horseshoe_Falls_with_Buffalo_in_background.jpg",
      "details": {
        "description": "The Horseshoe Falls, also known as the Canadian Falls, as most of it lies in Canada, is part of Niagara Falls, on the Niagara River. Approximately 90% of the Niagara River, after diversions for hydropower generation, flows over Horseshoe Falls. The remaining 10% flows over the American Falls. It is located between Terrapin Point on Goat Island in the US state of New York, and Table Rock on the Ontario side of the falls. According to official U.S. Geological Survey maps , approximately two-thirds of Horseshoe Falls is located in Ontario, Canada with the remaining one-third in New York, United States of America.",
        "wiki_page_link": "https://en.wikipedia.org/wiki/Horseshoe Falls",
        "short_description": "The Horseshoe Falls, also known as the Canadian Falls, as most of it lies in Canada, is part of Niagara Falls, on the Niagara River."
      },
      "location": {
        "longitude": -79.0756,
        "latitude": 43.0773,
        "google_maps_link": "http://maps.google.com?q=43.0773,-79.0756"
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
    let flight_url = `https://api.sandbox.amadeus.com/v1.2/flights/low-fare-search?apikey=WxT65Q9xIzU5B32Q0kYjDk8zCdMezqVd&origin=${origin}&destination=${destination}&departure_date=${departure_date}&return_date=${return_date}&adults=2&nonstop=true&currency=CAD&number_of_results=1`;
    console.log("featch- get request URL:", flight_url)
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
    let base_url = `https://api.sandbox.amadeus.com/v1.2/points-of-interest/yapq-search-text?apikey=WxT65Q9xIzU5B32Q0kYjDk8zCdMezqVd&city_name=${city}&lang=EN&category=landmark&geonames=true&social_media=false&image_size=small&number_of_images=1&number_of_results=50`
    console.log("featch- get request URL:", base_url)
    console.log("hard-coded NY data for now", Todata)
    fetch(base_url, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const citydata = json;
      console.log("citydata", citydata);
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
                console.log('ok, results', result)
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
      query: this.props.city
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
              console.log("wow")
              console.log("states", this.state)
              this.search()
              this.google_search()
              this.search_flights()
            }
          }/><div><h4 style={{fontSize: '1.6em', paddingTop: '30px',paddingLeft: '240px'}}>Click RouteTour to get travel destination inspirations</h4></div>
          </div>}
          {/* {this.search()}
          {this.google_search()}
          {this.search_flights()} */}
        

        {/* <FormGroup>
          <InputGroup>
            <InputGroup.Addon onClick={ () => {
              this.search()
              console.log("states", this.state)
              this.google_search()
              this.search_flights()
              } }>
              <Glyphicon glyph="search">
              </Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup> */}

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
                {/* <h3>Weather</h3> */}
                  {/* <Weather cityname= {this.state.weatherQuery}/> */}

              </div>



        {/* <div className="return_data"> */}
           {/* <div>{ JSON.stringify(this.state.cityjson) }</div>  */}
        {/* </div> */}
            </div>

    )
  }
}

export default LandMarks;