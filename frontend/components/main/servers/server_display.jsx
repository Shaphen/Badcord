import React from 'react';
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom'

class ServerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  deleteServer(e) {
    e.preventDefault();
    this.props.deleteServer(this.props.servers[this.props.match.params.server_id].id)
      .then(() => this.handleCloseModal(e))
      .then(() => this.props.history.push("/channels/@me"))
  }

  handleOpenModal() {
    this.setState({ showDeleteModal: true })
  }

  handleCloseModal(e) {
    e.stopPropagation();
    this.setState({ showDeleteModal: false })
  }

  render() {
    let currentServer = this.props.servers[this.props.match.params.server_id]
    let serverId = currentServer ? currentServer.id : null
    return (
      <div id="server-display-box">
        <div id='server-display-name' onClick={this.handleOpenModal}>
          <p id="server-display-text">{currentServer ? currentServer.name : null}</p>
          <label id="dropdown-server-name">⌄</label>
          <Modal
            isOpen={this.state.showDeleteModal}
            contentLabel="Delete Server Modal"
            onRequestClose={this.handleCloseModal}
            style={{
              content: {
                top: '55px',
                left: '85px',
                right: '0',
                bottom: '0',
                border: 'black',
                padding: '7px',
                width: '210px',
                height: '85px',
                background: '#18191c'
              },
              overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(0,0,0,0.0)',
                zIndex: '50'
              }
            }}
          >
            <div id="add-friends-box" onClick={this.handleCloseModal}>
              <label id="add-friends-button">Invite Criminals</label>
              <label>➕</label>
            </div>
            <div id="delete-server-box" onClick={(e) => this.deleteServer(e)}>
              <label id="delete-server-button">Burn Down Hideout</label>
              <label id="lighten-icon">🔥</label>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default ServerDisplay;