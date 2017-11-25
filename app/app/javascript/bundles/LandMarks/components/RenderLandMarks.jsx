import React, { Component } from 'react';

class RenderLandMarks extends Component {

  render() {
    // let cityname = this.props.city !== null ? this.props.city : 'Unknow city'
    if (this.props.data) {
      let cityname = this.props.data.current_city.name;
      let landmarks = this.props.data.points_of_interest;
      return (
        <div>
          <div>Current city:</div>
          <h3>{ cityname }</h3>
            <div> Landmarks</div>
              {
                landmarks.map((lm, k) => {
                  return (

                    // <div>
                    //   <ul className="grid">
                    //         <li>
                    //           <figure>
                    //             <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Royal_Ontario_Museum-Michael_Lee-Chin_Crystal.jpg/400px-Royal_Ontario_Museum-Michael_Lee-Chin_Crystal.jpg" alt="img01"/>
                    //             <figcaption>
                    //               <h3>Camera</h3>
                    //               <span>Jacob Cummings</span>
                    //               <a href="https://www.blog.google/topics/trends/lets-talk-turkey-thanksgiving-food-trends/">Take a look</a>
                    //             </figcaption>
                    //           </figure>
                    //         </li>
                    //       </ul>
                    // </div>
                    <span key={k}>
                      <h5>{ lm.title }</h5>
                      <img
                        alt="Profile"
                        className="Profile-img"
                        src={ lm.main_image}
                      />
                      <div>Description</div>
                      <h5>{ lm.details.short_description }</h5>
                      <h5>{ ['longitude: ', lm.location.longitude, ' latitude: ',lm.location.latitude] }</h5>
                      <a href= { lm.location.google_maps_link } >Google Maps Page</a><br></br>
                      <a href= { lm.details.wiki_page_link } >Wiki Page</a>
                    </span>
                  )
                })
              }
          </div>
      )
    }
    else {
      return (
        <div>No city results</div>
      )
    }
  }
}

export default RenderLandMarks;