import React, { Component } from 'react';
import List from './List';
import Parser from 'html-react-parser';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Subheader from 'material-ui/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

class RenderRestaurants extends Component {

    
    render(){
      if(this.props.data){
        const results = this.props.data.slice(0,10)
        return (
          <div style={styles.root}>
                  <MuiThemeProvider>

          <GridList style={styles.gridList} cols={2.2} cellHeight={250}	>     
              <Subheader>Hotels/ Restaurants</Subheader>

            {results.map((elm, k) => (
                <GridTile
                  key={k}
                  title={<span>{Parser(elm.photos[0].html_attributions[0])}</span>}
                  subtitle={elm.rating}
                  actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                > 
                  <img src={elm.photos[0].getUrl(({'maxWidth': 1000, 'maxHeight': 1000}))} />


                  </GridTile>
                  
            ))}
          </GridList>
          </MuiThemeProvider>

          </div>


          //   {results.map((elm, k) => {
          //     return (
          //       <span key={k}>
          //         <List 
          //           img={elm.photos[0].getUrl(({'maxWidth': 100, 'maxHeight': 100}))}
          //           name={elm.name}
          //           rating={elm.rating}
          //           link={Parser(elm.photos[0].html_attributions[0])}
          //           />
          //         </span>
          //     )
          //   })}
          // </div>
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

// import React from 'react';
// import {GridList, GridTile} from 'material-ui/GridList';
// import IconButton from 'material-ui/IconButton';
// import StarBorder from 'material-ui/svg-icons/toggle/star-border';

// const styles = {
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   gridList: {
//     display: 'flex',
//     flexWrap: 'nowrap',
//     overflowX: 'auto',
//   },
//   titleStyle: {
//     color: 'rgb(0, 188, 212)',
//   },
// };

// const tilesData = [
//   {
//     img: 'images/grid-list/00-52-29-429_640.jpg',
//     title: 'Breakfast',
//     author: 'jill111',
//   },
//   {
//     img: 'images/grid-list/burger-827309_640.jpg',
//     title: 'Tasty burger',
//     author: 'pashminu',
//   },
//   {
//     img: 'images/grid-list/camera-813814_640.jpg',
//     title: 'Camera',
//     author: 'Danson67',
//   },
//   {
//     img: 'images/grid-list/morning-819362_640.jpg',
//     title: 'Morning',
//     author: 'fancycrave1',
//   },
//   {
//     img: 'images/grid-list/hats-829509_640.jpg',
//     title: 'Hats',
//     author: 'Hans',
//   },
//   {
//     img: 'images/grid-list/honey-823614_640.jpg',
//     title: 'Honey',
//     author: 'fancycravel',
//   },
//   {
//     img: 'images/grid-list/vegetables-790022_640.jpg',
//     title: 'Vegetables',
//     author: 'jill111',
//   },
//   {
//     img: 'images/grid-list/water-plant-821293_640.jpg',
//     title: 'Water plant',
//     author: 'BkrmadtyaKarki',
//   },
// ];

// /**
//  * This example demonstrates the horizontal scrollable single-line grid list of images.
//  */
// const GridListExampleSingleLine = () => (
//   <div style={styles.root}>
//     <GridList style={styles.gridList} cols={2.2}>
//       {tilesData.map((tile) => (
//         <GridTile
//           key={tile.img}
//           title={tile.title}
//           actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
//           titleStyle={styles.titleStyle}
//           titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
//         >
//           <img src={tile.img} />
//         </GridTile>
//       ))}
//     </GridList>
//   </div>
// );

// export default GridListExampleSingleLine;