import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "SomeName",
      owner_id: currentUser
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state)
    this.props.processEntry(server).then(() => this.props.history.push("/main"))
  }

  handleChange(type){
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  render() {
    return (
      <div id="server-form-container">
        <div id="new-server-description">
          <p>By creating a server, you will have access to free texxt chat to make all your mischievous plans</p>
        </div>
        <div id="server-name-container">
          <form onSubmit={ this.handleSubmit }>
            <label id="server-name-title">SERVER NAME</label>
            <input id="server-name-input" type="text" onChange={this.handleChange('name')} value={this.state.name}/>
            <div id="create-server-button-container">
              {/* <label id="new-server-close">BACK</label> */}
              <button id="create-server-button" value={this.props.formType}>Create</button>
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