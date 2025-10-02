# README
## Table of Contents
* [What is Badcord?](#what-is-badcord)
* [Technologies](#relevant-technologies)
* [Local Development Setup](#local-development-setup)
* Features
  * [Live Chat](#live-chat)
  * [Servers](#servers)
* [Database Schema](#database-schema)
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

## Local Development Setup

### Prerequisites
Before running this project locally, ensure you have the following installed:
- **Ruby 2.7.2** (recommended to use RVM: `rvm install 2.7.2`)
- **Node.js 10.13.0+** (though newer versions should work)
- **PostgreSQL** (install via Homebrew: `brew install postgresql`)
- **Bundler** gem

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shaphen/Badcord.git
   cd Badcord
   ```

2. **Install Ruby dependencies**
   ```bash
   rvm use 2.7.2
   bundle install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Set up PostgreSQL**
   ```bash
   # Start PostgreSQL service
   brew services start postgresql
   
   # Create postgres user (if not exists)
   createuser -s postgres
   
   # Set password for postgres user
   psql -U postgres -c "ALTER USER postgres PASSWORD 'password';"
   ```

5. **Set up the database**
   ```bash
   bin/rails db:setup
   ```

6. **Build the frontend**
   ```bash
   npm run webpack
   ```

7. **Start the Rails server**
   ```bash
   bin/rails server
   ```

### Running the Application

Once everything is set up, you can access the application at:
- **Local URL**: `http://localhost:3000`

### Development Workflow

- **Frontend changes**: Webpack automatically rebuilds when you modify React components
- **Backend changes**: Rails automatically reloads when you modify Ruby files
- **Database changes**: Run `bin/rails db:migrate` after creating new migrations

### Stopping the Servers

- Press `Ctrl+C` in the terminal where Rails server is running
- Press `Ctrl+C` in the terminal where webpack is running

## Features
### Live Chat
Users are able to chat in real-time with each other using channels.

![live-chat](https://github.com/Shaphen/Badcord/blob/master/app/assets/images/gifs/preview.gif)

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

## Database Schema
`users`
| column name       | data type     | details                   |
| ----------------- |:-------------:| --------------------------|
| `id`              | integer       | not null, primary key     |
| `username`        | string        | not null, indexed, unique |
| `email`           | string        | not null, indexed, unique |
| `password digest` | string        | not null                  |
| `session token`   | string        | not null, indexed, unique |
| `created at`      | datetime      | not null                  |
| `updated at`      | datetime      | not null                  |

* index on `username, unique: true`
* index on `email, unique: true`
* index on `session_token, unique: true`
__________________________________________________________________

`servers`
| column name       | data type     | details                         |
| ----------------- |:-------------:| --------------------------------|
| `id`              | integer       | not null, primary key           |
| `name`            | string        | not null, indexed               |
| `owner_id`        | integer       | not null, indexed,  foreign key |
| `created at`      | datetime      | not null                        |
| `updated at`      | datetime      | not null                        |

* `owner_id` references `users`
* index on `owner_id`
__________________________________________________________________

`server_members`
| column name       | data type     | details                         |
| ----------------- |:-------------:| --------------------------------|
| `id`              | integer       | not null, primary key           |
| `member_id`       | string        | not null, indexed               |
| `server_id`       | integer       | not null, indexed,  foreign key |
| `created at`      | datetime      | not null                        |
| `updated at`      | datetime      | not null                        |

* `member_id` references `users`
* `server_id` references `servers`
* index on `member_id` and `server_id`
__________________________________________________________________

`channels`
| column name       | data type     | details                        |
| ----------------- |:-------------:| -------------------------------|
| `id`              | integer       | not null, primary key          |
| `name`            | string        | not null,                      |
| `server_id`       | integer       | not null, indexed, foreign key |
| `created at`      | datetime      | not null                       |
| `updated at`      | datetime      | not null                       |

* `owner_id` references `servers`
* index on `server_id`
__________________________________________________________________

`channel_messages`
| column name       | data type     | details                        |
| ----------------- |:-------------:| -------------------------------|
| `id`              | integer       | not null, primary key          |
| `body`            | text          | not null                       |
| `author_id`       | integer       | not null, indexed, foreign key |
| `channel_id`      | integer       | not null, indexed, foreign key |
| `created at`      | datetime      | not null                       |
| `updated at`      | datetime      | not null                       |

* `author_id` references `users`
* `channel_id` references `channels`
* index on `author_id`
* index on `channel_id`

___

### Future Directions
- [x] Add members list
  - [ ] Display online/offline status
- [x] Persist chat history for users
- [ ] Add direct messages between two users
- [ ] Enable custom profile photos
