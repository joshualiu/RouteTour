import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherInfo from './weatherinfo.jsx'
import $ from 'jquery';
import Parser from 'html-react-parser';

class Map extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: null,
      icon: [],
      cityname: null
    }
  }
    
  handleFormSubmit = (cityname) => {
    
    $.getJSON(`https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='${cityname}')&format=json`)
    .then((data) => {
      var temp = this.iconLogic(data);
      this.setState({data:data,icon:temp});
      console.log("yahoo data",data);
    })
  }
  
  
  setWeatherIcon = (condid) =>{
    
    switch(condid) {
      case '0':
      case '2':
      return 'wi-tornado';
      case '1':
      return 'wi-storm-showers';
      case '3':
      case '4':
      return 'wi-thunderstorm';
      case '5':
      return 'wi-snow';
      case '6':
      case '7':
      return 'wi-rain-mix';
      case '8':
      case '9':
      return 'wi-sprinkle';
      case '10':
      return 'wi-hail';
      case '11':
      case '12':
      return 'wi-showers';
      case '13':
      case '15':
      case '16':
      return 'wi-snow';
      case '14':
      return 'wi-storm-showers';
      case '17':
      case '18':
      return 'wi-hail';
      case '19':
      return 'wi-cloudy-gusts';
      case '20':
      case '21':
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
      case '29':
      return 'wi-night-cloudy';
      case '28':
      case '30':
      return 'wi-day-cloudy';
      case '31':
      case '33':
      return 'wi-night-clear';
      case '32':
      return 'wi-day-sunny';
      case '34':
      return 'wi-day-sunny-overcast';
      case '35':
      return 'wi-hail';
      case '36':
      return 'wi-day-sunny';
      case '37':
      case '38':
      case '39':
      return 'wi-thunderstorm';
      case '40':
      return 'wi-storm-showers';
      case '41':
      case '42':
      case '43':
      case '46':
      return 'wi-snow';
      case '44':
      return 'wi-cloudy';
      case '45':
      return 'wi-lightning';
      case '47':
      return 'wi-thunderstorm';
      case '3200':
      default:
      return 'wi-cloud';
    }            
  }
  iconLogic(data){
    if(data){ 
      return data.query.results.channel.item.forecast.map(item => this.setWeatherIcon(item.code));
    }
  }

  
    componentWillMount(newProps){
      if(this.props.cityname !== newProps.cityname){
        this.handleFormSubmit(newProps.cityname);
      }
    }
   
  
  
  render(){
    // if(this.props.cityname){
    //   this.handleFormSubmit(this.props.cityname);
    // }
    return(
     
            
        <div>
         
          <div className="chartWithMarkerOverlay" style = {{position: 'relative',width: 700 + 'px'}}>
            <div id="curve_chart" style={{width: 700 +'px', height: 500+'px'}}></div>
            <div>
              {
                this.state.icon.map((icon, idx) =>{
                  return (
                  <div className="overlay-marker" key={Math.random()} style={{width: 20 + 'px',height: 20 + 'px',position: 'absolute',top: 53 + 'px', left: 528 + 'px'}}>
                    <i className={`wi ${icon}`} />
                  </div>
                  );
                })
              }
            </div>
          </div>  
          <WeatherInfo data={this.state.data} />
        </div>
      
    )
    
    
  }
  
}

export default Map;