import './assets/style.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Footer from './components/layout/Footer';
import Beranda from './pages/Beranda';
import Profil from './pages/Profil';
import Riset from './pages/Riset';
import Pendidikan from './pages/Pendidikan';
import Mahasiswa from './pages/Mahasiswa';
import LainLain from './pages/LainLain';
import NotFound from './pages/NotFound';
import Berita from './pages/Berita';
import Array from './pages/Array';
function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/lainlain" element={<LainLain />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="/array" element={<Array />} />
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