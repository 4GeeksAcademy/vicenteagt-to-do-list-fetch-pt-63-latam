import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { ToDoList } from "./ToDoList.jsx";
import { DesignToDo } from "./DesignToDo.jsx";
//create your first component
const Home = () => {
	return (
		    <div className="container-fluid">
<ToDoList/>
		 </div>
	);
};

export default Home;