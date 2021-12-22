const { Router } = require("express");
const { todosController } = require("../controllers/todos.controller")

const router = Router();


router.post("/todos", todosController.createTodo)
router.get("/todos", todosController.getTodo)
router.patch("/todos/:id", todosController.editTodo)
router.delete("/todos/:id", todosController.removeTodo)

module.exports = router;