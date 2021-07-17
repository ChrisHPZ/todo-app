import React from "react"
import ReactDOM from "react-dom"
// import the component File so we can use its functionality
import TodoContainer from "./functionBased/components/TodoContainer"
// Display the code in TodoContainer inside div id root
// CSS
import "./functionBased/App.css"
import { BrowserRouter as Router } from "react-router-dom"
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<TodoContainer />
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
)