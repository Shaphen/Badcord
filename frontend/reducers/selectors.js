

export const selectMembersByServer = (state, serverId) => {
  const server = state.entities.servers[serverId];
  if (!server) return [];
  return server.member_ids.map(id => state.entities.users[id]);
}

export const generateRandUsername = () => {
  const startNames = [
    "badboi",
    "CrmnlMnd",
    "bigbaddy",
    "d3v!l",
    "robber_lyfe",
    "Karjacker",
    "PainMachine",
    "meanbutsexi"
  ]
  let newUsername = startNames[Math.floor(Math.random() * 8)];
  let endName = Math.random().toString(10).slice(9);

  const username = newUsername + "-" + endName;
  return username;
}

export const generateRandPassword = () => {
  const password = Math.random().toString(18).slice(2);
  return password;
}

export const generateRandEmail = () => {
  const email = Math.random().toString(18).slice(5) + "@email.com";
  return email;
}

// export const selectMessagesByChannel = state => {
//   state.messages.filter(message => {
//     return message.channel_id === currentChannel.id
//   });
// }
