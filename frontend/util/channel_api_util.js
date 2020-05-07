

export const fetchChannels = (serverId) => $.ajax({
  url: '/api/channels',
  data: { serverId }
});

export const fetchChannel = channelId => $.ajax({
  url: `/api/channels/${channelId}`,
});

export const createChannel = ({name, serverId}) => $.ajax({
  url: '/api/channels',
  method: 'POST',
  data: { channel: {name: name, server_id: serverId}}
});

export const updateChannel = channel => $.ajax({
  url: `/api/channels/${channel.id}`,
  method: 'PATCH',
  data: { channel }
});

// data: {channel: {name: 'asd', serverId: 12}}

export const deleteChannel = channelId => $.ajax({
  url: `/api/channels/${channelId}`,
  method: 'DELETE'
});
