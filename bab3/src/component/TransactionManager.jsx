// src/component/TransactionManager.jsx
import { useState } from 'react';
import { Form, InputGroup, Modal, Button, Table, ProgressBar } from 'react-bootstrap';

function TransactionManager() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Penggunaan Anggaran</h3>
        <Button variant="success" onClick={handleShow}>
          + Tambah Transaksi
        </Button>
      </div>

      <ProgressBar now={75} label="75%" variant="warning" className="mb-4" />

      {/* Tabel Data Transaksi */}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Keterangan</th>
            <th>Kategori</th>
            <th>Nominal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Belanja Bulanan</td>
            <td>Pengeluaran</td>
            <td>Rp 750.000</td>
          </tr>
        </tbody>
      </Table>

      {/* Modal Form Tambah Transaksi */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Catat Transaksi Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control type="text" placeholder="Misal: Bensin" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nominal</Form.Label>
              <InputGroup>
                <InputGroup.Text>Rp</InputGroup.Text>
                <Form.Control type="number" placeholder="0" />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Simpan Transaksi
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TransactionManager;