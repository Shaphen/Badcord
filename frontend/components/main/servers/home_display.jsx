import React from 'react';

class HomeDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="server-display-box">
        <div id='server-display-name'>
          <p id="server-display-text">Home</p>
        </div>
      </div>
    )
  }
}

export default HomeDisplay;