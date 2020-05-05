import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      owner_id: 0,
      // photo: null
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
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

  handleFile(e) {
    this.setState({ photo: e.currentTarget.files[0] })
  }

  render() {
    return (
      <div id="server-form-container">
        <div id="new-server-description">
          <p>By creating a server, you will have access to free text chat to make all your mischievous plans</p>
        </div>
        <form onSubmit={ this.handleSubmit }>
          <div id="server-name-container">
              <label id="server-name-title">SERVER NAME</label>
              <input id="server-name-input" type="text" onChange={this.handleChange('name')} value={this.state.name}/>
              <div id="create-server-button-container">
                {/* <label id="new-server-close">BACK</label> */}
              </div>
          </div>
          <div id="upload-server-photo">
            {/* <input type="file" onChange={this.handleFile} /> */}
          </div>
          <button id="create-server-button" value={this.props.formType}>Create</button>
        </form>
      </div>
    )
  }
}

export default ServerForm;