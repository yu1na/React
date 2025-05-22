import React from "react";

function ComList(props){
  const lists = [];
  for (let i = 0; i < props.myData.length; i++) {
    let row = props.myData[i];
    lists.push(
      <table id="boardTable" key={row.no}>
        <tbody>
      <tr>
        <td>{row.no}</td>
        <td>Writer:{row.writer}</td>
        <td>
          Date:{row.date}
          <button type="button" onClick={(e)=>{
            e.preventDefault();
            props.changeMode('edit', row.no);
          }}>수정</button>							
          <button type="button" onClick={(e)=>{
            e.preventDefault();
            if (window.confirm('삭제하시겠습니까?')) {
              props.onDelete(row.no);
            }
          }}>삭제</button>
        </td>
      </tr>
      <tr>
        <td colspan="3" className="subject">{row.contents}</td>
      </tr>
    </tbody>
    </table>
    )
  }
  return (<>
    {lists}
  </>);
}

export default ComList;  
