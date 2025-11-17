import React, { useState } from "react";

export const ToDoList = () => {
    let [task, setTask] = useState("");   //*String del input cambio de estado

    function addNewTask(event) {          //*recuperacion de string
        setTask(event.target.value)

    }

    let [list, setList] = useState([]) //* array cambio de estado


    function addNewArrayElementToList() {       //* agregar task al array
        setList([...list, task])
        setTask("")

    }

    let eliminateListElement = (indexRemove) => {
        let newList = list.filter((item, index) => {
            if (index !== indexRemove) {
                return true;
            } else {
                return false;
            }
        });
        setList(newList);
    };


    return (
        <div className="row">
        <div className="bg-success m-auto p-2 col-5 mt-2">

            <div className="row">
                <div className="col-11 d-flex justify-content-center bg-black m-auto pt-2 pb-2"> 
                    <input type="text" className="col-11" value={task} onChange={addNewTask}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                addNewArrayElementToList();
                            }
                        }}

                    />
                 </div> 
            </div>

            
                    <>
                        {list.map((item, index) => (
<div className="row mt-1">
                <div className="col-11 m-auto bg-danger">
                    <ul>
                            <li key={index}> {item} <button onClick={() => eliminateListElement(index)}>borrar</button></li>
                            </ul>
  </div>
            </div>
                        ))}
                    </>
                    

              
            <div className="row">
                         <div className="col-11 m-auto bg-black">
                    <p>{list.length + " task"}</p>
                    </div>
                    </div>
        </div>
        </div>


    )


}


