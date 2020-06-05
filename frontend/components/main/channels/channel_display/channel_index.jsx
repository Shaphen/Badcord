import React from 'react';
import ChannelIndexItem from './channel_index-item';
import { IoIosArrowDropleft } from 'react-icons/io'
import Modal from 'react-modal';
import CreateChannelContainer from '../channel_CRUD/create_channel_container';

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddModal: false
    }
    this.handleOpenAddModal = this.handleOpenAddModal.bind(this)
    this.handleCloseAddModal = this.handleCloseAddModal.bind(this)
  }

  componentDidUpdate(prevProps) {
    if ((prevProps.location.pathname) !== (this.props.location.pathname) && this.props.match.params.server_id !== "@me"){
      this.props.getChannels(this.props.match.params.server_id)
    }
  }

  componentDidMount() {
    if (this.props.match.params.server_id !== "@me") {
      this.props.getChannels(this.props.match.params.server_id)
    }
    this.props.getMessages();
  }

  handleOpenAddModal() {
    this.setState({ showAddModal: true })
  }

  handleCloseAddModal(e) {
    e.stopPropagation();
    this.setState({ showAddModal: false })
  }

  render() {
    return (
      <div id="channel-index-container">
        <div id="text-channels-tab-container">
          <div id="text-channels-tab">
            {
              this.props.server ? 
                <p id="text-channels-tab-text">TEXT CHANNELS</p>
                :
                <p id="text-channels-tab-intro"> CLICK ON A SERVER TO BEGIN <br /> <i id="intro-text-arrow"><IoIosArrowDropleft size={20} /></i></p>
            }
            {
              this.props.server ? <label id="add-channel-button" onClick={this.handleOpenAddModal}>+</label> : null
            }
            <p id="add-channel-text">Create Channel</p>
            <Modal
              id="create-channel-modal"
              isOpen={this.state.showAddModal}
              contentLabel="Delete Server Modal"
              onRequestClose={this.handleCloseAddModal}
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
                  height: "255px",
                  backgroundColor: "#36393f",
                  border: "none",
                  color: "white"
                },
                overlay: {
                  position: 'fixed',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  zIndex: '50'
                }}}
            >
              <CreateChannelContainer closeModal={this.handleCloseAddModal} serverId={this.props.match.params.server_id} />
            </Modal>
          </div>
          {
            this.props.server ? this.props.channels.map((channel, idx) => (
              <ChannelIndexItem deleteChannel={this.props.deleteChannel} serverId={this.props.serverId} channel={channel} key={idx} />
            )) : null
          }
        </div>
      </div>
    )
  }
}

export default ChannelIndex;