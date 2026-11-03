import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

function AppNavigation(){
  return (
    <Navbar bg='dark' variant='dark' expand='lg' className='mb-4'>
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Catatan Keuangan</Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navigation" />
        <Navbar.Collapse id="main-navigation">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/transaksi">Transaksi</Nav.Link>

            <NavDropdown title="Dropdown" id="components-dropdown">
              <NavDropdown.Item as={NavLink} to="/badge">Badge</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/cardstatusdemo">CardStatusDemo</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/headerbanner">HeaderBanner</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/transactionmanager">TransactionManager</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item as={NavLink} to="/kartu">KartuRingkasan</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/layoutgrid">LayoutGrid</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/wallet">WalletSummary</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/DaftarTugas">DaftarTugas</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/FormTambahTransaksi">Form Tambah Transaksi</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/PostListFetch">Post List Fetch</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/PostListAxios">Post list Axios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default  AppNavigation