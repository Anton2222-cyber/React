"use strict";
const {User} = require('./User');
const path = require('node:path');
const fs = require('node:fs/promises');
const { error } = require('node:console');
//console.log("Hello World");
//console.log(globalThis);
// const user = new User("in", "ghh");
// console.log(user);
// console.log(path.resolve('first','secont'));

fs.readFile('./test.txt','utf-8')
.then(content=>console.log(content))
.catch(error=>console.log(error))