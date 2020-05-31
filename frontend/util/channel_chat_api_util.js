
export const fetchChatMessages = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/channel_messages'
  });
}
