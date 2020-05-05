import React from 'react';
import { Link, Redirect } from 'react-router-dom'

const ServerIndexItem = ({ server, changeServer }) => {
  let name = "";
  if (server !== undefined) {
    let words = server.name.split(" ")
    words.forEach((word) => {
      name += word[0];
    })
  }

  return (
    <div id="server-box">
      <Link to={`/channels/@me/${server.id}`} className="server-link">
        <p id="server-button2">{name}</p>
      </Link>
      <p id="server-name-display">{server.name}</p>
    </div>
  )
}


export default ServerIndexItem;