import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  deleteChannel(e) {
    e.preventDefault();
    this.props.deleteChannel(this.props.channel.id)
      .then(() => this.handleCloseModal(e))
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal(e) {
    e.stopPropagation();
    this.setState({ showModal: false })
  }
  
  render() {
    return (
      <div id="channel-box">
        <label id="channel-hash">#</label>
        <p id="channel-name">{this.props.channel.name}</p>
        <label id="delete-channel-x" onClick={this.handleOpenModal}>x</label>
        <p id="delete-channel-text">Delete Channel</p>
        <Modal
          isOpen={this.state.showModal}
          contentLabel="Delete Server Modal"
          onRequestClose={this.handleCloseModal}
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: '0',
              bottom: '0',
              marginLeft: "-245px",
              marginTop: "-175px",
              overflow: "hidden",
              marginTop: "-170px",
              width: "440px",
              height: "197px",
              backgroundColor: "#36393f",
              border: "none",
              color: "white"
            },
            overlay: {
              position: 'fixed',
              backgroundColor: 'rgba(0,0,0,0.7)',
              zIndex: '50'
            }
          }}
        >
          <div>
            <div id="create-channel-header">
              <p id="create-channel-text-main">DELETE CHANNEL</p>
            </div>
            <div id="create-channel-name-box">
              <label id="delete-channel-prompt">Are you sure you want to delete #{this.props.channel.name}? This cannot be undone</label>
            </div>
            <div id="create-channel-footer">
              <label id="delete-channel-cancel" onClick={this.handleCloseModal}>Cancel</label>
              <button id="delete-channel-submit" onClick={(e) => this.deleteChannel(e)}>Delete Channel</button>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}

export default ChannelIndexItem;