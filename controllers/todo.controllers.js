import Todo from "../models/todo.model.js";

export const createTodos = async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            })
        }
        await Todo.create({
            title,
            description
        })
        return res.status(201).json({
            success: true,
            message: 'Todo created successfully',
            data: {
                title,
                description
            }
        })
    } catch (error) {
        console.log(error)
    }

}

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({
            success: true,
            todos
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateTodo = async (req, res) => {
    try {
        const { todoId } = req.params;
        const { title, description } = req.body;
        const todo = await Todo.findByIdAndUpdate(todoId,
            { title, description }, { new: true })
        return res.status(200).json({
            success: true,
            message: 'Todo Updated Successfully',
            data: todo
        })
    } catch (error) {
        console.log(error)
    }
}
