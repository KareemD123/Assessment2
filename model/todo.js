const todos = [{ todo: null }];

function getAll() {
  return todos;
}

function create(todo) {
  todo.done = false;
  todos.push(todo);
}

module.exports = {
  todos,
  getAll,
  create,
};
