import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Ghi Chú</th>
            <th scope="col">Số Lượng (kg)</th>
            <th scope="col">Hình Ảnh</th>
            <th scope="col">Quản Lý</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <Todo
              setTodos={setTodos}
              todos={todos}
              text={todo.text}
              num={todo.num}
              img={todo.img}
              key={todo.id}
              todo={todo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
