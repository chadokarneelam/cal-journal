const express = require("express");
const router = express.Router();

const calJournal = require("../usecase/cal-journal");

router.get("/", async (req, res) => {
  try {
    const data = await calJournal.getEvents(req.query);
    res.json({
      data: data,
    });
  } catch (error) {
    res.json({
      status: false,
      error: error.message,
    });
  }
});

router.post("/create", async (req, res) => {
  try {
    const data = await calJournal.createEvent(req.body);
    res.json({
      message: "event created successfully.",
      data: data,
    });
  } catch (error) {
    res.json({
      status: false,
      error: error.message,
    });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const data = await calJournal.updateEventById(req.params.id, req.body);
    res.json({
      message: "event updated successfully.",
      data: data,
    });
  } catch (error) {
    res.json({
      status: false,
      error: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const data = await calJournal.deleteEventById(req.params.id);
    res.json({
      message: "event deleted successfully.",
      data: data,
    });
  } catch (error) {
    res.json({
      status: false,
      error: error.message,
    });
  }
});

module.exports = router;
