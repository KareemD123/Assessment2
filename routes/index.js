var express = require("express");
var router = express.Router();
var todosCtrl = require("../controller/todos");

/* GET home page. */
router.get("/todos", todosCtrl.index);
router.get("/", todosCtrl.index);
router.post("/create", todosCtrl.createTodo);

module.exports = router;
