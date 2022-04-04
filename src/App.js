import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route  path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
