import React from 'react';
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom'
import ServerUpdateContainer from './server_update_container';

class ServerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false,
      showEditServer: false
    };
    this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
    this.handleCloseDeleteModal = this.handleCloseDeleteModal.bind(this);
  }

  deleteServer(e) {
    e.preventDefault();
    this.props.deleteServer(this.props.servers[this.props.match.params.server_id].id)
      .then(() => this.handleCloseDeleteModal(e))
      .then(() => this.props.history.push("/channels/@me"))
  }

  handleOpenDeleteModal() {
    this.setState({ showDeleteModal: true })
  }

  handleCloseDeleteModal(e) {
    e.stopPropagation();
    this.setState({ showDeleteModal: false })
  }

  // handleCloseUpdateModal(e) {
  //   e.stopPropagation();
  //   this.setState({ showDeleteModal: false })
  // }

  render() {
    let currentServer = this.props.servers[this.props.match.params.server_id]
    let serverId = currentServer ? currentServer.id : null
    return (
      <div id="server-display-box">
        <div id='server-display-name' onClick={this.handleOpenDeleteModal}>
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
            <div id="edit-server-box">
              <label id="edit-server-button">Modify Hideout</label>
              <label>✏️</label>
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