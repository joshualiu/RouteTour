import React from 'react';
import RenderPlaces from './renderPlaces.js';
import Parser from 'html-react-parser';


class GoogleAPIData extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      data: [],
      latWeather: 34.05,
      lngWeather: 118.25,
    };  
  }
  
  geocodeAddress = (address) => {
    this.geocoder.geocode({ 'address': address }, (results, status) => {
      var latGeo;
      var lngGeo;
      if (status === google.maps.GeocoderStatus.OK) {
        latGeo = results[0].geometry.location.lat();
        lngGeo = results[0].geometry.location.lng();
        this.setState({latWeather:latGeo,lngWeather:lngGeo});
        var locationToCenter = {lat: latGeo, lng: lngGeo};
        var service = new google.maps.places.PlacesService(document.createElement('div'));
        var typeForAPI = ['lodging']; //'park','museum','amusement_park','art_gallery'
        for(let elem in typeForAPI){
          service.nearbySearch({
            location: locationToCenter,
            radius: 5000,
            type: null,
            minprice: 4,
            //type: typeForAPI[elem],
            keyword: "tourist attractions"
            //keyword: "POI",
          },(result, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < result.length; i++) { 
                  this.state.data.push({p:result[i].photos[0].getUrl(({'maxWidth': 200, 'maxHeight': 200})),n:result[i].name,r:result[i].rating,type:typeForAPI[elem],maps_ref:Parser(result[i].photos[0].html_attributions[0])});      
                }
              }  
            
            return;
           
          })    
        }
        console.log("data",this.state.data);
        
        setTimeout(()=>{this.setState(this.state.data)}, 2000);
        this.state.data = [];
        return;
      }
      return;
    });
  }
  
  handleFormSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    var address = this.searchInputElement.value;
    this.geocodeAddress(address);
  }
 
  componentDidMount () {
    var mapElement = this.mapElement;
    this.geocoder = new google.maps.Geocoder(); 
  }

  setSearchInputElementReference = (inputReference) => {
    this.searchInputElement = inputReference;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form className="form-inline" onSubmit={this.handleFormSubmit}>
              <div className="row">
                <div className="col-xs-8 col-sm-10">

                  <div className="form-group">
                    <label className="sr-only" htmlFor="address">Address</label>
                    <input type="text" className="form-control input-lg" id="address" placeholder="London, United Kingdom" ref={this.setSearchInputElementReference} required />
                  </div>

                </div>
                <div className="col-xs-4 col-sm-2">

                  <button type="submit" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                  </button>
                  
                  <div>
                    <RenderPlaces data={this.state.data} />
                    </div>

                </div>
              </div>
            </form>
           
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleAPIData;
