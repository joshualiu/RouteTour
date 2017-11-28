import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import ChatMessages from './ChatMessages.jsx';
import ChatMessage from './ChatMessage.jsx';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Message styles to override the Mui defaults.
const messageStyle = {fontSize: '14px', padding: '10px 5px 5px 40px'};

const muiTheme = getMuiTheme({
  palette: { textColor: cyan500,  }
});

// Create a new io Socket (and stash it in the state).
let newSocket = new io("http://localhost:8080");

class Chat extends Component {
	constructor(props){
    super(props);

    this.state = { chat: {
      messages: [{id: '1', message:'hello2', user:'a2'}, {id: '2', message:'bye2', user:'b2'}]
    }, 
    currentUser: 'a',
    userSocket: newSocket};
  }

  render(){
      return (
        
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
            <ChatMessages messages={this.state.chat.messages}/>
            <ChatBar userSocket={this.state.userSocket} currentUser={this.state.currentUser} onKeyUp={this.onKeyUp.bind(this)} onClick={this.onClick.bind(this)}/>
            </div>
        </MuiThemeProvider>
      )
  }

  	// On hitting enter, we want to send a new message to the server.
	onKeyUp(field, value){
		//const newMessage = {type: 'message', uuid: uuidv4(), username: this.state.currentUser, [field]: value};
        //sendText(this.state.userSocket, newMessage);
        console.log("onKeyUp", field, value)
    }
    
    // On clicking send, we want to send a new message to the server.
    onClick(e){
        console.log("onclick")
    }
}

export default Chat;