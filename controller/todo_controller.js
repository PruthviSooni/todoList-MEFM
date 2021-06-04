exports.getTodos = (req, res, next) => {
    res.status(200).json({
        message: "get todoList controller",
    })
}
exports.addTodo = (req, res, next) => {
    res.status(200).json({
        "msg": "add todo controller",
    })
}
exports.updateTodos = (req, res, next) => {
    res.status(200).json({
        message: "update todo controller",
    })
}
exports.deleteTodo = (req, res, next) => {
    res.status(200).json({
        "msg": "delete todo controller",
    })
}