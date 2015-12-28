/**
 * Recipie model events
 */

'use strict';

import {EventEmitter} from 'events';
var Recipie = require('./recipie.model');
var RecipieEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RecipieEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Recipie.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RecipieEvents.emit(event + ':' + doc._id, doc);
    RecipieEvents.emit(event, doc);
  }
}

export default RecipieEvents;
