import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

const todoList = ["Learning Javascript", "Learning React", "Learning Nodejs"];

function App() {
	const [todo, setTodo] = useState(todoList);
	const [input, setInput] = useState("");

	const handleInput = () => {
		if (input === "") {
			alert("Input tidak boleh kosong");
		} else {
			setTodo([...todo, todoList.push(input)]);
			setInput("");
		}
	};

	const handleDelete = (e) => {
		todoList.splice(e, 1);
		setTodo([...todo, todoList]);
	};

	return (
		<div className="App">
			<h1 style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
				TODO APP REACT
			</h1>
			<div className="card">
				<input
					type="text"
					name="todo"
					placeholder="to do item"
					autoComplete="off"
					value={input}
					onChange={(text) => setInput(text.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") handleInput();
					}}
					style={{ height: "30px", padding: "2px" }}
				/>
				<button type="submit" onClick={() => handleInput()} className="btnSubmit">
					Add
				</button>
			</div>
			<div className="listContainer">
				{todoList.map((item, index) => {
					return <TodoList item={item} index={index} delete={(e) => handleDelete(e)} />;
				})}
			</div>
			<p className="read-the-docs">created by madiajijah11</p>
		</div>
	);
}

export default App;
