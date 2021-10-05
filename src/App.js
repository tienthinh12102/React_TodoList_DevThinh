import "./App.css";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import React, {useState,useEffect} from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputNum, setInputNum] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    getLocalTodos();
  },[]);

  useEffect(()=>{
    saveLocalTodos();
  },[todos]);

  
  //Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App__header container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="App__title">nhiệm vụ đi chợ</h1>
          <Form  todos={todos} setTodos={setTodos} 
                  inputText={inputText} setInputText={setInputText}
                  inputNum={inputNum} setInputNum={setInputNum}
                  inputImg={inputImg} setInputImg={setInputImg}/>
          <TodoList setTodos={setTodos} todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
