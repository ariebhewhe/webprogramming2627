import './assets/style.css';
import { Routes, Route } from 'react-router-dom';

// TODO 1  
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';

// TODO 2  komponen Pages (Beranda, Profil, dll)
import Beranda from './pages/Beranda';
import LainLain from './pages/LainLain';
import Mahasiswa from './pages/Mahasiswa';
import Pendidikan from './pages/Pendidikan';
import Profile from './pages/Profil';
import Riset from './pages/Riset';

// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    
    <div className="container">
      <Header /> 
      <div className="main-wrapper">
        <main className="content-area">
          <Routes>
            <Route path="./pages/Beranda" element={<Beranda />} />
            <Route path="./pages/Profil" element={<Profile />} />
            <Route path="./pages/Pendidikan" element={<Pendidikan />} />
            <Route path="./pages/Riset" element={<Riset />} />
            <Route path="./pages/Mahasiswa" element={<Mahasiswa />} />
            <Route path="./pages/LainLain" element={<LainLain />} />
          </Routes>
        </main>
        <SideBar />
      </div>
      <Footer />
      
    </div>
  );
}


export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push 
