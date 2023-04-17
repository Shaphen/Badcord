

export const signupUser = user => $.ajax({
  url: '/api/users',
  method: 'POST',
  data: { user }
});

export const loginUser = user =>{ 
  let response = $.ajax({
    url: '/api/session',
    method: 'POST',
    data: { user }
  })
  return response;
};

export const logoutUser = () => $.ajax({
  url: '/api/session',
  method: 'DELETE'
});
