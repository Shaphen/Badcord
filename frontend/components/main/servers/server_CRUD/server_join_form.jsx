import React from 'react';

class ServerJoinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteCode: "",
      refresh: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state)
    this.props.joinServer(server)
      .then((res) => res ? this.props.history.push(`/channels/${res.server.server.id}/${res.server.server.channel_ids[0]}`): this.props.history.push(`/channels/@me`))
      .then(() => this.props.closeModal(e))
  }

  render(){
    return(
      <div>
        <h1 id="invite-grunts-title">Oh, You Found a Hideout huh?</h1>
        <div id="join-server-box">
          <p id="invite-code-title">What's the Secret Code?</p>
          <form onSubmit={ this.handleSubmit }>
            <input id="join-server-container" autoComplete="off" tabIndex="1" placeholder="Enter code here" onChange={this.handleChange('inviteCode')}></input>
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