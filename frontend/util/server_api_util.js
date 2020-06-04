

export const fetchServers = () => $.ajax({
  url: '/api/servers'
});

export const fetchServer = serverId => $.ajax({
  url: `/api/servers/${serverId}`
});

export const createServer = server => {
  return $.ajax({
    url: '/api/servers',
    method: 'POST',
    data: server,
    contentType: false,
    processData: false
  });
}

export const updateServer = server => $.ajax({
  url: `/api/servers/${server.id}`,
  method: 'PATCH',
  data: { server }
});

export const joinServers = inviteCode => {
  return $.ajax({
    method: 'POST',
    url: 'api/servers/join',
    data: inviteCode
  });
}

export const leaveServers = serverId => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/servers',
    data: { serverId }
  });
}

export const deleteServer = serverId => (
  $.ajax({
    url: `/api/servers/${serverId}`,
    method: 'DELETE'
  })
);
