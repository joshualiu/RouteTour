import React from 'react';

class GoogleAPIData extends React.Component{  
//   getInitialState = () => {
//     return {
//       isGeocodingError: false,
//       foundAddress: INITIAL_LOCATION.address
//     }
//   }

  geocodeAddress = (address) => {
    this.geocoder.geocode({ 'address': address }, (results, status) => {
      var latGeo;
      var lngGeo;
      if (status === google.maps.GeocoderStatus.OK) {

        // this.setState({
        //   foundAddress: results[0].formatted_address,
        //   isGeocodingError: false
        // });
       
        latGeo = results[0].geometry.location.lat();
        lngGeo = results[0].geometry.location.lng();
      
        var locationToCenter = {lat: latGeo, lng: lngGeo};
        console.log("location to centers",locationToCenter);
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
                    console.log(results[i]);
                  }
                }
              }
          )}


        return;
      }

    //   this.setState({
    //     foundAddress: null,
    //     isGeocodingError: true
    //   });

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

  // setMapElementReference = (mapElementReference) => {
  //   this.mapElement = mapElementReference;
  // }

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
