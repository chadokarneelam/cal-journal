const eventSchema = require("../models/cal-journal");

const createEvent = async (event) => {
  return await new eventSchema(event).save();
};

const getEvents = async (filter) => {
  console.log("fetching events", filter);
  const result = await eventSchema.find(filter);
  return result;
};

const updateEventById = async (id, body) => {
  return await eventSchema.findByIdAndUpdate(id, body);
};

const deleteEventById = async (id) => {
  return await eventSchema.deleteOne({ _id: id });
};

module.exports = { createEvent, getEvents, updateEventById, deleteEventById };
