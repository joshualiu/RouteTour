import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChatBar extends Component {
	constructor(props){
    super(props);
  }

  render(){
    return(
      <form className="chatbar-form" action="">
        <input id="m2" autoComplete="off" onKeyUp={this.onMessageButtonSend.bind(this)}/>
        <button className="chatbar-button" onClick={this.onMessageSend.bind(this)}>Send</button>
      </form>
    )
  }

  onMessageSend(event){
    if (event.type === "click"){
        // const fieldName = event.target.name;
        // const fieldValue = event.target.value;
        this.props.onClick(event);

        document.querySelector('#m').value = 'ee';
    } else {console.log("onclick-chatbar")}
  }

  onMessageButtonSend(event){
    if (event.keyCode === 13){
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        this.props.onKeyUp(fieldName, fieldValue);

        document.querySelector('#m').value = 'v';
    } //else {console.log("inputhtml", event.keyCode)}
  }
}

export default ChatBar;