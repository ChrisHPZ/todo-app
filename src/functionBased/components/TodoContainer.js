import React from "react"
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"
import { v4 as uuidv4 } from "uuid"
import { Route, Switch } from "react-router-dom"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar"

// Create TodoContainer class
// It extends the React.Component class
class TodoContainer extends React.Component {
	// Create states for the todo's
	state = {
		todos: []
	}
	handleChange = id => {
		this.setState(prevState => ({
			todos: prevState.todos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						completed: !todo.completed,
					}
				}
				return todo
			}),
		}))
	}
	// Use the render method to return the JSX
	delTodo = id => {
		this.setState({
			todos: [
				...this.state.todos.filter(todo => {
					return todo.id !== id;
				})
			]
		})
	};
	addTodoItem = title => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false
		};
		this.setState({
			todos: [...this.state.todos, newTodo]
		});
	};
	setUpdate = (updatedTitle, id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if(todo.id === id) {
					todo.title = updatedTitle
				}
				return todo
			}),
		})
	}
	componentDidUpdate(prevProps, prevState) {
		if(prevState.todos !== this.state.todos) {
			const temp = JSON.stringify(this.state.todos)
			localStorage.setItem("todos", temp)
		}
	}
	componentDidMount() {
		const temp = localStorage.getItem("todos")
		const loadedTodos = JSON.parse(temp)
		if(loadedTodos) {
			this.setState({
				todos: loadedTodos
			})
		}
	}
	render() {
		return (
			<>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<div className="container">
						<div className="inner">
							<Header />
							<InputTodo addTodoProps={this.addTodoItem} />
							<TodosList 
								todos={this.state.todos} 				
								handleChangeProps={this.handleChange} 
								deleteTodoProps={this.delTodo} 
								setUpdate={this.setUpdate}
							/>
						</div>
					</div>
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="*">
					<NotMatch />
				</Route>
			</Switch>
			</>
		)
	}
}
export default TodoContainer