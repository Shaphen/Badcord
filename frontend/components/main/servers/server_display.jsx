import React from 'react';
import Modal from 'react-modal';

class ServerDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDeleteModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    // this.props.getServers();
  }

  handleOpenModal() {
    this.setState({ showDeleteModal: true })
  }

  handleCloseModal(e) {
    e.stopPropagation();
    this.setState({ showDeleteModal: false })
  }

  render() {
    return (
      <div id="server-display-box">
        <div id='server-display-name' onClick={this.handleOpenModal}>
          <p id="server-display-text">{this.props.servers[this.props.match.params.server_id] ? this.props.servers[this.props.match.params.server_id].name : null}</p>
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
                background: 'black'
              },
              overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(0,0,0,0.0)',
                zIndex: '50'
              }
            }}
          >
            <div id="delete-server-box" onClick={this.handleCloseModal}>
              <label id="delete-server-button">Delete Server</label>
            </div>
            <div id="add-friends-box" onClick={this.handleCloseModal}>
              <label id="add-friends-button">Add Criminals</label>
            </div>
          </Modal>
        </div>
      </div>
    )
  }
}

export default ServerDisplay;