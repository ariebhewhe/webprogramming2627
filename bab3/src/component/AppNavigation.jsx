// //import { Navbar, Nav, Container } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
// import Badge from './Badge';
// import CardStatusDemo from './CardStatusDemo';
// import HeaderBanner from './HeaderBanner';
// import TransactionManager from './TransactionManager';
// import KartuRingkasan from './KartuRingkasan';
// import LayoutGrid from './LayoutGrid';
// import WalletSummary from './WalletSummary';

// function Home() {
//   return null;
// }

// function AppNavigation(){
//     return (
//         <Navbar bg='dark' variant='dark' expand='lg' className='mb-4'>
//             <Container>
//                 {/* Brand/Logo linked to main page */}
//                 <Navbar.Brand as={NavLink} to='/'>Catatan Keuangan</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <Nav.Link as={NavLink} to="/">Beranda</Nav.Link>
//                         <Nav.Link as={NavLink} to="/transaksi">Transaksi</Nav.Link>
//                         <Nav.Link as={NavLink} to="/laporan">Laporan</Nav.Link>
//                     </Nav>

//                     <NavDropdown title="Menu Tambahan" id="basic-nav-dropdown"></NavDropdown>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// }

// export default  AppNavigation;

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom'; 
import Badge from './Badge'; 
import CardStatusDemo from './CardStatusDemo'; 
import HeaderBanner from './HeaderBanner'; 
import TransactionManager from './TransactionManager'; 
import KartuRingkasan from './KartuRingkasan'; 
import LayoutGrid from './LayoutGrid'; 
import WalletSummary from './WalletSummary'; 

function Home() { 
  return null; 
} 

function AppNavigation(){ 
  return ( 
    <Navbar bg='dark' variant='dark' expand='lg' className='mb-4'> 
      <Container> 
        {/* Brand/Logo */} 
        <Navbar.Brand as={NavLink} to='/'>Catatan Keuangan</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
        <Navbar.Collapse id="basic-navbar-nav"> 
          
          <Nav className="me-auto"> 
            <Nav.Link as={NavLink} to="/">Home</Nav.Link> 
            <Nav.Link as={NavLink} to="/transaksi">Transaksi</Nav.Link> 
          </Nav> 

          {/* Menu Dropdown Komponen */}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/badge">Badge</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/card-status">CardStatusDemo</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/header-banner">HeaderBanner</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/transaction-manager">TransactionManager</NavDropdown.Item>
            
            {/* Garis Pembatas */}
            <NavDropdown.Divider />
            
            <NavDropdown.Item as={NavLink} to="/kartu-ringkasan">KartuRingkasan</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/layout-grid">LayoutGrid</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/wallet-summary">WalletSummary</NavDropdown.Item>

            <NavDropdown.Divider />
            
            <NavDropdown.Item as={NavLink} to="/daftar-tugas-function">Daftar Tugas Function</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/post-list-axios">Post List Axios</NavDropdown.Item>
          </NavDropdown> 

        </Navbar.Collapse> 
      </Container> 
    </Navbar> 
  ); 
} 

export default AppNavigation;