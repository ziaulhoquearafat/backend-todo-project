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
            message: 'Todo created successfully'
        })
    } catch (error) {
        console.log(error)
    }

}