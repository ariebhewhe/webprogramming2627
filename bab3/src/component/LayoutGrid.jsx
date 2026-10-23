import { Container, Row, Col } from 'react-bootstrap';

export default function LayoutGrid(){
    return (
        <Container className="my-4">
            <Row>
                <Col md={8}>
                    <div className="p-3 bg-light border rounded">Daftar Transaksi</div>
                </Col>
                <Col md={4}>
                    <div className="p-3 bg-light border rounded">Ringkasan Saldo</div>
                </Col>
            </Row>
        </Container>
    )
}