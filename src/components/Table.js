import React from "react";

export const Table = ({data}) => {

  const handleClick = () => console.log(data.name)
  return (
    <table className="table">
      <TableHeader />
      <TableBody dataCh={data} onClick={handleClick}/>
    </table>
  );
};



const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Số thứ tự</th>
        <th scope="col">Tên</th>
        <th scope="col">Nghề</th>
      </tr>
    </thead>
  );
};

const TableBody = ({dataCh,onClick}) => {
  return (
    <tbody>
    {dataCh.map(value =>
        <tr>
        <th key={value.id} scope="row">{value.id}</th>
        <td onClick={()=>onClick(value)} >{value.name}</td>
        <td>{value.job}</td>        
      </tr>
    )}
      
    </tbody>
  );
};
