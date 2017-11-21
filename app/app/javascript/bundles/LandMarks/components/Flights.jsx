import React, { Component } from 'react';


class Flights extends Component {
  
  render() {
    let outbound = this.props.results.outbound.flights[0]
    let inbound = this.props.results.inbound.flights[0]
    console.log("departs date", outbound.departs_at)

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

        <div>Total price: USD{ this.props.fare }</div>

      </div>

    )
  }
}
export default Flights;
