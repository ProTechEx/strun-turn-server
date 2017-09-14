const
  stun = require ('stun')

, { STUN_BINDING_REQUEST, STUN_ATTR_XOR_MAPPED_ADDRESS }
    = stun.constants

, server =
    stun.createServer()

, request =
    stun.createMessage(STUN_BINDING_REQUEST)

server.once('bindingResponse', stunMsg => {
  console.log('your ip:', stunMsg.getAttribute(STUN_ATTR_XOR_MAPPED_ADDRESS).value.address)

  server.close()
})

server.send
  (request, 19302, 'stun.l.google.com')

