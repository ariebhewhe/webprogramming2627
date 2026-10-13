//import './assets/style.css';
//import { Routes, Route } from 'react-router-dom';

// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';

// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)
import Beranda from './pages/Beranda';
import LainLain from './pages/Beranda';
import Mahasiswa from './pages/Beranda';
import Pendidikan from './pages/Beranda';
import Profile from './pages/Beranda';
import Riset from './pages/Beranda';

// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      {/* TODO 3 Header */}
      <div className="main-wrapper">
        <main className="content-area">
          {/* TODO 6 Routes 
          <Routes>
            <Route path="/" element={<Beranda />} />
          </Routes>
          */}
        </main>
         {/* TODO 4 SideBar */}
      </div>
      {/* TODO 5 Footer */}
      
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 