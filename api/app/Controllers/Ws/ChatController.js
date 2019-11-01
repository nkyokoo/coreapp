'use strict'

class ChatController {
  constructor ({ socket, auth, request }) {
    this.socket = socket
    this.request = request
    socket.on('open', () => {
      console.log("client connected")
      socket.broadcast("USER_JOIN",auth.getUser().username + ' joined the chat')
    })
    socket.on('message', (data) => {

    })

  }


}

module.exports = ChatController
