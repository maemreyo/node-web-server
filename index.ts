import { logEvents } from "./event/logEvents";

import EventEmitter from "events";

class MyEmitter extends EventEmitter { };

// initialize emitter
const emitter = new MyEmitter();

emitter.on("LOG", logEvents);

setTimeout(() => {
  emitter.emit("LOG", "Log a message!");
}, 1000)

