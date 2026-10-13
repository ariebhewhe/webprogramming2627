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
        <main className="content-area"></main>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
