const Todo = require("../models/Todo.model")


module.exports.todosController = {
  createTodo: async (req, res) => {
    const {text, completed} = req.body;
    try {
     const todo = await Todo.create({text, completed})
      res.json(todo)
    }catch (e) {
      res.json(e.message)
    }
  },
  getTodo: async (req, res) => {
    try {
      const todo = await Todo.find({})
      res.json(todo)
    }catch (e) {
      res.json(e.message)
    }
  },
  editTodo: async (req, res) => {
    const {text, completed} = req.body;
    try {
      await Todo.findByIdAndUpdate(
        req.params.id,{text, completed},{new: true}
      );
      res.json("тудушка изменена")
    }catch (e) {
      res.json(e.message)
    }
  },
  removeTodo: async (req, res) => {
    try {
      await Todo.findByIdAndDelete(req.params.id)
      res.json("Тудушка удалена")
    }catch (e) {
      res.json(e.message)
    }
  }
}