'use strict'

const Ws = use('Ws')

Ws.channel('user:*', 'UserUpdateController').middleware(['auth'])
