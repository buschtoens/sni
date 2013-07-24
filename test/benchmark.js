var sni = require("sni")
  , net = require("net");

net.createServer(function(socket) {
    socket.once("data", function(data) {
        var start = Date.now();
        for(var i = 0; i < 1000000; i++)
          sni(data);
        console.log(Date.now() - start + " ms");
    });
}).listen(443);