module.exports = eventHandler = function (event) {
    if (event.type === 'message') {
        console.log('event is a message');
        messageHandler(event);
    } else if (event.type === 'follow') {
        console.log('event is a follow');
        followHandler(event);
    } else {
        console.log('event is unknown');
    }
}