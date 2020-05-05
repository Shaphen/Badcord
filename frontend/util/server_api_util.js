

export const fetchServers = () => $.ajax({
  url: '/api/servers'
});

export const fetchServer = serverId => $.ajax({
  url: `/api/servers/${serverId}`
});

export const createServer = server => {
  // debugger
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
  data: server,
  contentType: false,
  processData: false
});

export const deleteServer = serverId => (
  $.ajax({
    url: `/api/servers/${serverId}`,
    method: 'DELETE'
  })
);
