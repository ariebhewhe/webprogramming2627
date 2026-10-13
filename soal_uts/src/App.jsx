//import './assets/style.css';
//import { Routes, Route } from 'react-router-dom';
import './assets/style.css';
import { Routes, Route } from 'react-router-dom';
// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import Header from './Header'
import SideBar from './SideBar'
import Footer from './assets/component/Footer.jsx' 
// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)
import Beranda from './pages/Beranda.jsx'
import LainLain from './pages/LainLain.jsx'
import Mahasiswa from './pages/Mahasiswa.jsx'
import Profil from './pages/Profil.jsx'
import Riset from './pages/Riset.jsx'
// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      {/* TODO 3 Header */}
      <header />
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
      <Footer />
    </div>
  
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 