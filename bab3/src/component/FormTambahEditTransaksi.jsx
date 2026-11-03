// src/component/FormEditTransaksi.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Card, Spinner } from 'react-bootstrap';

// Menerima props 'dataAwal' dari komponen induk (tabel) yang berisi item terpilih
function FormEditTransaksi({ dataAwal, onUpdateSuccess, onCancel }) {
  // 1. Populasi form dengan data lama sebagai nilai awal state
  const [keterangan, setKeterangan] = useState(dataAwal.keterangan || '');
  const [kategori, setKategori] = useState(dataAwal.kategori || 'Pengeluaran');
  const [nominal, setNominal] = useState(dataAwal.nominal || '');
  const [isUpdating, setIsUpdating] = useState(false);

  // Jika props dataAwal berubah (user klik edit item lain), reset form state
  useEffect(() => {
    setKeterangan(dataAwal.keterangan);
    setKategori(dataAwal.kategori);
    setNominal(dataAwal.nominal);
  }, [dataAwal]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

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
      onUpdateSuccess(response.data);
    } catch (error) {
      console.error('Gagal memperbarui data:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <Card className="p-4 shadow-sm border-warning">
      <Card.Title className="mb-3 text-warning">Edit Transaksi</Card.Title>
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
          <Button variant="secondary" type="button" onClick={onCancel}>
            Batal
          </Button>
        </div>
      </Form>
    </Card>
  );
}

export default FormEditTransaksi;