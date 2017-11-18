import PropTypes from 'prop-types';
import React from 'react';

import Application from'./components/Application.jsx';

export default class HelloWorld extends React.Component {
  static propTypes = {
    name: PropTypes.string, // this is passed from the Rails view
    
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { 
      name: this.props.name, 
      
    };

  }

  updateName = (name) => {
    this.setState({ name });
  };
 
  
  

  render() {
    return (
      <div>
        <h3>
          Hello,'m a react component in the view
        </h3>
        <hr />
       
       
      </div>
    );
  }
}
