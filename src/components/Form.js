import React from "react";

export const Form = () => {
  return (
    <form className="add-form" >
      <div className="form-group mt-2">
        <label>Mua Gì Đây ?</label>
        <input
          type="text"
         
          className="form-control"
          placeholder="Thêm món"
        ></input>
      </div>
      <div className="form-group mt-2">
        <label>Số Lượng</label>
        <input
          type="text"
          
          className="form-control"
          placeholder="Số Lượng"
        ></input>
      </div>
      <div className="form-group mt-2">
        <label>Hình Ảnh</label>
        <input type="file" className="form-control" />
      </div>
      <input
        type="submit"
        className="btn btn-primary mt-3 mb-2"
        value="Lưu Tasks"
      ></input>
    </form>
  );
};
