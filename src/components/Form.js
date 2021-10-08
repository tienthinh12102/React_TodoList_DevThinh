import React,{useState} from "react";

export const Form = ({inputText,setInputText,setTodos,todos,inputNum,setInputNum,inputImg,setInputImg}) => {
  const [error, setError] = useState(null);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const inputNumHandler = (e) => {   
    if((e.target.value) >= 0){
      setInputNum(e.target.value);
      setError(null)
    }else{
      setError(`*Có lỗi ! Hãy nhập số lớn hơn 0`)
    }
    
  };
  const inputImgHandler = (e) => {
    setInputImg(e.target.value);
  };
  const SubmitTodoHandler = (e) =>{
    e.preventDefault();
    if ((inputImg && inputText && inputNum) === "") {
      alert("Nhập thiếu thông tin ! Vui lòng kiểm tra lại");
      return
    }
    setTodos([
      ...todos, 
      {text: inputText,
       num: inputNum,
       img: inputImg, 
       completed: false,
       id: Math.random()*1000},
    ]);
    setInputText("");
    setInputNum("");
    setInputImg("");   
  };

  return (
    <form className="add-form" >
      <div className="form-group mt-2">
        <label>Mua Gì Đây ?</label>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"        
          className="form-control"
          placeholder="Thêm món"
        ></input>
      </div>
      <div className="form-group mt-2">
        <label>Số Lượng</label>
        <input
          value={inputNum}
          type="number"
          id="number"
          min="0"
          onChange={inputNumHandler}

          className="form-control" 
          placeholder="Số Lượng"
        >
          
        </input>
        {error ? <span >{error}</span> : ""}
      </div>
      <div className="form-group mt-2">
        <label>Hình Ảnh</label>
        <input value={inputImg} 
        onChange = {inputImgHandler}
        type="text" className="form-control" placeholder="URL Hình ảnh" />
      </div>
      <input
        onClick={SubmitTodoHandler}
        type="submit"
        className="btn btn-primary mt-3 mb-2"
        value="Lưu Nhiệm vụ"
      ></input>
    </form>
  );
};
