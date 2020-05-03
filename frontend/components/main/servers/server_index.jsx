import React from 'react';
import ServerIndexItem from './server_index-item';
import ServerFormContainer from './server_form_container'
import Modal from 'react-modal'


class ServerIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.props.getServers();
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }
  
  render() {
    return (
      <div className="main-page">
        <div id="server-index">
          <div id="server-box">
            <img id="server-button" src={window.logo_head_white} />
            <p id="home-text-display">Home</p>
          </div>
          <ul>
            {
              this.props.servers.map((server) => (
                <ServerIndexItem server={server} key={server.id} />
              ))
            }
          </ul>
          <div id="server-box">
            <label id="new-server" onClick={this.handleOpenModal}>+</label>
            <p id="add-server-text">Add a Server</p>
            <Modal
              isOpen={this.state.showModal}
              contentLabel="Test Modal"
              onRequestClose={this.handleCloseModal}
              style={{
                content: {
                  top: '25%',
                  left: '30%',
                  right: '0',
                  bottom: '0',
                  width: '490px',
                  height: '320px',
                  background: 'rgb(255, 255, 255)'
                },
                overlay: {
                  position: 'fixed',
                  backgroundColor: 'rgba(0,0,0,0.7)'
                }
              }}
            >
              {/* <label onClick={this.handleCloseModal} id="new-server-close">Close</label> */}
              <h1 id="new-server-title">Greed is good</h1>
              <ServerFormContainer />
            </Modal>
          </div>
        </div>
        <div id="user-logout-container">
          <p>{this.props.currentUser.username}</p>
          <button className="logout-button" onClick={() => this.props.logout()}>LOGOUT</button>
        </div>
      </div>
    )
  }
}

export default ServerIndex;