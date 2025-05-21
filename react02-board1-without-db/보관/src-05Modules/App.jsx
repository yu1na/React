import { useState } from 'react';
import './App.css'
import NavList from './components/Navigation/NavList';
import NavView from './components/Navigation/NavView';
import NavWrite from './components/Navigation/NavWrite';
import ArticleList from './components/Navigation/ArticleList';
import ArticleView from './components/Nnavigation/ArticleView';
import ArticleWrite from './components/Navigation/ArticleWrite';



function ReadyComp() {
  return(
    <div>
      <h3>컴포넌트 준비중입니다^^*</h3>
      <a href='/'>Home바로가기</a>
    </div>
  );
}

function Header(props) {
  console.log('props', props.title);
  return(
    <header>
      <h2>{props.title}</h2>
    </header>
  );
}

function App() {
  const boardData = [
    {no:1, title:'오늘은 React공부하는날', writer:'홍길동', date:'2025-01-01', contents:'React를 뽀개봅시다.'},
    {no:2, title:'어제는 Javascript공부해씸', writer:'유겸이', date:'2025-05-20', contents:'Javascript는 할게 많아요.'},
    {no:3, title:'내일은 Project해야징', writer:'개똥이', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?.'},
    {no:4, title:'추가 내일은 Project해야징', writer:'손오공', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?.'},
  ];

  const [mode, setMode] = useState('list');

  let articleComp, navComp, titleVar ;
  if(mode==='list') {
    titleVar = '게시판-목록(props)';
    navComp = <NavList onChangeMode={()=>{
      setMode('write');
    }}></NavList>
    articleComp = <ArticleList boardData={boardData}
      onChangeMode={(no)=>{
        console.log('선택한 게시물 번호:'+ no);
        setMode('view');
      }}></ArticleList>
  }
  else if (mode==='view') {
    titleVar = '게시판-읽기(props)';
    navComp = <NavView onChangeMode={(pmode)=>{
      setMode(pmode);
    }}></NavView>
    articleComp = <ArticleView></ArticleView>
  }
  else if (mode==='write') {
    titleVar = '게시판-쓰기(props)';
    navComp = <NavWrite onChangeMode={()=>{
      setMode('list');
    }}></NavWrite>
    articleComp = <ArticleWrite></ArticleWrite>
  }
  else {
    navComp = <ReadyComp></ReadyComp>;
    articleComp = '';
  }

  return (
    <div className='App'>
      <Header title={titleVar}></Header>
      {navComp}
      {articleComp}
    </div>
  );
}

export default App