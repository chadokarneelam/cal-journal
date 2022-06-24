// usecase means business logic
const mongo = require("../repository/mongo");
const dateUtil = require("../utils/date");
const moment = require("moment");

const createEvent = async (body) => {
  try {
    const res = await mongo.createEvent(body);

    console.log("event successfully created with id ", res._id);
    return res._id;
  } catch (error) {
    throw ("error while creating event", err);
  }
};

const getEvents = async (queries) => {
  try {
    const { userId, from, to } = queries;
    const isValidDateRange = validateDateRange(from, to);

    if (!isValidDateRange) {
      const range = dateUtil.getMonthDateRange();
      from = range.startDate;
      to = range.endDate;
    }

    return await mongo.getEvents({
      date: {
        $gte: from,
        $lt: to,
      },
    });
  } catch (error) {
    throw ("error while fetching events", error);
  }
};

const updateEventById = async (id, body) => {
  try {
    const res = await mongo.updateEventById(id, body);

    console.log("event successfully updated", res);
    return res;
  } catch (error) {
    throw ("error while updating event", error);
  }
};

const deleteEventById = async (id) => {
  try {
    const res = await mongo.deleteEventById(id);

    console.log("event successfully deleted", res);
    return res;
  } catch (error) {
    throw ("error while deleting event", error);
  }
};

const validateDateRange = (from, to) => {
  const fromM = moment(from, "MM-DD-YYYY");
  const toM = moment(to, "MM-DD-YYYY");

  console.debug("date m", fromM, toM, fromM <= toM);

  if (!fromM || !toM) {
    return false;
  }
  if (fromM > toM) {
    return false;
  }

  return true;
};

module.exports = {
  createEvent,
  getEvents,
  updateEventById,
  deleteEventById,
};
