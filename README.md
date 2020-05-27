# README
## Table of Contents
* [What is Badcord?](#what-is-badcord)
* [Technologies](#relevant-technologies)
* Features
  * [Live Chat](#live-chat)
  * [Servers](#servers)
* [Future Directions](#future-directions)
## Live Site
[Badcord](https://badcord.herokuapp.com/)

## What is Badcord?
![Splash](https://github.com/Shaphen/Badcord/blob/master/app/assets/images/gifs/badcord_splash.gif)

Badcord is a full-stack single-paged web application that closely follows the design and features of the popular gaming live-chat system, Discord. users can securely log in, create/edit/delete servers and channels, and chat in real time with other logged-in users.

### Relevant Technologies
* Frontend
  * React-Redux - Javascript library with reusable UI components
  * HTML/CSS - style and formatting
* Backend
  * Ruby on Rails - MVC framework
  * PostgreSQL - database
  
## Features
### Live Chat
Users are able to chat in real-time with each other through server channels.

![live-chat](https://github.com/Shaphen/Badcord/blob/master/app/assets/images/gifs/badcord_messages1.gif)

Live chat is the primary focus of this application. It utilizes Rails Action Cable to allow users to subscribe to a channel that organizes new information and broadcasts back to all known subscribers.
```ruby
def subscribed
  stream_for "chat_channel" # @channel
end

def speak(data)
  message = ChannelMessage.create(body: data['message'])
  socket = { message: message.body }
  ChatChannel.broadcast_to('chat_channel', socket)
end
```
The fronend component for the chat system then grabs this organized information and updates state to trigger an instant re-render and display the new message along with the previous ones
```javascript
App.cable.subscriptions.create(
  { channel: "ChatChannel" },
  {
     received: data => {
       this.setState({
         messages: this.state.messages.concat(data.message)
       });
     },
     speak: function(data) {
       return this.perform("speak", data)
     }
   }
);
```

### Servers
Users are able to create new servers and upload an image from their local storage as the server's photo using AWS's S3 Storage System to security save their media

![server-photo](https://github.com/Shaphen/Badcord/blob/master/app/assets/images/readme/server_photo_upload.png)
Users are also able to create/delete new channels within' servers to diversify their conversations!

### Future Directions
* Add members list with online/offline status
* Persist chat history for users
