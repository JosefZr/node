const eventEmitter = require("events")
const custumEmitter = new eventEmitter()

custumEmitter.on("response", ()=>{
    console.log(` data resived`)
})

custumEmitter.emit('response')