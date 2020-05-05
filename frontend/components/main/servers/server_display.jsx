import React from 'react';
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom'
import ServerUpdateContainer from './server_update_container';
import ServerCreateContainer from './server_create_container';

class ServerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false,
      showEditModal: false
    };
    this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
    this.handleCloseDeleteModal = this.handleCloseDeleteModal.bind(this);
    this.handleOpenUpdateModal = this.handleOpenUpdateModal.bind(this);
    this.handleCloseUpdateModal = this.handleCloseUpdateModal.bind(this);
  }

  deleteServer(e) {
    e.preventDefault();
    this.props.deleteServer(this.props.servers[this.props.match.params.server_id].id)
      .then(() => this.handleCloseDeleteModal(e))
      .then(() => this.props.history.push("/channels/@me"))
  }

  updateServer(e) {

  }

  handleOpenDeleteModal() {
    this.setState({ showDeleteModal: true })
  }

  handleCloseDeleteModal(e) {
    e.stopPropagation();
    this.setState({ showDeleteModal: false })
  }

  handleOpenUpdateModal() {
    this.setState({ showEditModal: true })
  }

  handleCloseUpdateModal(e) {
    e.stopPropagation();
    this.setState({ showEditModal: false })
  }

  render() {
    let currentServer = this.props.servers[this.props.match.params.server_id]
    return (
      <div id="server-display-box">
        <div id='server-display-name' onClick={this.handleOpenDeleteModal}>
          <p id="server-display-text">{currentServer ? currentServer.name : null}</p>
          <label id="dropdown-server-name">⌄</label>
          <Modal
            isOpen={this.state.showDeleteModal}
            contentLabel="Delete Server Modal"
            onRequestClose={this.handleCloseDeleteModal}
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
            <div id="edit-server-box" onClick={this.handleOpenUpdateModal}>
              <label id="edit-server-button">Modify Hideout</label>
              <label>✏️</label>
            </div>
            <Modal
              isOpen={this.state.showEditModal}
              contentLabel="Update Server Modal"
              onRequestClose={this.handleCloseUpdateModal}
              style={{
                content: {
                  top: '50%',
                  left: '50%',
                  right: '0',
                  bottom: '0',
                  marginLeft: "-245px",
                  marginTop: "-175px",
                  width: '490px',
                  height: '295px',
                  background: 'rgb(255, 255, 255)'
                },
                overlay: {
                  position: 'fixed',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  zIndex: '50'
                }
              }}
            >
              <h1 id="new-server-title">Picky villans come out ahead</h1>
              <ServerUpdateContainer server={this.props.servers[this.props.match.params.server_id]} closeModal={this.handleCloseUpdateModal} />
              <label id="new-server-close2" onClick={this.handleCloseUpdateModal}>BACK</label>
            </Modal>
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