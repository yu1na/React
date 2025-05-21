import './App.css'

function Header(props) {
  console.log('props', props.title);
  return(
    <header>
      <h2>게시판 - 목록</h2>
    </header>
  );
}

function Nav(props) {
  return (
    <nav>
      <a href="/" onClick={function(event){
        event.preventDefault();
        props.onChangeMode();
      }}>글쓰기</a>
    </nav>
  )
}

function Article(props) {
  const lists=[];
  for (let i = 0; i < props.boardData.length; i++) {
    let row = props.boardData[i];
    lists.push(
      <tr key={row.no}>
        <td className="cen">{row.no}</td>
        <td><a href={'/read/'+ row.no} onClick={(event) =>{
          event.preventDefault();
          props.onChangeMode(row.no);
        }}>{row.title}</a></td>
        <td className="cen">{row.writer}</td>
        <td className="cen">{row.date}</td>
      </tr>
    );
  }
  return(
    <article>
        <table id="boardTable">
          <thead>
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>작성자</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            {lists}
          </tbody>
        </table>
      </article>
  )
}

function App() {
  const boardData = [
    {no:1, title:'오늘은 React공부하는날', writer:'홍길동', date:'2025-01-01', contents:'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript공부해씸', writer:'유겸이', date:'2025-05-20', contents:'Javascript는 할게 많아요.'},
    {no:3, title:' 내일은 Project해야징', writer:'개똥이', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?.'},
  ];
  return (
    <div className='App'>
      <Header title="게시판 -목록(props)"></Header>
      <Nav onChangeMode={function(){
        alert("글쓰기 페이지로 이동");
      }}></Nav>
      <Article boardData={boardData} onChangeMode={
        (no)=>{
          alert('선택한 게시물 번호:'+no);
        }}></Article>
    </div>
  );
}

export default App