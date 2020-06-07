import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// toast.configure();
class EditChannelForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.channelId,
      name: this.props.channelName
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return e => {
      this.setState({ [type]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = Object.assign({}, this.state)
    this.props.updateChannel(channel)
    .then(() => this.props.closeModal())
  }

  render() {
    return (
      <div>
        <div id="create-channel-header">
          <p id="update-channel-text-main">EDIT CHANNEL</p>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div id="update-channel-name-box">
              <label id="create-channel-text">CHANNEL NAME</label>
              <input id="create-channel-input" type="text" onChange={this.handleChange('name')} value={this.state.name} />
            </div>
            <div id="update-channel-footer">
              <label id="create-channel-cancel" onClick={this.props.closeModal}>Cancel</label>
              <button id="create-channel-submit">Update Name</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditChannelForm;