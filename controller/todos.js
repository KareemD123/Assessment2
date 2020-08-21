const Todo = require("../model/todo");

function index(req, res) {
  let allTodos = Todo.getAll();
  console.log(allTodos.todo);
  if (allTodos.todo == null) {
    res.render("error", { error: "There are no To Dos yet!" });
  }
  res.render("index", {
    todos: Todo.getAll(),
  });
}

module.exports = {
  index,
  createTodo,
};

function createTodo(req, res) {
  console.log(req.body);
  req.body.done = false;
  Todo.create(req.body);
  res.render("index", {
    todos: Todo.getAll(),
  });
}
