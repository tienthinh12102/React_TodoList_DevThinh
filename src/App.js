import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App__header container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="App__title">nhiệm vụ đi chợ</h1>
          <Form />
        </div>
      </div>
    </div>
  );
}



export default App;
