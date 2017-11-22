import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Map extends Component {

  render() {
    return(
      <div>from map
        <div>
        <MuiThemeProvider>
    {/* <AppBar title="My AppBar" /> */}
    <FlatButton label="Default" />

  </MuiThemeProvider>


        </div>

      </div>
    )
  }
}
export default Map;

