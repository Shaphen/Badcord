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
                  width: '490px',
                  height: '350px',
                  background: 'rgb(255, 255, 255)'
                },
                overlay: {
                  position: 'fixed',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  zIndex: '50'
                }}}
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