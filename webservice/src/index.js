const Hapi = require('@hapi/hapi')
const routes = require('./routes')
require("dotenv").config({ path: ".././config.env" });

const dbo = require("./db/conn");
const init = async () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: { origin: ['*'] }
    },
    debug: { request: ['handler'] }
  })

  server.route(routes)
  // await jwtUtil.registerAuthStrategy(server)
  await server.start()
  console.log(`🚀 Server ready at ${server.info.uri}`)
  server.table().forEach(route => console.log(`${route.method}\t${route.path}`))
}

process.on('uncaughtException', (err, origin) => {
  console.log('Uncaught Exception:', err, 'Exception origin:', origin)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection:', promise, 'reason:', reason)
})

init()
