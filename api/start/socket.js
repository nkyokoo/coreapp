

const Ws = use('Ws')

Ws.channel('chat:*', 'ChatController').middleware('auth')
Ws.channel('user:*', 'UserupdateController').middleware('auth')
