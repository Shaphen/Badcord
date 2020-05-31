
export const fetchChatMessages = () => {
  return $.ajax ({
    url: '/api/channel_messages',
    method: 'GET'
  });
}
