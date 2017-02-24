const events = require('events');
const eventEmitter = new events.EventEmitter();

const listener1 = function listener1() {
  console.log('listener1 executed.');
}

const listener2 = function listener2() {
  console.log('listener2 executed.');
}

const newListener = function newListener() {
  console.log('newListener event is fired');
}

const removeListener = function removeListener() {
  console.log('removeListener event is fired');
}

eventEmitter.on('newListener', newListener);

eventEmitter.on('removeListener', removeListener);

eventEmitter.addListener('connection', listener1);

eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection', listener1);
console.log("listener1 will not listen now.");

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

console.log('Program Ended');
