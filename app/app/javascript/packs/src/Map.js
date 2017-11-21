import React from 'react'
import RenderGoogleAPIData from './googleAPIData.js'
import RenderPlaces from './renderPlaces.js'

class Map extends React.Component{
    constructor(props){
        super(props);

    }

    
    callbackFunction = (data) => {
        console.log(data);
        console.log('hey')
        const wind = data.query.results.channel.wind;
        alert(wind.chill);
    };

    setSearchInputElementReference = (inputReference) => {
        this.searchInputElement = inputReference;
      }

    handleFormSubmit = (submitEvent) => {
        submitEvent.preventDefault();
        fetch("https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) 		where text='toronto')&format=json",{method: 'GET'})
        .then((result) => {this.callbackFunction(result)});
        
    }
   

    render(){
        return(
            <div>
            <p>I'm the map</p>
        <RenderGoogleAPIData />


        <div className="container">
        <div className="row">
        <div className="col-sm-12">

            <form className="form-inline" onSubmit={this.handleFormSubmit}>
            <div className="row">
                <div className="col-xs-8 col-sm-10">

                <div className="form-group">
                    <label className="sr-only" htmlFor="address">Location</label>
                    <input type="text" className="form-control input-lg" id="address" placeholder="Location" ref={this.setSearchInputElementReference} required />
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


</div>
        )
        

    }

}


export default Map;
   