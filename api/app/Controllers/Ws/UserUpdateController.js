'use strict'

class UserUpdateController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
  onMessage (message) {
    console.log('got message', message)
  }
  onConnection(message){
    console.log('client connected')
  }

  onClose () {
    console.log('Closing subscription for room topic', this.socket.topic)
  }
}

module.exports = UserUpdateController
