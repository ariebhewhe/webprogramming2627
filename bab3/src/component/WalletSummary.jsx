import { Container, Card, Button, Badge } 
from 'react-bootstrap';

export default function WalletSummary() {
    return (
        <Container className="mt-4">
          <card style={{ width: '22rem'}}>
            <Card.Body>
              <Card.Title>Catatan keuangan</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Bulan ini <Badge bg="success">aktif</Badge>
                </Card.Subtitle>
                <Card.Text>
                  Total Pengeluaran: <strong>Rp 1.250.000</strong> 
                </Card.Text>
              </Card.Body>
            </card>
          </Container>
        );
      }

// app.jsx
// <WalletSummary />