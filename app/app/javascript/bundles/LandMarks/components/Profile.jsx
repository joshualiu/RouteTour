// import React, { Component } from 'react';

// class Profile extends Component {

//   render() {
//     let cityname = this.props.city !== null ? this.props.city : 'Unknow city'
//     return (
//       <div>
//         <div>Current city:</div>
//         <h3>{ cityname }</h3>
//           <div> Landmarks</div>
//             <div>
//               {
//                 this.props.landmark.map((lm, k) => {
//                   return (
//                     <span key={k}>
//                       <h5>{ lm.title }</h5>
//                       <img
//                         alt="Profile"
//                         className="Profile-img"
//                         src={ lm.main_image}
//                       />
//                       <div>Description</div>
//                       <h5>{ lm.details.short_description }</h5>
//                       <h5>{ ['longitude: ', lm.location.longitude, ' latitude: ',lm.location.latitude] }</h5>
//                       <a href= { lm.location.google_maps_link } >Google Maps Page</a><br></br>
//                       <a href= { lm.details.wiki_page_link } >Wiki Page</a>


//                     </span>
//                   )
//                 })
//               }
//             </div>


//       </div>
//     )
//   }



// }

// export default Profile;