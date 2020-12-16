

export const selectMembersByServer = (state, serverId) => {
  const server = state.entities.servers[serverId];
  if (!server) return [];
  return server.member_ids.map(id => state.entities.users[id]);
}

// export const selectMessagesByChannel = state => {
//   state.messages.filter(message => {
//     return message.channel_id === currentChannel.id
//   });
// }
