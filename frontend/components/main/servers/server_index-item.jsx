import React from 'react';

const ServerIndexItem = ({ server, changeServer }) => {
  let words = server.name.split(" ")
  let name = "";
  words.forEach((word) => {
    name += word[0];
  })

  return (
    <div id="server-box">
        <p id="server-button2">{name}</p>
        <p id="server-name-display">{server.name}</p>
    </div>
  )
}


export default ServerIndexItem;