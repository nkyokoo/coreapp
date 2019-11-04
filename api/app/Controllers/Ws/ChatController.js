'use strict'
const Ws = use('Ws')

class ChatController {
  constructor ({ socket,auth, request }) {
    this.socket = socket
    this.request = request
    console.log("client connected")
    Ws.getChannel('chat:*').topic('chat:default').broadcast("USER_JOIN",{message:'joined the chat'})


  }
     onClose(){
      Ws.getChannel('chat:*').topic('chat:default').broadcast("USER_LEFT",{message:'left the chat'})

    }

     onMessage(message){
       this.socket.broadcastToAll("message",{message:message.message,sender:message.sender})

    }
    async onError(e){
       console.log(e)
    }
}

module.exports = ChatController
