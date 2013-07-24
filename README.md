# sni

Get the Server Name Indication of a raw TLS stream (without Node's TLS module)

## Installation
```
npm install sni
```

## Usage
```js
var sni = require("sni")
  , net = require("net");

net.createServer(function(socket) {
    socket.once("data", function(data) { // Listen on the HELLO packet
        console.log(sni(data)); // www.example.com
    });
}).listen(443); // Listen on the HTTPS port
```

## Why?
Because I wanted to route my HTTPS streams without actually encoding them with
Node's TLS module.