import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Message extends Component{
  render(){
    const {message} = this.props;
    return(
      <div className="message">
        <strong></strong> {message.timeStamp} - {message.text}
      </div>
    )
  }
}

export default Message