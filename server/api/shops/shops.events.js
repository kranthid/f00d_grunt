/**
 * Shops model events
 */

'use strict';

import {EventEmitter} from 'events';
var Shops = require('./shops.model');
var ShopsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ShopsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Shops.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ShopsEvents.emit(event + ':' + doc._id, doc);
    ShopsEvents.emit(event, doc);
  }
}

export default ShopsEvents;
