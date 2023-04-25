const net = require("net");
const { hostname } = require("os");
const HOSTNAME = "localhost";
const PORT = 3000;
const Socket = net.connect(PORT, HOSTNAME)

console.log("name");
process.stdin.on("data", (input) =>{
    Socket.write(input.toString().trim())

});
Socket.on("data", (data) => {
    console.log(data.toString());
});