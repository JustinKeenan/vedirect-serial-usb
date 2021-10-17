const app = {
  debug: (msg) => console.log(msg),
  handleMessage: (id, delta) => console.log(JSON.stringify(delta, null, 2))
}

//UDP port port should be device specified
const plugin = require('./')(app)
plugin.start({
  udpPort: 7878,
  ignoreChecksum: true
})
