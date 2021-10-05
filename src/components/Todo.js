import React from "react";

export const Todo = ({text,num,todo,todos,setTodos,img}) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }
    const completedHandler = () => {
        setTodos(todos.map((item)=>{
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
  return (
    <tr className="todo">
      <td contenteditable="true" className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</td>
      <td contenteditable="true">{num}</td>
      <td>
        <img src={img} alt={text}
            style={{width:'100px',height:'60px'}}
        />
        </td>
      <td>
      <button type="button" className="btn btn-primary">Share</button>
      <button onClick={completedHandler} type="button" className="btn btn-success">Check</button>
      <button onClick={deleteHandler} type="button" className="btn btn-danger">Delete</button>
      </td>
      
    </tr>
  );
};
