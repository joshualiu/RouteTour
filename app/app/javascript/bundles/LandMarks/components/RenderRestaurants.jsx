import React, { Component } from 'react';
import List from './List';
import Parser from 'html-react-parser';


class RenderRestaurants extends Component {

    
    render(){
      if(this.props.data){
        const results = this.props.data.slice(0,2)
        return (
          <div>
            {results.map((elm, k) => {
              return (
                <span key={k}>
                  <List 
                    img={elm.photos[0].getUrl(({'maxWidth': 100, 'maxHeight': 100}))}
                    name={elm.name}
                    rating={elm.rating}
                    link={Parser(elm.photos[0].html_attributions[0])}
                    />
                  </span>
              )
            })}
          </div>
        )

      }
      else {
        return (
          <div>Empty</div>
        )
      }
      
    }   
}

export default RenderRestaurants;

