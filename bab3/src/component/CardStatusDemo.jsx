import { Card, Button, Badge, Alert, Dropdown, ButtonGroup } from 'react-bootstrap';

Export default function CardStatusDemo() {
  return (
    <Card className="shadow-sm" style={{ width: '24rem' }}>
      <Card.header className="d-flex justify-content-between align-items-center">
        <span>Laporan Dompet</span>
        <Badge bg="success">Aktif</Badge>
      </Card.header>
      <Card.body>
        <Alert variant="info" className="py-2">
          Anggaran tersisa dalam batas aman.
        </Alert>
        <Card.title className="fs-3">Rp 3.450.000</Card.title>
        <Card.Text className="text-muted">
          Total pemasukan bulan ini telah melebihi target.
        </Card.Text>

        <Dropdown as={ButtonGroup}>
          <Button variant="primary">Ekspor Laporan</Button>
          <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
          <Dropdown.menu>
            <Dropdown.Item href="#/pdf">Format PDF</Dropdown.Item>
            <Dropdown.Item href="#/excel">Format Excel</Dropdown.Item>
          </Dropdown.menu>
        </Dropdown>
      </Card.body>
    </Card>
  );
}