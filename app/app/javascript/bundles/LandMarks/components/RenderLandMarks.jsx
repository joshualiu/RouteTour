import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

class RenderLandMarks extends Component {

  render() {
    // let cityname = this.props.city !== null ? this.props.city : 'Unknow city'
    if (this.props.data) {
      let cityname = this.props.data.current_city.name;
      let landmarks = this.props.data.points_of_interest;
      return (
        <div>
          <h3>Places to visit in { cityname } </h3>
              {
                landmarks.map((lm, k) => {
                  if(k < 5) {
                  return (
                    // <span key={k}>
                      <Media key={k}>
                          <Media.Left>
                            <img width={64} height={64} src={ lm.main_image }  alt="Image"/>
                          </Media.Left>
                          <Media.Body>
                            <Media.Heading>{ lm.title }</Media.Heading>
                            <p>{ lm.details.short_description }</p>
                            <p><a href= { lm.location.google_maps_link } >Google Map</a>&nbsp;&nbsp;<a href= { lm.details.wiki_page_link } >Wiki</a></p>
                          </Media.Body>
                        </Media>

                    // </span>

                    //   <span key={k}>
                    //       <div>
                    //           {/* <ul className="grid"> */}
                    //                 <li>
                    //                   <figure>
                    //                     <img src={ lm.main_image} alt="Profile"/>
                    //                       <figcaption>
                    //                         <h3>{ lm.title }</h3>
                    //                         <span>{ lm.details.short_description }</span>
                    //                         <a href= { lm.location.google_maps_link } >Google Map</a><br></br>
                    //                         <a href= { lm.details.wiki_page_link } >Wiki</a>
                    //                       </figcaption>
                    //                   </figure>
                    //                 </li>
                    //               {/* </ul> */}
                    //   </div>
                    // </span>

                    // <span key={k}>
                    //   <h5>{ lm.title }</h5>
                    //   <img
                    //     alt="Profile"
                    //     className="Profile-img"
                    //     src={ lm.main_image}
                    //   />
                    //   <div>Description</div>
                    //   <h5>{ lm.details.short_description }</h5>
                    //   <h5>{ ['longitude: ', lm.location.longitude, ' latitude: ',lm.location.latitude] }</h5>
                    //   <a href= { lm.location.google_maps_link } >Google Maps Page</a><br></br>
                    //   <a href= { lm.details.wiki_page_link } >Wiki Page</a>
                    // </span>
                  )
                }
                else {
                  return (<div key={k}></div>)
                }
                })
              }
          </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default RenderLandMarks;
