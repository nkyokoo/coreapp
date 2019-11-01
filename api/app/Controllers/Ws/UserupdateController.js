
'use strict'
const auth = undefined;


class UserupdateController {
  constructor ({ socket, auth, request }) {
    this.auth = auth;
    this.socket = socket
    this.request = request
  }
}

module.exports = UserupdateController
