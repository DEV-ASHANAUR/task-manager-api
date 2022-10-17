const express = require("express");
const { getAllTaskList } = require("../controllers/task.controller");
const router = express.Router();

//GET
router.get("/", getAllTaskList);
//export
module.exports = router;
