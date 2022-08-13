import React from "react";
import "./TodoList.css";

function TodoList(props) {
	return (
		<ul key={props.index} className="unOrderList">
			<li>{props.item}</li>
			<button onClick={props.delete} className="btnDelete" value={props.index}>
				Delete
			</button>
		</ul>
	);
}

export default TodoList;
