import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TodoItem from './TodoItem';
import { getTodoAsync } from '../redux/todoSlice';

const TodoList = () => {
	const dispatch = useDispatch()
	const todos = useSelector((state)=>state.todos)

	useEffect(()=>{
		dispatch(getTodoAsync());
	},[dispatch])

	return (
		<ul className='list-group'>
			{todos.map((todo) => (
				<TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
