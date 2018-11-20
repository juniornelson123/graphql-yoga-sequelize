var repl = require("repl");


var models = require('./models')
// app specific modules


var envName = process.env.NODE_ENV || "dev";

var replServer = repl.start({
  prompt: "studiOn (" + envName + ") > ",
});

// open the repl session
replServer.context.models = models;

