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

          <ul className="grid">
              <li>
                <figure>
                  <img src="http://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Royal_Ontario_Museum-Michael_Lee-Chin_Crystal.jpg/400px-Royal_Ontario_Museum-Michael_Lee-Chin_Crystal.jpg" alt="img01"/>
                  <figcaption>
                    <h3>Camera</h3>
                    <span>Jacob Cummings</span>
                    <a href="https://www.blog.google/topics/trends/lets-talk-turkey-thanksgiving-food-trends/">Take a look</a>
                  </figcaption>
                </figure>
              </li>
            </ul>

        </div>

      </div>
    )
  }
}
export default Map;

