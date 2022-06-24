const IpfsHttpClient = require('ipfs-http-client')

const ipfs = IpfsHttpClient({
  url: "https://ipfs.smartholdem.io"
})

module.exports = ipfs
