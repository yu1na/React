import './App.css'
import { Route, Link, Routes } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom'
import List from './components/board/List';
import View from './components/board/View';
import Write from './components/board/Write';
import NotFound from './components/common/NotFound';

  function App() {
    const boardData = [
      {no:1, title:'오늘은 React공부하는날', writer:'홍길동', date:'2025-01-01', contents:'React를 뽀개봅시다.'},
      {no:2, title:'어제는 Javascript공부해씸', writer:'유겸이', date:'2025-05-20', contents:'Javascript는 할게 많아요.'},
      {no:3, title:'내일은 Project해야징', writer:'개똥이', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?.'},
      {no:4, title:'추가 내일은 Project해야징', writer:'손오공', date:'2025-07-21', contents:'Project는 뭘 만들어볼까?.'},
    ];

  return (
  <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<List boardData={boardData} />} />
        <Route path='/list' element={<List boardData={boardData} />} />
        <Route path='/view'>
          <Route path=':no' element={<View boardData={boardData} />} />
        </Route>
        <Route path='/write' element={<Write />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App
