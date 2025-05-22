import React from "react";
import { Link, useParams } from 'react-router-dom';


function View(props) {
  var params = useParams();
  console.log("파라미터", params.no);

  let vi = props.boardData.reduce((prev, curr)=>{
    if(curr.no === Number(params.no)) {
      prev = curr;
    }
    return prev;
  }, {});
  
  let readNum = Number(params.no);
  let prevNum = 0, nextNum = 0;

  if (readNum-1 === 0) {
    prevNum = 1;
  }
  else {
    prevNum = Number(params.no) - 1;
  }

  nextNum = readNum + 1;
  let isNextNum = props.boardData.reduce((prev, curr) => {
    if(curr.no===nextNum) {
      prev = true;
    }
    return prev;
  }, false);

  if (isNextNum === false) {
    nextNum = readNum;
  }

  const goPrev = () => {
    if (readNum-1 === 0) {
      prevNum = 1;
      alert('이전 페이지가 없습니다');
    }
    else {
      prevNum = Number(params.no) - 1;
    }
    console.log('prevNum', prevNum);
    props.navigate("/view/"+prevNum);
  }

  const goNext = () => {
    nextNum = readNum + 1;
    let isNextNum = props.boardData.reduce((prev, curr) => {
      if (curr.no === nextNum) {
        prev = true;
      }
      return prev;
    }, false);
    if(isNextNum===false){
      nextNum = readNum;
      alert('다음 페이지가 없습니다');
    }
    console.log('nextNum', nextNum);
    props.navigate("/view/"+nextNum);
  }

  return (<>
    <header>
        <h2>게시판-읽기</h2>
      </header> 
      <nav>
        {/* <a href="/list">목록</a>&nbsp;
        <a href="/edit">수정</a>&nbsp;
        <a href="/delete">삭제</a> */}
        <Link to="/list">목록</Link>&nbsp;
        <Link to="/edit">수정</Link>&nbsp;
        <Link to="/delete">삭제</Link>
      </nav>
      <article>
        <table id="boardTable">
          <colgroup>
            <col width="30%" /><col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <td>작성자</td>
              <td>{vi.writer}</td>
            </tr>
            <tr>
              <td>제목</td>
              <td>{vi.title}</td>
            </tr>
            <tr>
              <td>날짜</td>
              <td>{vi.date}</td>
            </tr>
            <tr>
              <td>내용</td>
              <td>{vi.contents}</td>
            </tr>
          </tbody>
        </table>
        <Link to={"/view/"+prevNum}>이전글1</Link>
        <Link to={"/view/"+nextNum}>다음글1</Link>

        <a href="/" onClick={(e) =>{
            e.preventDefault();
            goPrev();
        }}>이전글2</a>
        <a href="/" onClick={(e) =>{
            e.preventDefault();
            goNext();
        }}>다음글2</a>
      </article>
  </>);
}

export default View;
