import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import {
//   blue300,
//   indigo900,
//   orange200,
//   deepOrange300,
//   pink400,
//   purple500,
// } from 'material-ui/styles/colors';

// Message styles to override the Mui defaults.
const messageStyle = {fontSize: '14px', padding: '10px 5px 5px 40px'};

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});

// Create a new io Socket (and stash it in the state).
let newSocket = new io("http://localhost:8080");

class ChatMessages extends Component {
	constructor(props){
    super(props);

    // this.state = { chat: {
    //   messages: [{message:'hello', user:'a'}, {message:'bye', user:'b'}]
    // }, 
    // currentUser: 'a',
    // userSocket: newSocket};
  }

  render(){
      return (
            <List>
              { this.props.messages.map((message) => {
                  return (
                    <ListItem disabled={true}
                      leftAvatar={
                        <Avatar src="http://localhost:3000/assets/profilepic2.png" size={20} />
                      }
                      primaryText={message.message}
                      style={messageStyle}
                    />)
              })}
          </List>
      )
  }
}

export default ChatMessages;