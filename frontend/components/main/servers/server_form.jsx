import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      owner_id: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ name: `${this.props.currentUser.username}'s server` })
    this.setState({ owner_id: this.props.currentUser.id })
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state)
    this.props.createServer(server).then(() => this.props.closeModal())
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
          <p>By creating a server, you will have access to free text chat to make all your mischievous plans</p>
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