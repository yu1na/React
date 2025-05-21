import React from "react";

function ArticleView(props) {
  console.log("선택한게시물:", props.selectRow);
  return(
    <article>
      <table id="boardTable">
          <colgroup>
            <col width="20%" /><col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <td>작성자</td>
              <td>{props.selectRow.writer}</td>
            </tr>
            <tr>
              <td>제목</td>
              <td>{props.selectRow.title}</td>
            </tr>
            <tr>
              <td>날짜</td>
              <td>{props.selectRow.date}</td>
            </tr>
            <tr>
              <td>내용1</td>
              <td>{
                props.selectRow.contents.split('\n').map((currVal)=>{
                  console.log(currVal)
                  return(<>
                    {currVal} <br key={Math.random()} />
                  </>);
                })
              }</td>
            </tr>
            <tr>
              <td>내용2</td>
              <td style={{'whiteSpace':'pre-wrap'}}>
                {props.selectRow.contents}
              </td>
            </tr>
            <tr>
              <td>내용3</td>
              <td className='contWrap'>
                {props.selectRow.contents}
              </td>
            </tr>
          </tbody>
        </table>
    </article>
  );
}

export default ArticleView;