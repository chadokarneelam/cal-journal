const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: String,
  summary: String,
  date: {
    type: Date,
    default: Date.now,
  },
  eventType: String,
  event: {
    salesNumber: Number,
    source: String,
  },
});

module.exports = mongoose.model("Event", eventSchema, "events");
