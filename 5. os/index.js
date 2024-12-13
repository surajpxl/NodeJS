const os = require('os');

console.log("CPU Architecture: " + os.arch());

console.log("Free memory: " + os.freemem());

console.log("Total memory: " + os.totalmem());

console.log("Network Interfaces: " + JSON.stringify(os.networkInterfaces()));

console.log("Temp Dir: " + os.tmpdir());

console.log("Endianness: " + os.endianness());

console.log("Host Name: " + os.hostname());

console.log("OS Type: " + os.type());

console.log("OS Platform: " + os.platform());

console.log("OS Release: " + os.release());