import React from 'react';
import ChannelIndexItem from './channel_index-item';
import Modal from 'react-modal';

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
    if ((prevProps.location.pathname) !== (this.props.location.pathname)){
      this.props.getChannels(this.props.match.params.server_id)
    }
  }

  componentDidMount() {
    this.props.getChannels(this.props.match.params.server_id)
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
            <p id="text-channels-tab-text">TEXT CHANNELS</p>
            <label id="add-channel-button" onClick={this.handleOpenAddModal}>+</label>
            <p id="add-channel-text">Create Channel</p>
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
              <p>CREATE TEXT CHANNEL</p>
            </Modal>
          </div>
          {
            this.props.channels.map((channel, idx) => (
              <ChannelIndexItem channel={channel} key={idx} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default ChannelIndex;