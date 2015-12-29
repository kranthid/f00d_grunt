/**
 * Boy model events
 */

'use strict';

import {EventEmitter} from 'events';
var Boy = require('./boy.model');
var BoyEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
BoyEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Boy.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    BoyEvents.emit(event + ':' + doc._id, doc);
    BoyEvents.emit(event, doc);
  }
}

export default BoyEvents;
