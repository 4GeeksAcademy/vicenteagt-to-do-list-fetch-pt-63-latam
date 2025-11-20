import { Button } from "bootstrap";
import React from "react";

export const FetchAPI = () => {

const API_URL = "https://playground.4geeks.com/todo"

const addUsertoAPI = () => {
    fetch(API_URL + "/users/vicenteagt",{
        method : "POST",
        headers: {
        "Content-Type": "application/json"
      }
})
.then(response => response.json())
.then((data) => console.log(data))
.catch((error) => (error))

}

const getAPIUserList = () => {                //traer lista de usuario y condicionar funcion de agregar usuario
fetch(API_URL + "/users/vicenteagt")
.then(response => {
    if (response.status === 404){
        addUsertoAPI()
} return response.json()
})
.then((data) => console.log(data))
.catch((error) => (error))

}








    return(
        <div>
        <h1>test</h1>
        </div>
    )
}