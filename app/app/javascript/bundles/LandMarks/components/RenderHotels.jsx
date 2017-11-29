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
        const results = this.props.data.slice(0,8)
        return (
          <div><h5>Hotels</h5>
          
          <div style={styles.root}>
                  <MuiThemeProvider>

          <GridList style={styles.gridList} cols={2.2} cellHeight={100}	>     
              {/* <Subheader>Hotels/ Restaurants</Subheader> */}
            {results.map((elm, k) => (
                <GridTile
                  key={k}
                  title={<span>{elm.name}</span>}
                  
                  // title={<span>{Parser(elm.photos[0].html_attributions[0])}</span>}
                  subtitle={elm.rating}
                  // actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                  titleStyle={styles.titleStyle}
                  titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                > 
                  <img src={elm.photos[0].getUrl(({'maxWidth': 1000, 'maxHeight': 1000}))} style={{opacity:0.75}}/>

                  </GridTile>
                  
            ))}
          </GridList>
          </MuiThemeProvider>

              </div>
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

export default RenderRestaurants;