// src/component/AppNavigation.jsx
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function AppNavigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        {/* Brand/Logo terhubung ke halaman utama */}
        <Navbar.Brand as={NavLink} to="/">
          CatatanKeuangan
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Beranda
            </Nav.Link>
            <Nav.Link as={NavLink} to="/transaksi">
              Transaksi
            </Nav.Link>
            <Nav.Link as={NavLink} to="/laporan">
              Laporan
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavigation;