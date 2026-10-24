
import './App.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink, Route, Routes } from 'react-router-dom'
import CardStatusDemo from './component/CardStatusDemo'
import TransaksiItem from './component/TransaksiItem'
import KartuRingkasan from './component/KartuRingkasan'
import WalletSummary from './component/WalletSummary'
import TransactionManager from './component/TransactionManager'
import Badge from './component/Badge'
import HeaderBanner from './component/HeaderBanner'
import LayoutGrid from './component/LayoutGrid'



function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/walletsummary">
            Catatan Keuangan
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/transaksi">
                Transaksi
              </Nav.Link>
              <NavDropdown title="Dropdown" id="component-dropdown">
                <NavDropdown.Item as={NavLink} to="/badge">
                  Badge
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/cardstatusdemo'>
                  CardStatusDemo
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/headerbanner'>
                  HeaderBanner
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/transactionmanager'>
                  TransactionManager
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to='/kartu'>
                  KartuRingkasan
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/layoutgrid'>
                  LayoutGrid
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/walletsummary'>
                  WalletSummary
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' />
        <Route path='/transaksi' element={
          <>
            <TransaksiItem />
          </>
        } />
        <Route path='/laporan' element={<CardStatusDemo />} />
        <Route path='/kartu' element={ <KartuRingkasan />} />
        <Route path='/badge' element={
          <div className="badge-list">
            <Badge tipe="Pemasukan">+ Rp 50.000</Badge>
            <Badge tipe="Pengeluaran">- Rp 20.000</Badge>
            <Badge tipe="Pemasukan">+ Rp 150.000</Badge>
            <Badge tipe="Pengeluaran">- Rp 35.000</Badge>
          </div>
        } />
        <Route path='/wallet' element={ <WalletSummary />} />
        <Route path='/walletsummary' element={<WalletSummary />} />
        <Route path='/cardstatusdemo' element={<CardStatusDemo />} />
        <Route path='/headerbanner' element={<HeaderBanner />} />
        <Route path='/transactionmanager' element={<TransactionManager />} />
        <Route path='/layoutgrid' element={<LayoutGrid />} />
      </Routes>      
    </>
  )
}

export default App
// coba
