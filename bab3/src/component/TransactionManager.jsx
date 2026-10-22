import {useState} from 'react'
import {Form, InputGroup, Modal, Button, Table, ProgressBar} from 'react-bootstrap'

// const s = useState(false)

function TransactionManager() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Penggunaan Anggaran</h3>
        <Button variant="primary" onClick={handleShow}>Tambah Transaksi</Button>
      </div>

      <ProgressBar now={60} label="60%" className="mb-4" />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Keterangan</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Belanja Bulanan</td>
            <td>Rp 500.000</td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Transaksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Keterangan</Form.Label>
              <Form.Control type="text" placeholder="Masukkan keterangan" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Jumlah</Form.Label>
              <InputGroup>
                <InputGroup.Text>Rp</InputGroup.Text>
                <Form.Control type="number" placeholder="0" />
              </InputGroup>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default TransactionManager