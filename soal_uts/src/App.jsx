import "./assets/style.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header.jsx";
import SideBar from "./components/layout/SideBar.jsx";
import Footer from "./components/layout/Footer.jsx";
import Beranda from "./pages/Beranda.jsx";
import Berita from "./pages/Berita.jsx";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main-wrapper">
        <main className="content-area">
          {/* TODO 6 Routes 
          <Routes>
            <Route path="/" element={<Beranda />} />
          </Routes>
          */}
        </main>
        <SideBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
