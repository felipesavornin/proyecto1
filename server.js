require("dotenv").config();

const server = require('./app');

let port = process.env.port || 3000;

server.listen(port, () =>{
    console.log("El servidor esta funcionando en el puerto: " + port);
});
