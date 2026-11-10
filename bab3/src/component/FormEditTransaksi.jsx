// // src/component/FormEditTransaksi.jsx
import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, Spinner, Alert } from 'react-bootstrap';

// Menerima props 'dataAwal' dari komponen induk (tabel) yang berisi item terpilih
export default function FormEditTransaksi({ dataAwal = null, onUpdateSuccess, onCancel }) {
  // 1. Populasi form dengan data lama sebagai nilai awal state
  const hasId = dataAwal?.id !== undefined && dataAwal?.id !== null && String(dataAwal.id).trim() !== '';
  const [keterangan, setKeterangan] = useState(dataAwal?.keterangan ?? '');
  const [kategori, setKategori] = useState(dataAwal?.kategori ?? 'Pengeluaran');
  const [nominal, setNominal] = useState(String(dataAwal?.nominal ?? ''));
  const [isUpdating, setIsUpdating] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsUpdating(true);
    setErrorMsg('');
    const dataDiperbarui = {
      keterangan,
      kategori,
      nominal: Number(nominal)
    };

    try {
      // 2. Eksekusi HTTP PUT dengan menyertakan ID pada URL Endpoint
      const response = await axios.put(
        `http://localhost:3000/transaksi/${dataAwal.id}`,
        dataDiperbarui
      );
      // 3. Informasikan komponen induk bahwa update berhasil
      onUpdateSuccess?.(response.data);
    } catch (error) {
      console.error('Gagal memperbarui data:', error);
      setErrorMsg('Gagal menyimpan perubahan. Periksa server API.');
    } finally {
      setIsUpdating(false);
    }
  };

  const handlePatch = async () => {
    setIsUpdating(true);
    setErrorMsg('');
    
    try {
      const dataForm = {
          keterangan,
          kategori,
          nominal: Number(nominal),
      };

      const perubahan = Object.fromEntries(
          Object.entries(dataForm).filter(([field, value]) => {
          const nilaiAwal = field === 'nominal'
              ? Number(dataAwal.nominal)
              : dataAwal[field];
          return value !== nilaiAwal;
          })
      );

      if (Object.keys(perubahan).length === 0) {
          setIsUpdating(false);
          return;
      }
      
      const response = await axios.patch(
        `http://localhost:3000/transaksi/${dataAwal.id}`,
        perubahan
      );
      onUpdateSuccess?.(response.data);
    } catch (error) {
      console.error('Gagal memperbarui sebagian transaksi:', error);
      setErrorMsg('Gagal menyimpan perubahan. Periksa server API.');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card className="p-4 shadow-sm border-warning">
      <Card.Title className="mb-3 text-warning">Edit Transaksi</Card.Title>
      {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
      <Form onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Label>Keterangan</Form.Label>
          <Form.Control
            type="text"
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
            value={nominal}
            onChange={(e) => setNominal(e.target.value)}
            required
          />
        </Form.Group>
        <div className="d-flex gap-2">
          <Button variant="warning" type="submit" disabled={isUpdating}>
            {isUpdating ? <Spinner size="sm" /> : 'Simpan Perubahan'}
          </Button>
          <Button
            variant="outline-warning"
            type="button"
            onClick={handlePatch}
            disabled={isUpdating}
            >
            Simpan perubahan (PATCH)
          </Button>
          <Button variant="secondary" type="button" onClick={onCancel}>
            Batal
          </Button>
        </div>
      </Form>
    </Card>
  );
};
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Alert, Button, Card, Container, Form, Spinner } from 'react-bootstrap';

// const API_URL = 'http://localhost:3000/transaksi';

// function normalisasiTransaksi(item) {
//   // Data server saat ini dapat berupa teks seperti "Rp. 759.000".
//   const nominal = Number(String(item.nominal ?? '').replace(/[^\d-]/g, ''));

//   return {
//     ...item,
//     kategori:
//       String(item.kategori ?? '').toLowerCase() === 'pemasukan'
//         ? 'Pemasukan'
//         : 'Pengeluaran',
//     nominal: Number.isFinite(nominal) ? nominal : 0,
//   };
// }

// export default function FormEditTransaksi() {
//   const [transaksi, setTransaksi] = useState([]);
//   const [selectedId, setSelectedId] = useState('');
//   const [keterangan, setKeterangan] = useState('');
//   const [kategori, setKategori] = useState('Pengeluaran');
//   const [nominal, setNominal] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [errorMsg, setErrorMsg] = useState('');
//   const [successMsg, setSuccessMsg] = useState('');

//   useEffect(() => {
//     const ambilTransaksi = async () => {
//       try {
//         const response = await axios.get(API_URL);

//         if (!Array.isArray(response.data)) {
//           throw new Error('Data transaksi dari server bukan berupa daftar.');
//         }

//         setTransaksi(response.data.map(normalisasiTransaksi));
//       } catch (error) {
//         console.error('Gagal memuat transaksi:', error);
//         setErrorMsg('Gagal memuat data. Pastikan server API berjalan di port 3000.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     ambilTransaksi();
//   }, []);

//   const pilihTransaksi = (id) => {
//     setSelectedId(id);
//     setErrorMsg('');
//     setSuccessMsg('');

//     const item = transaksi.find((data) => String(data.id) === id);
//     if (!item) {
//       setKeterangan('');
//       setKategori('Pengeluaran');
//       setNominal('');
//       return;
//     }

//     setKeterangan(item.keterangan ?? '');
//     setKategori(item.kategori);
//     setNominal(String(item.nominal));
//   };

//   const handleUpdate = async (event) => {
//     event.preventDefault();
//     setErrorMsg('');
//     setSuccessMsg('');
//     setIsUpdating(true);

//     try {
//       const response = await axios.put(`${API_URL}/${selectedId}`, {
//         keterangan,
//         kategori,
//         nominal: Number(nominal),
//       });

//       const dataDiperbarui = normalisasiTransaksi(response.data);

//       setTransaksi((daftarSaatIni) =>
//         daftarSaatIni.map((item) =>
//           String(item.id) === String(dataDiperbarui.id)
//             ? dataDiperbarui
//             : item
//         )
//       );
//       setSuccessMsg('Transaksi berhasil diperbarui.');
//     } catch (error) {
//       console.error('Gagal memperbarui transaksi:', error);
//       setErrorMsg('Gagal menyimpan perubahan. Periksa server API lalu coba lagi.');
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   return (
//     <Container className="my-4">
//       <h3 className="mb-3">Edit Transaksi</h3>

//       {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
//       {successMsg && <Alert variant="success">{successMsg}</Alert>}

//       {isLoading ? (
//         <Spinner animation="border" role="status" />
//       ) : (
//         <>
//           <Form.Group className="mb-3">
//             <Form.Label>Pilih transaksi</Form.Label>
//             <Form.Select
//               value={selectedId}
//               onChange={(event) => pilihTransaksi(event.target.value)}
//             >
//               <option value="">-- Pilih transaksi --</option>
//               {transaksi.map((item) => (
//                 <option key={item.id} value={String(item.id)}>
//                   {item.keterangan} — Rp {item.nominal.toLocaleString('id-ID')}
//                 </option>
//               ))}
//             </Form.Select>
//           </Form.Group>

//           {transaksi.length === 0 && !errorMsg && (
//             <Alert variant="info">Belum ada transaksi untuk diedit.</Alert>
//           )}

//           {selectedId && (
//             <Card className="p-4 shadow-sm border-warning">
//               <Card.Title className="mb-3 text-warning">
//                 Edit Transaksi
//               </Card.Title>

//               <Form onSubmit={handleUpdate}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Keterangan</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={keterangan}
//                     onChange={(event) => setKeterangan(event.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Kategori</Form.Label>
//                   <Form.Select
//                     value={kategori}
//                     onChange={(event) => setKategori(event.target.value)}
//                   >
//                     <option value="Pengeluaran">Pengeluaran</option>
//                     <option value="Pemasukan">Pemasukan</option>
//                   </Form.Select>
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Label>Nominal (Rp)</Form.Label>
//                   <Form.Control
//                     type="number"
//                     min="0"
//                     value={nominal}
//                     onChange={(event) => setNominal(event.target.value)}
//                     required
//                   />
//                 </Form.Group>

//                 <div className="d-flex gap-2">
//                   <Button
//                     variant="warning"
//                     type="submit"
//                     disabled={isUpdating}
//                   >
//                     {isUpdating ? 'Menyimpan...' : 'Simpan Perubahan'}
//                   </Button>
//                   <Button
//                     variant="secondary"
//                     type="button"
//                     onClick={() => pilihTransaksi('')}
//                   >
//                     Batal
//                   </Button>
//                 </div>
//               </Form>
//             </Card>
//           )}
//         </>
//       )}
//     </Container>
//   );
// }