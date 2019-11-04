

const Ws = use('Ws')

Ws.channel('chat:*', 'ChatController')
Ws.channel('user:*', 'userupdateController')
