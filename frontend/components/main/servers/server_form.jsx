import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state)
    this.props.processEntry(server).then(() => this.props.history.push("/main"))
  }

  handleChange(){
    return e => {
      this.setState({ name: e.target.value })
    }
  }

  render() {
    return (
      <div id="server-form-container">
        <div id="new-server-description">
          <p>By creating a server, you will have access to free texxt chat to make all your mischievous plans</p>
        </div>
        <div id="server-name-container">
          <form>
            <label id="server-name-title">SERVER NAME</label>
            <input id="server-name-input" type="text" onChange={this.handleChange()} value={this.state.name}/>
            <div id="create-server-button-container">
              <label id="new-server-close">BACK</label>
              <label id="create-server-button" >Create</label>
            </div>
          </form>
        </div>
        <div id="upload-server-photo">

        </div>
      </div>
    )
  }
}

export default ServerForm;