import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function AppNavigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="site-navbar">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          Catatan Keuangan
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav>
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/transaksi">
              Transaksi
            </Nav.Link>
            <NavDropdown title="Dropdown" id="components-dropdown">
              <NavDropdown.Item as={NavLink} to="/badge">
                Badge
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/card-status-demo">
                CardStatusDemo
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/header-banner">
                HeaderBanner
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/transaction-manager">
                TransactionManager
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/kartu">
                KartuRingkasan
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/layout-grid">
                LayoutGrid
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/wallet">
                WalletSummary
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavigation;