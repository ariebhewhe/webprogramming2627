import { Button, Figure, Form, Image, InputGroup, ListGroup } from 'react-bootstrap'
import heroImage from '../assets/hero.png'

function TransactionManager() {
  return (
    <main className="container py-4">
      <h1 className="h3 mb-3">Komponen Tambahan</h1>

      <h2 className="h5">Form dan Input Group</h2>
      <Form className="mb-4">
        <Form.Group className="mb-3" controlId="namaTransaksi">
          <Form.Label>Nama transaksi</Form.Label>
          <Form.Control type="text" placeholder="Masukkan nama transaksi" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="jenisTransaksi">
          <Form.Label>Jenis transaksi</Form.Label>
          <Form.Select defaultValue="">
            <option value="" disabled>Pilih jenis transaksi</option>
            <option>Pemasukan</option>
            <option>Pengeluaran</option>
          </Form.Select>
        </Form.Group>
        <Form.Label>Nominal</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Text>Rp</InputGroup.Text>
          <Form.Control type="number" placeholder="0" aria-label="Nominal transaksi" />
        </InputGroup>
        <Button type="button" variant="primary">Simpan</Button>
      </Form>

      <h2 className="h5">Image dan Figure</h2>
      <Figure>
        <Image src={heroImage} alt="Ilustrasi catatan keuangan" fluid rounded />
        <Figure.Caption>Contoh gambar dengan keterangan.</Figure.Caption>
      </Figure>

      <h2 className="h5 mt-3">List Group</h2>
      <ListGroup>
        <ListGroup.Item>Belanja bulanan — Pengeluaran</ListGroup.Item>
        <ListGroup.Item>Gaji — Pemasukan</ListGroup.Item>
        <ListGroup.Item>Bayar listrik — Pengeluaran</ListGroup.Item>
      </ListGroup>
    </main>
  )
}

export default TransactionManager
