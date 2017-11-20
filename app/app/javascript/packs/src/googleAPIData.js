import React from 'react';
import RenderPlaces from './renderPlaces.js'

class GoogleAPIData extends React.Component{  
  constructor(props){
    super(props);
    this.state = {
      data: [],
    };  
  }
  
  geocodeAddress = (address) => {
    this.geocoder.geocode({ 'address': address }, (results, status) => {
      var latGeo;
      var lngGeo;
      if (status === google.maps.GeocoderStatus.OK) {
      
        latGeo = results[0].geometry.location.lat();
        lngGeo = results[0].geometry.location.lng();
      
        var locationToCenter = {lat: latGeo, lng: lngGeo};
        
        var service = new google.maps.places.PlacesService(document.createElement('div'));
        var typeForAPI = ['park','museum','amusement_park','art_gallery','lodging'];
        
        for(let elem in typeForAPI){
         
          service.nearbySearch({
            location: locationToCenter,
            radius: 5000,
            type: typeForAPI[elem]
          }, (results, status) => {
              
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                  
                  for (var i = 0; i < results.length; i++) {
                    
                    this.state.data.push({p:results[i].photos[0].getUrl(({'maxWidth': 200, 'maxHeight': 200})),n:results[i].name});
                    
                               
                  }
                  
                }
                
          })
              
        }
        console.log(this.state.data);
        this.setState(this.state.data);
        return;
      }
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
