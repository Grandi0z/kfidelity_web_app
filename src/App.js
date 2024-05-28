import './App.css';

// !import styles
import "./assets/plugins/fontawesome-free/css/all.min.css";
import "./assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "./assets/dist/css/adminlte.min.css";
import "./assets/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "./assets/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "./assets/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";

import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import MonCompte from './components/MonCompte';

const AppContent = () => {
  return (
    <Routes>
      
      <Route path="login" element={<Login />} />
      <Route path="/home" element={<Home />} /> 
      <Route path="/mon_compte" element={<MonCompte />} />
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
