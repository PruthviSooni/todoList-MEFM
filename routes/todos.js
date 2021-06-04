const app = require('express')
const todosController = require('../controller/todo_controller')
const router = app.Router()
// GET api/v1/todoList  
router.get('/todoList', todosController.getTodos)

    //  POST api/v1/todo 
    .post('/addTodo', todosController.addTodo)

    // PUT api/v1/todo/todoId
    .put('/updateTodo/:todoId', todosController.updateTodos)

    // DELETE api/v1/todo/todoId
    .delete('/deleteTodo/:todoId', todosController.deleteTodo)

module.exports = router;