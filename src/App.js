import './App.css';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const AppContent = () => {
  return (
    <Routes>
      
      <Route path="login" element={<Login />} />
      <Route path="/home" element={<Home />} /> 
    </Routes>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
