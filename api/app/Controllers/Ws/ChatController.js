'use strict'
const Ws = use('Ws')
class ChatController {
  constructor ({ socket,auth, request}) {
    this.socket = socket
    this.request = request
    this.auth = auth
    console.log("client connected")
    let user = JSON.parse(JSON.stringify(this.auth.user))
    delete user.password
    user.socketid = this.socket.id
    Ws.getChannel('chat:*').topic('chat:default').broadcast("USER_JOIN",{message: user.username+' joined the chat', user:user})


  }
     onClose(){
       let user = JSON.parse(JSON.stringify(this.auth.user))
       delete user.password
      Ws.getChannel('chat:*').topic('chat:default').broadcast("USER_LEFT",{message:this.auth.user.username +' left the chat', user:user})

    }

     onMessage(message){
       this.socket.broadcastToAll("message",{message:message.message,sender:message.sender})
       if(message.message.startsWith('/')){
         let msg = message.message.split('/')
         switch (msg[1]) {
           case 'ping':
              this.socket.broadcastToAll("message",{message:'a',sender:{username:'server'}})
              break;
           case 'a':
             this.socket.broadcastToAll("message",{message:'aaaa',sender:{username:'server'}})
             break;
           default:
             this.socket.broadcastToAll("message",{message:`no ${msg[1]} doesn\'t exist`,sender:{username:'server'}})
             break;
         }

       }

     }
    async onError(e){
       console.log(e)
    }
}

module.exports = ChatController
