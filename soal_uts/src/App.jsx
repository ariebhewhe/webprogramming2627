import './assets/style.css';
import { Routes, Route } from 'react-router-dom';

// TODO 1  
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';


// TODO 2 
import Beranda from './pages/Beranda';
import Berita from './pages/Berita';
import LainLain from './pages/LainLain';
import Mahasiswa from './pages/Mahasiswa';
import Pendidikan from './pages/Pendidikan';
import Profil from './pages/Profil';
import Riset from './pages/Riset';
import NotFound from './pages/NotFound';

function App() {
  return (
    // TODO 7
    <div className="container">
      <Header /> 
      <div className="main-wrapper">

        <main className="content-area">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/lainlain" element={<LainLain />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <SideBar />
      </div>

      <Footer />
      
    </div>
  );
}


export default App;