//1. import json server
const JSONServer = require(`json-server`)

// 2. creating server for running json
const rBuilder = JSONServer.create()

// 3. creating middleware
const middleware = JSONServer.defaults()

// 4. inport db.json
const router = JSONServer.router("db.json")

// 5. Setting port to run the server
const PORT = 3000 || process.env.PORT

// 6. User middleware, server and listen for data from frontend

rBuilder.use(middleware)
rBuilder.use(router)
rBuilder.listen(PORT,()=>{
    console.log("Resume Builder started running at port 3000");
})
