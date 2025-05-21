import './App.css'

function Header(props) {
  console.log('props', props.title);
  return(
  <header>
        <h2>{props.tilte}</h2>
  </header>
  );
}

function Nav() {
  return(
    <nav>
    <a href="/">글쓰기</a>
    </nav>
  );
}

function Article(props) {
  const lists = [];
  for (let i = 0; i < props.doardData.length; i++) {
    let row = props.boardData[i];
    lists.push(
      <tr>
              <td class="cen">1</td>
              <td>오늘은 React 공부하는 날</td>
              <td className="cen">홍길동</td>
              <td className="cen">2025-05-20</td>
            </tr>
    )
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
            
          </tbody>
        </table>
  </article>
  );
}

function App() {

  return (
    <div className='App'>
    <Header></Header>
    <Nav></Nav>
    <Article></Article>
    </div>
  )
}

export default App