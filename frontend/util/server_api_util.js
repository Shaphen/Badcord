

export const fetchServers = () => $.ajax({ //need data for grabbing servers user is part of
  url: '/api/servers'
});

export const fetchServer = serverId => $.ajax({
  url: `/api/servers/${serverId}`
});

export const createServer = server => $.ajax({
  url: '/api/servers',
  method: 'POST',
  data: { server }
});

export const updateServer = server => $.ajax({
  url: `/api/servers/${server.id}`,
  method: 'PATCH',
  data: { server }
});

export const deleteServer = serverId => $.ajax({
  url: `/api/servers/${serverId}`,
  method: 'DELETE'
});
