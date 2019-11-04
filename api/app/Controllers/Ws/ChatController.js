'use strict'
const Ws = use('Ws')

class ChatController {
  constructor ({ socket,auth, request }) {
    this.socket = socket
    this.request = request
    this.auth = auth
    console.log("client connected")
    Ws.getChannel('chat:*').topic('chat:default').broadcast("USER_JOIN",{message: this.auth.user.username +' joined the chat'})


  }
     onClose(){
      Ws.getChannel('chat:*').topic('chat:default').broadcast("USER_LEFT",{message:this.auth.user.username +' left the chat'})

    }

     onMessage(message){
       this.socket.broadcastToAll("message",{message:message.message,sender:message.sender})

    }
    async onError(e){
       console.log(e)
    }
}

module.exports = ChatController
