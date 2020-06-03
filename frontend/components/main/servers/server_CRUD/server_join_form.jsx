import React from 'react';

class ServerJoinForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        <h1 id="invite-grunts-title">Partners in Crime</h1>
        <div id="invite-code-box">
          <p id="invite-code-title">Secret Code</p>
          <div id="invite-code-container" tabIndex="1">
            <p id="invite-code">Enter code here</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerJoinForm;