//Accessing REPL
const repl = require('repl');

//Exposing a variable to the REPL explicitly by assigning the context object associated with each REPLServer.

const msg = 'message';

repl.start('> ').context.m = msg;