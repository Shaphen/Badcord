
export const fetchChatMessages = () => {
  return $.ajax ({
    url: '/api/channel_messages',
    method: 'GET'
  });
}

export const createChatMessage = (message) => {
  debugger
  return $.ajax ({
    url: '/api/channel_messages',
    method: 'POST',
    data: message
  });
}

export const updateChatMessage = message => {
  return $.ajax({
    url: `/api/channel_messages/${message.id}`,
    method: 'PATCH',
    data: { message }
  })
}

export const deleteChatMessage = messageId => {
  return $.ajax ({
    url: `/api/channel_messages/${messageId}`,
    method: 'DELETE'
  });
}