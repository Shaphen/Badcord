import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import ServerIndexItem from './server_index-item';
import ServerCreateContainer from './server_create_container'
import Modal from 'react-modal';


class ServerIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCreateModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.props.getServers();
  }

  handleOpenModal() {
    this.setState({ showCreateModal: true })
  }

  handleCloseModal() {
    // e.stopPropagation();
    this.setState({ showCreateModal: false })
  }
  
  render() {
    return (
      <div id="server-index">
        <div id="server-box">
          <Link to="/channels/@me" className="home-link">
            <img id="server-button" src={window.logo_head_white} />
          </Link>
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
          <p id="add-server-text">New Hideout</p>
          <Modal
            isOpen={this.state.showCreateModal}
            contentLabel="Create Server Modal"
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
                width: '490px',
                height: '350px',
                background: 'rgb(255, 255, 255)'
              },
              overlay: {
                position: 'fixed',
                backgroundColor: 'rgba(0,0,0,0.7)',
                zIndex: '50'
              }
            }}
          >
            {/* <label onClick={this.handleCloseModal} id="new-server-close">Close</label> */}
            <h1 id="new-server-title">Greed is good</h1>
            <ServerCreateContainer closeModal={this.handleCloseModal} />
            <label id="new-server-close" onClick={this.handleCloseModal}>BACK</label>
          </Modal>
        </div>
          {/* {
            setTimeout(() => {
              this.props.getServers()
            }, 3000)
          } */}
      </div>
    )
  }
}

export default ServerIndex;