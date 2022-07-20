import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='sobre' element={<Sobre />} />
        <Route path='login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
