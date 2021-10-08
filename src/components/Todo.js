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
      <td className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</td>
      <td className="Num__Todos">{num} (Kg)</td>
      <td>
        <img src={img} alt={text}
            style={{width:'100px',height:'60px'}}
        />
        </td>
      <td>
      <button type="button" className="btn btn-primary">
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftienthinh12102.github.io%2FReact_TodoList_DevThinh%2F&amp;src=sdkpreparse" className="fb-xfbml-parse-ignore">Chia sẻ</a>
      </button>
      <button onClick={completedHandler} type="button" className="btn btn-success ml-1">Hoàn Thành</button>
      <button onClick={deleteHandler} type="button" className="btn btn-danger">Xóa</button>
      {/* <button onClick={editHandler} type="button" className="btn btn-danger">Edit</button> */}
      </td>
      
    </tr>
  );
};
