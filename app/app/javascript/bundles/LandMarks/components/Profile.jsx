import React, { Component } from 'react';

class Profile extends Component {

  render() {
    console.log(this.props)
    let cityname = this.props.city !== null ? this.props.city : 'Unknow city'
    return (
      <div>
        <div>Current city:</div>
        <h2>{ cityname }</h2>
          <div> Landmarks</div>
            <div>
              {
                this.props.landmark.map((lm, k) => {
                  return (
                    <span key={k}>
                      <h2>{ lm.title }</h2>
                      <img
                        alt="Profile"
                        className="Profile-img"
                        src={ lm.main_image}
                      />
                      <div>Description</div>
                      <h2>{ lm.details.short_description }</h2>
                      <h2>{ ['longitude: ', lm.location.longitude, ' latitude: ',lm.location.latitude] }</h2>
                      <a href= { lm.location.google_maps_link } >Google Maps Page</a><br></br>
                      <a href= { lm.details.wiki_page_link } >Wiki Page</a>


                    </span>
                  )
                })
              }
            </div>


      </div>
    )
  }



}

export default Profile;