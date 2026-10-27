// import { Card, Button, Badge, Alert, Dropdown, ButtonGroup } from 'react-bootstrap';

// export default function CardStatusDemo() {
//   return (
//     <div style={{ width: '100%', margin: '24px 0' }}>
//       <Card className="shadow-sm w-100">
//         <Card.Header className="d-flex justify-content-between align-items-center" style={{ padding: '8px 12px', fontSize: '18px' }}>
//           <span>Laporan Dompet</span>
//           <Badge bg="success" style={{ fontSize: '12px' }}>Aktif</Badge>
//         </Card.Header>
//         <Card.Body style={{ padding: '12px' }}>
//           <Alert variant="info" style={{ padding: '6px 12px', marginBottom: '12px', fontSize: '18px' }}>
//             Anggaran tersisa dalam batas aman.
//           </Alert>
//           <Card.Title style={{ fontSize: '30px', marginBottom: '8px' }}>Rp 3.450.000</Card.Title>
//           <Card.Text className="text-muted" style={{ fontSize: '16px', marginBottom: '16px' }}>
//             Total pemasukan bulan ini telah melebihi target.
//           </Card.Text>

//           <Dropdown as={ButtonGroup}>
//             <Button variant="primary" style={{ padding: '6px 12px', fontSize: '16px' }}>Ekspor Laporan</Button>
//             <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
//             <Dropdown.Menu>
//               <Dropdown.Item href="#/pdf">Format PDF</Dropdown.Item>
//               <Dropdown.Item href="#/excel">Format Excel</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }


import { Container, Card, Button, Badge, Alert, Dropdown, ButtonGroup } from 'react-bootstrap';

export default function CardStatusDemo() {
  return (
    <Container fluid>
      <Card className="shadow-sm w-100">
        <Card.Header className="d-flex align-items-center gap-1">
          <span>Laporan Dompet</span>
          <Badge bg="success">Aktif</Badge>
        </Card.Header>
        <Card.Body className="text-center">
          <Alert variant="info" className="py-2">
            Anggaran tersisa dalam batas aman.
          </Alert>
          <Card.Title className="fs-3 mb-2">Rp 3.450.000</Card.Title>
          <Card.Text className="text-muted">
            Total pemasukan bulan ini telah melebihi target.
          </Card.Text>

          <Dropdown as={ButtonGroup}>
            <Button variant="primary">Ekspor Laporan</Button>
            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <Dropdown.Item href="#/pdf">Format PDF</Dropdown.Item>
              <Dropdown.Item href="#/excel">Format Excel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </Container>
  );
}