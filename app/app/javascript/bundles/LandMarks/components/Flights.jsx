import React, { Component } from 'react';


class Flights extends Component {
  
  render() {

    if (this.props.data) {
      let outbound = this.props.data.results[0].itineraries[0].outbound.flights[0]
      let inbound = this.props.data.results[0].itineraries[0].inbound.flights[0]
      let fare = this.props.data.results[0].fare.total_price
      return(
        <div>
          <div>Outbound: </div>
          <div>From { outbound.origin.airport } to { outbound.destination.airport }:</div>
          <div>Departs at: { outbound.departs_at } Arrives at: { outbound.arrives_at}</div>
          <div>Flight number { outbound.marketing_airline }{ outbound.flight_number }</div>
  
          <div>Inbound: </div>
          <div>From { inbound.origin.airport } to { inbound.destination.airport }:</div>
          <div>Departs at: { inbound.departs_at } Arrives at: { inbound.arrives_at}</div>
          <div>Flight number { inbound.marketing_airline }{ inbound.flight_number }</div>
  
          <div>Total price: CAD{ fare }</div>
  
        </div>
  
      )

    }
    else {
      return (
        <div>No Flights data</div>
      )
    }
 
  }
}
export default Flights;
