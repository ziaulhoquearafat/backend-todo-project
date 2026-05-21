import express from 'express';
import { createTodos, deleteTodo, getAllTodos, updateTodo } from '../controllers/todo.controllers.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();

router.post('/', isAuthenticated, createTodos);
router.get('/', getAllTodos);
router.put('/:todoId', isAuthenticated, updateTodo);
router.delete('/:todoId', isAuthenticated, deleteTodo)

export default router;