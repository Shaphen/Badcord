import React from 'react';

const ServerIndexItem = ({ server }) => {
  let words = server.name.split(" ")
  let name = "";
  words.forEach((word) => {
    name += word[0];
  })

  return (
    <div>
      <li>
        <p id="server-button2">{name}</p>
        <p id="server-name-display">{server.name}</p>
      </li>
    </div>
  )
}


export default ServerIndexItem;