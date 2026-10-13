//import './assets/style.css';
//import { Routes, Route } from 'react-router-dom';

// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)
import Header from './components/Header';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Berita from './pages/Berita';
import NotFound from './pages/NotFound';
// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      {/* TODO 3 Header */}
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          {/* TODO 6 Routes 
          <Routes>
            <Route path="/" element={<Beranda />} />
          </Routes>
          */}
        </main>
         {/* TODO 4 SideBar */}
         <SideBar />
      </div>
      {/* TODO 5 Footer */}
      
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 