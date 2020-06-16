
export const fetchChatMessages = () => {
  return $.ajax ({
    url: '/api/channel_messages',
    method: 'GET'
  });
}

export const deleteChatMessage = messageId => {
  return $.ajax ({
    url: `/api/channel_messages/${messageId}`,
    method: 'DELETE'
  });
}