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
        var markers = document.querySelectorAll('.overlay-marker');
        markers.forEach((marker, index) => {
            marker.style.top = Math.floor(cli.getYLocation(dataTable.getValue(index,1))) - 50 + "px";
            marker.style.left = Math.floor(cli.getXLocation(index)) - 10 + "px";
        })
      };
      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
      google.visualization.events.addListener(chart, 'ready',placeMarker.bind(chart, data));
      chart.draw(data, options);
      this.state.dataArr = [['Date', 'MaxTemp', 'MinTemp']];
    }

    render(){
        if(this.props.data){
            this.props.data.query.results.channel.item.forecast.forEach((element) => {
               this.state.dataArr.push([element.date,(parseInt(element.high,10)-32)/1.8,(parseInt(element.low,10)-32)/1.8])
            })
            google.charts.setOnLoadCallback(this.drawChart);
            return(<div></div>)
           }
        return(<div></div>)    
           
    }
}
export default WeatherInfo;