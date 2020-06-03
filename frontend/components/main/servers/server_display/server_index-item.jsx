import React from 'react';
import { Link } from 'react-router-dom'

const ServerIndexItem = (props) => {
  let name = "";
  if (props.server.name !== undefined) {
    let words = props.server.name.split(" ")
    words.forEach((word) => {
      name += word[0];
    })
  }

  return (
    <div id="server-box">
      <Link to={`/channels/${props.server.id}/${props.server.channel_ids[0]}`} className="server-link">
        <p id="server-button2">{props.server.photoUrl ? <img id="server-img" src={props.server.photoUrl} alt=""/> : name }</p>
      </Link>
      <p id="server-name-display">{props.server.name}</p>
    </div>
  )
}


export default ServerIndexItem;