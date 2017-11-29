import React, { Component } from 'react';

class List extends Component {
  
  render() {
    console.log(this.props)
    return(
      <div>
        <div>List</div>
        <img src={this.props.img} />
        <div>Name: {this.props.name}</div>
        <div>Rating: {this.props.rating}</div>
        <div>{this.props.link}</div>
        </div>
    )
  }
}

export default List;
  