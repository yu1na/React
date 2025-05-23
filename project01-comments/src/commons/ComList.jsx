import React, { useState } from "react";
import ComEdit from "./ComEdit";

function ComList(props){
  let lists = [];
  const [showEdit, setShowEdit] = useState(false);
  const [editNo, setEditNo] = useState(null);

  const checkEdit = (no) => {
    if (showEdit === true) {
      alert ("현재 수정 mode입니다. 수정취소를 먼저 눌러주세요");
      setShowEdit(true);
    }else{
      setEditNo(no);
    }
  };

  for (let row of props.myData) {
    lists.push(
    <div key={row.no}>
      {editNo === row.no ? null :
      <table id="boardTable">
        <tbody>
          <tr>
            <td>{row.no}</td>
            <td>Writer:{row.writer}</td>
            <td>
              Date :{row.date}
              <button type="button" onClick={(event)=>{
                event.preventDefault();
                checkEdit(row.no);
                console.log(showEdit);
              }}>수정</button>							
              <button type="button" onClick={()=>{
                if (window.confirm('삭제하시겠습니까?')) {
                  props.onDeleteComment(row.no);
                }
              }}>삭제</button>
            </td>
          </tr>
          <tr>
            <td colSpan="3" className="subject">{row.comment}</td>
          </tr>
        </tbody>
      </table>
      }
      {
        editNo !== row.no ? null :
        <ComEdit no={row.no} writer={row.writer} comment={row.comment}
        onEditComment={props.onEditComment}
        showEdit={showEdit} setShowEdit={setEditNo} 
        editNo={editNo} setEditNo={setEditNo}/>
      }
      </div>);
  }
  return (<>
    {lists}
  </>);
}

export default ComList;  
