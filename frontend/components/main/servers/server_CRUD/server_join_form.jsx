import React from 'react';

class ServerJoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      invite_code: ""
    };
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  render(){
    return(
      <div>
        <h1 id="invite-grunts-title">Oh, You Found a Hideout huh?</h1>
        <div id="join-server-box">
          <p id="invite-code-title">What's the Secret Code?</p>
          <form onSubmit={ this.handleSubmit }>
            <input id="join-server-container" tabIndex="1" placeholder="Enter code here"></input>
            <div id="join-server-footer">
              <button id="join-server-button">Join</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ServerJoinForm;