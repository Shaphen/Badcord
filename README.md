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

Badcord is a fullstack single-page web application that closely follows the design and features of the popular gaming live-chat system, Discord. Users can securely log in, create and edit servers and channels, and chat in real time with other logged-in users.

### Relevant Technologies
* Frontend
  * React-Redux - Javascript library with reusable UI components
  * HTML/CSS - style and formatting
* Backend
  * Ruby on Rails - MVC framework
  * PostgreSQL - database
  
## Features
### Live Chat
Users are able to chat in real-time with each other using channels.

![live-chat](https://github.com/Shaphen/Badcord/blob/master/app/assets/images/gifs/badcord_messages1.gif)

Live chat is the primary feature of this application. It utilizes Rails Action Cable, subscribing users to a chat channel that constantly scans for and organizes new information to broadcast back to all known members of that channel.
```ruby
def subscribed
  stream_for "chat_channel"
end

def speak(data)
  message = ChannelMessage.create(body: data['message'], author_id: data["authorId"], channel_id: data["channelId"])
  socket = { body: message.body, author_id: message.author_id, channel_id: message.channel_id }
  ChatChannel.broadcast_to('chat_channel', socket)
end
```
The frontend component for the chat system then grabs this organized information and updates state to trigger an instant re-render and display the new message.
```javascript
App.cable.subscriptions.create(
  { channel: "ChatChannel" },
  {
     received: message => {
       this.setState({
         messages: this.state.messages.concat(message)
       });
     },
     speak: function(message) {
       return this.perform("speak", message)
     }
   }
);
```

### Servers
Users are able to create, edit, and delete servers as well as upload an image from their local storage as a server's cover photo using AWS's S3 Storage System, securely saving their media.

![server-photo](https://github.com/Shaphen/Badcord/blob/master/app/assets/images/gifs/badcord_AWS.gif)
Users are also able to create, edit, and delete channels within servers to diversify their conversation funnels!

### Future Directions
- [x] Add members list
  - [ ] Display online/offline status
- [x] Persist chat history for users
- [ ] Add direct messages between two users
- [ ] Enable custom profile photos
