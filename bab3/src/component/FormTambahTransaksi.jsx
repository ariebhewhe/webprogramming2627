// import { useState } from 'react';
// import { Button, Alert, Spinner, Form } from 'react-bootstrap';

// function FormTambahTransaksi() {
//   const [nominal, setNominal] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [sukses, setSukses] = useState(false);

//   // Event Handler Asinkron untuk Form Submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSukses(false);

//     try {
//       // Simulasi pengiriman HTTP POST Request ke Server/API
//       const response = await fetch('https://api.example.com/transaksi', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ nominal: Number(nominal) }),
//       });

//       if (!response.ok) {
//         throw new Error('Gagal menyimpan data transaksi ke server.');
//       }

//       setSukses(true);
//       setNominal(''); // Reset form
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false); // Matikan status loading baik sukses maupun gagal
//     }
//   };

//   return (
//     <Form onSubmit={handleSubmit} className="p-3 border rounded">
//       {error && <Alert variant="danger">{error}</Alert>}
//       {sukses && <Alert variant="success">Transaksi berhasil disimpan!</Alert>}

//       <Form.Group className="mb-3">
//         <Form.Label>Nominal Transaksi (Rp)</Form.Label>
//         <Form.Control
//           type="number"
//           value={nominal}
//           onChange={(e) => setNominal(e.target.value)}
//           placeholder="Masukkan nominal"
//           required
//         />
//       </Form.Group>

//       {/* Button interaktif merespon status Loading */}
//       <Button variant="primary" type="submit" disabled={loading}>
//         {loading ? (
//           <>
//             <Spinner as="span" animation="border" size="sm" className="me-2" />
//             Menyimpan...
//           </>
//         ) : (
//           'Simpan Transaksi'
//         )}
//       </Button>
//     </Form>
//   );
// }

// export default FormTambahTransaksi;
// src/component/FormTambahTransaksi.jsx
import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export default function FormTambahTransaksi() {
  const [keterangan, setKeterangan] = useState('');
  const [kategori, setKategori] = useState('Pengeluaran');
  const [nominal, setNominal] = useState('');

  return (
    <Card className="p-4 shadow-sm mb-4">
      <Card.Title className="mb-3">Tambah Transaksi Baru</Card.Title>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Keterangan Transaksi</Form.Label>
          <Form.Control
            type="text"
            placeholder="Misal: Bensin, Gaji, Belanja"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Kategori</Form.Label>
          <Form.Select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="Pengeluaran">Pengeluaran</option>
            <option value="Pemasukan">Pemasukan</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nominal (Rp)</Form.Label>
          <Form.Control
            type="number"
            placeholder="0"
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Simpan Data
        </Button>
      </Form>
    </Card>
  );
};