'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
  onMessage(message){

  }

}

module.exports = ChatController
