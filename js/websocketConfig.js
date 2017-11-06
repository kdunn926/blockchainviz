var blockchainWebSocket = $.simpleWebSocket({ url: 'wss://ws.blockchain.info/inv' , dataType: 'json' });
    
// reconnected listening
//blockchainWebSocket.listen(function(message) {
//    console.log(message);
//});

blockchainWebSocket.send({ 'op': 'ping' }).done(function() {
    // message send
    console.log("blockchain websocket ping sent. failures will be logged.")
}).fail(function(e) {
    // error sending
    console.log("blockchain websocket ping failed!")
});

blockchainWebSocket.send({ 'op': 'unconfirmed_sub' }).done(function() {
    // message send
    console.log("blockchain subscription requested. failures will be logged.")
}).fail(function(e) {
    // error sending
    console.log("blockchain subscription failed!")
});
