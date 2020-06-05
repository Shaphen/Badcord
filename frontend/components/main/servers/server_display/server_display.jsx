import React from 'react';
import Modal from 'react-modal';
import { FaRegHandshake } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';
import { GiBurningDot, GiExitDoor } from 'react-icons/gi';
import ServerUpdateContainer from '../server_CRUD/server_update_container';
import ChannelIndexContainer from '../../channels/channel_display/channel_index_container';

class ServerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false,
      showEditModal: false,
      showInviteModal: false
    };
    this.handleOpenDeleteModal = this.handleOpenDeleteModal.bind(this);
    this.handleCloseDeleteModal = this.handleCloseDeleteModal.bind(this);
    this.toggleUpdateModal = this.toggleUpdateModal.bind(this);
    this.toggleInviteModal = this.toggleInviteModal.bind(this);
  }

  deleteServer(e) {
    e.preventDefault();
    this.props.deleteServer(this.props.servers[this.props.match.params.server_id].id)
      .then(() => this.handleCloseDeleteModal(e))
      .then(() => this.props.history.push('/channels/@me'))
  }

  leaveServer(e) {
    e.preventDefault();
    this.props.leaveServer(this.props.serverId)
      .then(() => this.handleCloseDeleteModal(e))
      .then(() => this.props.history.push('/channels/@me'))
  }

  handleOpenDeleteModal() {
    this.setState({ showDeleteModal: true });
  }

  handleCloseDeleteModal(e) {
    e.stopPropagation();
    this.setState({ showDeleteModal: false });
  }

  toggleUpdateModal() {
    const prevState = this.state.showEditModal
    this.setState({ showEditModal: !prevState });
  }

  toggleInviteModal(e) {
    const prevState = this.state.showInviteModal
    this.setState({ showInviteModal: !prevState })
  }

  render() {
    let currentServer = this.props.servers[this.props.match.params.server_id]
    const modalPresence = currentServer ? this.handleOpenDeleteModal : null
    const stylePresence = currentServer ? "server-display-name" : "server-display-name2"
    return (
      <div id="server-display-box">
        <div id={ stylePresence } onClick={ modalPresence }>
          <p id="server-display-text">{currentServer ? currentServer.name : "Home" }</p>
          {currentServer ? <label id="dropdown-server-name">⌄</label> : null }
          <Modal
            id="server-drop-modal"
            isOpen={this.state.showDeleteModal}
            contentLabel="Delete Server Modal"
            onRequestClose={this.handleCloseDeleteModal}
            style={{
              content: {
                position: "absolute",
                top: '55px',
                left: '85px',
                right: '0',
                bottom: '0',
                border: 'black',
                padding: '7px',
                width: '210px',
                height: '134px',
                background: '#18191c'
              },
              overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(0,0,0,0.0)',
                zIndex: '50'
              }
            }}
          >
            <div id="invite-grunts-box" onClick={this.toggleInviteModal}>
              <label id="invite-grunts-button">Invite Partners</label>
              <label><FaRegHandshake size={22} color="white" opacity={0.9} /></label>
            </div>
            <Modal
              id="invite-modal"
              isOpen={this.state.showInviteModal}
              contentLabel="Invite Grunts Modal"
              onRequestClose={this.toggleInviteModal}
              style={{
                content: {
                  top: '50%',
                  left: '50%',
                  right: '0',
                  bottom: '0',
                  marginLeft: "-245px",
                  marginTop: "-175px",
                  width: '400px',
                  height: '210px',
                  background: 'rgb(54, 57, 63)',
                  border: '1px solid rgb(54, 57, 63)'
                },
                overlay: {
                  position: 'fixed',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  zIndex: '50'
                }
              }}
            >
              <h1 id="invite-grunts-title">Partners in Crime</h1>
              <div id="invite-code-box">
                <p id="invite-code-title">Secret Code</p>
                <div id="invite-code-container" tabIndex="1">
                  <p id="invite-code">{ currentServer?.invite_code }</p>
                </div>
              </div>
              <label id="invite-grunts-close" onClick={this.toggleInviteModal}>DONE</label>
            </Modal>
            <div id="edit-server-box" onClick={this.toggleUpdateModal}>
              <label id="edit-server-button">Modify Hideout</label>
              <label>✏<FiEdit2 size={21} color="white" opacity={0.9} /></label>
            </div>
            <Modal
              id="edit-modal"
              isOpen={this.state.showEditModal}
              contentLabel="Update Server Modal"
              onRequestClose={this.toggleUpdateModal}
              style={{
                content: {
                  top: '50%',
                  left: '50%',
                  right: '0',
                  bottom: '0',
                  marginLeft: "-245px",
                  marginTop: "-175px",
                  width: '490px',
                  height: '275px',
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
              <ServerUpdateContainer 
                server={currentServer}
                closeModal={this.toggleUpdateModal}
                closeDropdown = {this.handleCloseDeleteModal}
              />
              <label id="new-server-close2" onClick={this.toggleUpdateModal}>BACK</label>
            </Modal>
            {
              this.props.currentUser?.id === currentServer?.owner_id ? 
                <div id="delete-server-box" onClick={(e) => this.deleteServer(e)}>
                  <label id="delete-server-button">Destroy Hideout</label>
                  <label id="lighten-icon"><GiBurningDot size={23} color="white" opacity={0.9} /></label>
                </div> :
                <div id="delete-server-box" onClick={(e) => this.leaveServer(e)}>
                  <label id="delete-server-button">Leave This Hideout</label>
                  <label id="lighten-icon"><GiExitDoor size={23} color="white" opacity={0.9} /></label>
                </div>
            }
          </Modal>
        </div>
        <ChannelIndexContainer server={currentServer} />
      </div>
    )
  }
}

export default ServerDisplay;