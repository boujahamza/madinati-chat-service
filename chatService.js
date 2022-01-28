const express = require("express");
const jwt = require('jsonwebtoken');
const sqlite = require('sqlite3');

var chatService = express();

var db = new sqlite.Database("users.sqlite3");

db.run(`CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL
)`);

eventsService.post("/");

eventsService.listen(3002);