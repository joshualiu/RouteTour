import React from 'react'
import RenderGoogleAPIData from './googleAPIData.js'
import RenderPlaces from './renderPlaces.js'
import WeatherInfo from './weatherinfo.js'
import $ from 'jquery';
import Parser from 'html-react-parser';

class Map extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: null,
      icon: [],
      html: '',
    }
  }
  
  setSearchInputElementReference = (inputReference) => {
    this.searchInputElement = inputReference;
  }
  
  handleFormSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    $.getJSON(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${this.searchInputElement.value}')&format=json`)
    .then((data) => {
      this.setState({data:data});
      this.iconLogic();
    })
    
    
  }
  
  
  setWeatherIcon = (condid) =>{
    
    switch(condid) {
      case '0':
      return 'wi-tornado';
      case '1':
      return 'wi-storm-showers';
      case '2':
      return 'wi-tornado';
      case '3':
      return 'wi-thunderstorm';
      case '4':
      return 'wi-thunderstorm';
      case '5':
      return 'wi-snow';
      case '6':
      return 'wi-rain-mix';
      case '7':
      return 'wi-rain-mix';
      case '8':
      return 'wi-sprinkle';
      case '9':
      return 'wi-sprinkle';
      case '10':
      return 'wi-hail';
      case '11':
      return 'wi-showers';
      case '12':
      return 'wi-showers';
      case '13':
      return 'wi-snow';
      case '14':
      return 'wi-storm-showers';
      case '15':
      return 'wi-snow';
      case '16':
      return 'wi-snow';
      case '17':
      return 'wi-hail';
      case '18':
      return 'wi-hail';
      case '19':
      return 'wi-cloudy-gusts';
      case '20':
      return 'wi-fog';
      case '21':
      return 'wi-fog';
      case '22':
      return 'wi-fog';
      case '23':
      return 'wi-cloudy-gusts';
      case '24':
      return 'wi-cloudy-windy';
      case '25':
      return 'wi-thermometer';
      case '26':
      return 'wi-cloudy';
      case '27':
      return 'wi-night-cloudy';
      case '28':
      return 'wi-day-cloudy';
      case '29':
      return 'wi-night-cloudy';
      case '30':
      return 'wi-day-cloudy';
      case '31':
      return 'wi-night-clear';
      case '32':
      return 'wi-day-sunny';
      case '33':
      return 'wi-night-clear';
      case '34':
      return 'wi-day-sunny-overcast';
      case '35':
      return 'wi-hail';
      case '36':
      return 'wi-day-sunny';
      case '37':
      return 'wi-thunderstorm';
      case '38':
      return 'wi-thunderstorm';
      case '39':
      return 'wi-thunderstorm';
      case '40':
      return 'wi-storm-showers';
      case '41':
      case '42':
      case '43':
      return 'wi-snow';
      case '44':
      return 'wi-cloudy';
      case '45':
      return 'wi-lightning';
      case '46':
      return 'wi-snow';
      case '47':
      return 'wi-thunderstorm';
      case '3200':
      default:
      return 'wi-cloud';
    }            
  }
  iconLogic = () =>{
    console.log("into icon logic",this.state.data);
    if(this.state.data){ 
      // this.state.data.query.results.channel.item.forecast.forEach((element) => {
      
      //     var temp = this.setWeatherIcon(String(element.code));
      //     //console.log(temp);
      //     this.state.icon.push(temp);
      //     //console.log("look",this.state.icon);
      
      //  })
      const iconList = this.state.data.query.results.channel.item.forecast.map(item => this.setWeatherIcon(item.code));
      //console.log("icon",this.state.icon);
      this.setState({ icon: iconList });
      // return this.iconHtml();
    }
  }
  
  // iconHtml = () => {
  //     this.state.icon.map((icon) =>{
  //         return (
  //             <div className="overlay-marker" style={{width: 20 + 'px',height: 20 + 'px',position: 'absolute',top: 53 + 'px', left: 528 + 'px'}}>
  //                 <i className={`wi ${icon}`} />
  //             </div>
  //         );
  //     })
  
  //     this.setState({html:html});
  //     return html;  
  
  // }
  
  
  render(){
    return(
      <div>
        <p>I'm the map</p>
        <RenderGoogleAPIData />       
        <div>
          
          <form onSubmit={this.handleFormSubmit}>
            <div>
              <div>
                <div >
                  <label htmlFor="address">Place</label>
                  <input type="text" id="address" placeholder="Location" ref={this.setSearchInputElementReference} required />
                </div>
                
              </div>
              <div>
                <button type="submit">
                </button>
              </div>
            </div>
          </form>
          <div className="chartWithMarkerOverlay" style = {{position: 'relative',width: 700 + 'px'}}>
            <div id="curve_chart" style={{width: 700 +'px', height: 500+'px'}}></div>
            <div>
              {
                this.state.icon.map((icon, idx) =>{
                  return (
                  <div className="overlay-marker" key={idx} style={{width: 20 + 'px',height: 20 + 'px',position: 'absolute',top: 53 + 'px', left: 528 + 'px'}}>
                    <i className={`wi ${icon}`} />
                  </div>
                  );
                })
              }
            </div>
          </div>  
          <WeatherInfo data={this.state.data} />
        </div>
      </div>
    )
    
    
  }
  
}

export default Map;



