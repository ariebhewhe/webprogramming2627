import "./assets/style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import SideBar from "./components/layout/SideBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Beranda from "./pages/Beranda.jsx";
import Berita from "./pages/Berita.jsx";
import LainLain from "./pages/LainLain.jsx";
import Mahasiswa from "./pages/Mahasiswa.jsx";
import NotFound from "./pages/NotFound.jsx";
import Pendidikan from "./pages/Pendidikan.jsx";
import Profil from "./pages/Profil.jsx";
import Riset from "./pages/Riset.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          {/* TODO 6 Routes: konfigurasi routing untuk setiap halaman */}
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/pendidikan" element={<Pendidikan />} />
            <Route path="/mahasiswa" element={<Mahasiswa />} />
            <Route path="/riset" element={<Riset />} />
            <Route path="/lain-lain" element={<LainLain />} />
            <Route path="/berita" element={<Berita />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
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
