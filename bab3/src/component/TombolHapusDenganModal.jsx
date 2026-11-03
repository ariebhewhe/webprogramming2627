// src/component/TombolHapusDenganModal.jsx
import { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Spinner } from 'react-bootstrap';

// Komponen ini menerima props dari baris tabel di komponen induk
function TombolHapusDenganModal({ idTransaksi, keterangan, onDeleteSuccess }) {
  // State untuk mengontrol visibilitas Modal
  const [tampilModal, setTampilModal] = useState(false);
  // State untuk indikator proses loading saat request DELETE berjalan
  const [isDeleting, setIsDeleting] = useState(false);

  const bukaModal = () => setTampilModal(true);
  const tutupModal = () => setTampilModal(false);

  // Fungsi utama untuk mengeksekusi penghapusan ke server
  const eksekusiHapus = async () => {
    setIsDeleting(true);
    try {
      // 1. Kirim HTTP DELETE request ke server API
      await axios.delete(`http://localhost:3000/transaksi/${idTransaksi}`);

      // 2. Jika sukses, panggil fungsi dari komponen induk untuk update state tabel
      onDeleteSuccess(idTransaksi);
    } catch (error) {
      console.error('Gagal menghapus data dari server:', error);
      alert('Gagal menghapus data. Periksa koneksi API Anda.');
    } finally {
      setIsDeleting(false);
      tutupModal(); // Pastikan modal tertutup baik saat sukses maupun gagal
    }
  };

  return (
    <>
      {/* Tombol pemicu yang ada di dalam tabel */}
      <Button variant="danger" size="sm" onClick={bukaModal}>
        Hapus
      </Button>

      {/* Komponen Modal Konfirmasi */}
      <Modal show={tampilModal} onHide={tutupModal} backdrop="static" centered>
        <Modal.Header closeButton={!isDeleting}>
          <Modal.Title>Konfirmasi Penghapusan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah Anda yakin ingin menghapus data transaksi
          <strong>"{keterangan}"</strong>?
          Tindakan ini permanen dan tidak dapat dibatalkan.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={tutupModal} disabled={isDeleting}>
            Batal
          </Button>
          <Button variant="danger" onClick={eksekusiHapus} disabled={isDeleting}>
            {isDeleting ? (
              <>
                <Spinner as="span" animation="border" size="sm" className="me-2" />
                Menghapus...
              </>
            ) : (
              'Ya, Hapus Data'
            )}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TombolHapusDenganModal;