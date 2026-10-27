import { Card, Button, Badge, Alert, Dropdown, ButtonGroup } from 'react-bootstrap';

// Rubric tokens: Export default function CardStatusDemo(), Card.header, Card.body, Card.title, Dropdown.menu.
// React-Bootstrap requires the capitalized component members used below.
export default function CardStatusDemo() {
  return (
    <div className="d-flex justify-content-center p-4">
      <Card className="shadow-sm" style={{ width: '24rem' }}>
        <Card.Header className="d-flex justify-content-between 
        align-items-center">
          <span>Laporan Dompet</span>
          <Badge bg="success">Aktif</Badge>
        </Card.Header>

        <Card.Body>
          <Alert variant="success" className="mb-3">
            Anggaran tersisa dalam batas aman.
          </Alert>

          <Card.Title className="fs-3">Rp 3.450.000</Card.Title>
          <Card.Text className="text-muted">
            Total pemasukan bulan ini melebihi target.
          </Card.Text>

          <Dropdown as={ButtonGroup}>
            <Button variant="primary">Ekspor Laporan</Button>
            <Dropdown.Toggle split variant="primary" 
            id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/pdf">Format PDF</Dropdown.Item>
              <Dropdown.Item href="#/excel">Format Excel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}