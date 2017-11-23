import React, {Component} from 'react';
import $ from 'jquery';
class WeatherInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataArr: [['Date', 'MaxTemp', 'MinTemp']],
        }
       
    }

    componentDidMount () {
        google.charts.load('current', {'packages':['corechart']});
      }
    
    drawChart = () => {
      var data = google.visualization.arrayToDataTable(this.state.dataArr);
      var options = {
        title: this.props.data.query.results.channel.location.city + " " + "Weather",
        curveType: 'function',
        legend: { position: 'bottom' }
      };
      function placeMarker(dataTable) {
        var cli = this.getChartLayoutInterface();
        var chartArea = cli.getChartAreaBoundingBox();
        // "Zombies" is element #5.
        document.querySelector('.overlay-marker').style.top = Math.floor(cli.getYLocation(dataTable.getValue(5,1))) - 50 + "px";
        document.querySelector('.overlay-marker').style.left = Math.floor(cli.getXLocation(2)) - 10 + "px";
      };
      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
      google.visualization.events.addListener(chart, 'ready',placeMarker.bind(chart, data));
      chart.draw(data, options);
      
    }

    render(){
        
        if(this.props.data){
            console.log("props.data",this.props.data);
            this.props.data.query.results.channel.item.forecast.forEach((element) => {
               this.state.dataArr.push([element.date,parseInt(element.high,10),parseInt(element.low,10)])
            })
            google.charts.setOnLoadCallback(this.drawChart);
            // this.state.dataArr = [];
            // console.log("localvar",this.state.dataArr);
            return(<div></div>)
           }
        return(<div></div>)    
           
    }
}
export default WeatherInfo;