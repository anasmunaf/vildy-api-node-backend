/** @format */

const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

module.exports = function () {
  // const db =
  // "mongodb+srv://anas:0000@cluster0.ujgot.mongodb.net/VidlyApp?retryWrites=true&w=majority";
  const db = config.get("db");
  mongoose.connect(db).then(() => winston.info(`Connected to ${db}...`));
};
