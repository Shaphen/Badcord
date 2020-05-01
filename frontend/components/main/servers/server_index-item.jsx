import React from 'react';

const ServerIndexItem = ({ server }) => {
  let words = server.name.split(" ")
  let name = "";
  words.forEach((word) => {
    name += word[0];
  })

  return (
    <li id="server-button">{ name }</li>
  )
}


export default ServerIndexItem;