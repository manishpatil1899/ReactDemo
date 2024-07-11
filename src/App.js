import './App.css';
import Book from './Book';
import Counter from './Counter';
import { BookSlice } from './bookreducer';
import Posts from './posts';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout></Layout>}>
        <Route path='/posts' element={<Posts></Posts>}></Route>
        <Route path='/post/:id' element={<Post></Post>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
