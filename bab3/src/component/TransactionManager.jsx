{/*
import {useState} from 'react'; 
  */}
import { useState, useEffect } from 'react';
import {Alert, Badge, Container, Spinner, Form, InputGroup, Modal, Button, Table, ProgressBar}from 'react-bootstrap';
import axios from 'axios';
import FormTambahTransaksiPost from './FormTambahTransaksiPost';
import FormEditTransaksi from './FormEditTransaksi';
import TombolHapusDenganModal from './TombolHapusDenganModal';

const API_URL = 'http://localhost:3000/transaksi';
// const s = useState(false)
// const t = useState([])

function normalisasiTransaksi(item) {
  const teksNominal = String(item.nominal ?? '').replace(/[^\d-]/g, '');
  const nominal = typeof item.nominal === 'number'
    ? item.nominal
    : Number(teksNominal);

  return {
    ...item,
    kategori: String(item.kategori ?? '').toLowerCase() === 'pemasukan'
      ? 'Pemasukan'
      : 'Pengeluaran',
    nominal: Number.isFinite(nominal) ? nominal : 0,
  };
}

export default function TransactionManager() {
  const [show, setShow] = useState(false);
  const [transaksi, setTransaksi] = useState([])
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [dataEdit, setDataEdit] = useState(null);
  const [showTambah, setShowTambah] = useState(false);
  const [keterangan, setKeterangan] = useState('');
  const [kategori, setKategori] = useState('Pengeluaran');
  const [nominal, setNominal] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  {/*
  const ambilData = () => {
    fetch('http://localhost:3000/transaksi')
    .then ((response) => response.json())
    .then((data) => {
      console.log('Data diterima:', data)
      setTransaksi(data)
    })
    .catch((error) => {
      console.error('Terjadi Kesalahan saat mengambil data:', error);
    });
  };

  */}
  {/*
  const ambilDataAsync = async () =>{
    try {
      const response = await fetch('http://localhost:3000/transaksi');
      if (!response.ok) {
        throw new Error ('Gagal mengambil data dari server');
      }

      const data = await response.json()
      console.log ('Data diterima:', data);
      setTransaksi(data);
    } catch (error) {
      console.error('Error:', error.message);
    };
  };
  */}
  {/*
  useEffect(() => {
    
      ambilData();
    
      ambilDataAsync();
    }, []
  )
  */}
  //Get Axios
  useEffect(() => {
    const ambilTransaksi = async () => {
      try {
        const response = await axios.get(API_URL);
        if (!Array.isArray(response.data)) {
          throw new Error('Data transaksi dari server bukan berupa daftar.');
        }
        setTransaksi(response.data.map(normalisasiTransaksi));
      } catch (error) {
        console.error('Gagal mengambil transaksi:', error);
        setErrorMsg('Gagal mengambil transaksi. Pastikan API berjalan di port 3000.');
      } finally {
        setIsLoading(false);
      }
    };

    ambilTransaksi();
  }, []);

  const setelahTambahBerhasil = (dataBaru) => {
    setTransaksi((daftar) => [
      ...daftar,
      normalisasiTransaksi(dataBaru),
    ]);
    setShowTambah(false);
    setSuccessMsg('Transaksi berhasil ditambahkan.');
  };

  const setelahEditBerhasil = (dataDiperbarui) => {
    const dataNormal = normalisasiTransaksi(dataDiperbarui);
    setTransaksi((daftar) =>
      daftar.map((item) =>
        String(item.id) === String(dataNormal.id) ? dataNormal : item
      )
    );
    setDataEdit(null);
    setSuccessMsg('Transaksi berhasil diperbarui.');
  };

  // Perbarui tabel setelah DELETE berhasil
  const setelahHapusBerhasil = (id) => {
    setTransaksi((daftar) =>
      daftar.filter((item) => String(item.id) !== String(id))
    );
    if (String(dataEdit?.id) === String(id)) {
      setDataEdit(null);
    }
    setSuccessMsg('Transaksi berhasil dihapus.');
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Penggunaan Anggaran</h3>
        <Button variant="success" onClick={() => setShowTambah(true)}>
          + Tambah Transaksi
        </Button>
      </div>

      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      {successMsg && <Alert variant="success">{successMsg}</Alert>}

      <ProgressBar now={75} label="75%" variant="warning" className="mb-4" />

      <Table striped bordered hover responsive>
        {/* <AppNavigation /> */}
        <thead>
          <tr>
            <th>#</th>
            <th>Keterangan</th>
            <th>Kategori</th>
            <th>Nominal</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {/*
          {
            transaksi.map(
              (item, index) => (
                <tr key={item.id || index}>
                  <td>{index + 1}</td>
                  <td>{item.keterangan}</td>
                  <td>{item.kategori}</td>
                  <td>{item.nominal}</td>
                </tr>
              )
            )
          }
          <tr>
            <td>1</td>
            <td>Belanja Bulanan</td>
            <td>Pengeluaran</td>
            <td>Rp 750.000</td>
          </tr> */}
          {
            transaksi.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.keterangan}</td>
                <td>
                  <Badge bg={item.kategori === 'Pemasukan' ? 'success' : 'danger'}>
                    {item.kategori}
                  </Badge>
                </td>
                <td>Rp {item.nominal.toLocaleString('id-ID')}</td>
                <td className="text-center">
                  <div className="d-flex justify-content-center gap-2">
                    <Button
                      variant="warning"
                      size="sm"
                      onClick={() => setDataEdit(item)}
                    >
                      Edit
                    </Button>
                    <TombolHapusDenganModal
                      idTransaksi={item.id}
                      keterangan={item.keterangan}
                      onDeleteSuccess={setelahHapusBerhasil}
                    />
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
      
      <Modal show={showTambah} onHide={() => setShowTambah(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Catat Transaksi Baru</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormTambahTransaksiPost onDataAdded={setelahTambahBerhasil} />
        </Modal.Body>
      </Modal>

      <Modal show={Boolean(dataEdit)} onHide={() => setDataEdit(null)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Transaksi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {dataEdit && (
            <FormEditTransaksi
              key={dataEdit.id}
              dataAwal={dataEdit}
              onUpdateSuccess={setelahEditBerhasil}
              onCancel={() => setDataEdit(null)}
            />
          )}
        </Modal.Body>
      </Modal>

      {/*
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
      */}
    </div>
  );
}