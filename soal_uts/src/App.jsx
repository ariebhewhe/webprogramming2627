import './assets/style.css';
import { Routes, Route } from 'react-router-dom';

// TODO 1  Import Komponen Layout (Header, SideBar, Footer)
import Header from "./components/layout/Header"
import SideBar from "./components/layout/SideBar"
import Footer from "./components/layout/Footer"
// lakukan commit "selesai TODO 1" dan push 

// TODO 2  komponen Pages (Beranda, Profil, dll)
import Beranda from "./pages/Beranda"
import Profil from "./pages/Profil"
import LainLain from "./pages/LainLain"
import Mahasiswa from "./pages/Mahasiswa"
import Pendidikan from "./pages/Pendidikan"
import Riset from "./pages/Riset"
import Berita from './pages/Berita'
import NotFound from "./pages/NotFound";
// lakukan commit "selesai TODO 2" dan push 

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          <Routes>
            <Route path="/Beranda" element={<Beranda />} />
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Pendidikan" element={<Pendidikan />} />
            <Route path="/Berita" element={<Berita />} />
            <Route path="/Riset" element={<Riset />} />
            <Route path="/Mahasiswa" element={<Mahasiswa />} />
            <Route path="/LainLain" element={<LainLain />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <SideBar />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

// TODO 7 lakukan commit dengan nama "selesai TODO 7" dan push
