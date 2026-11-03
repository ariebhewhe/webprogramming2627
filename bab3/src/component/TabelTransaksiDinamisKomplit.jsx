import { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Spinner, Alert, Badge, Container, Button } from 'react-bootstrap';

import FormEditTransaksi from './FormEditTransaksi';
import TombolHapusDenganModal from './TombolHapusDenganModal';

function TabelTransaksiDinamisKomplit() {
    const [transaksi, setTransaksi] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modeEdit, setModeEdit] = useState(null);

    useEffect(() => {
        const ambilDataServer = async () => {
            try {
                setIsLoading(true);
                setError(null);
                // Request HTTP GET ke REST API Server
                const response = await
                axios.get('http://localhost:3000/transaksi');
                setTransaksi(response.data);
            } catch {
                // Menangkap pesan kesalahan jika request gagal
                setError('Gagal memuat data dari server. Pastikan API backendberjalan.');
            } finally {
                // Mematikan indikator loading baik sukses maupun gagal
                setIsLoading(false);
            }
        };
        ambilDataServer();
    }, []);

    // 1. Conditional Rendering: Tampilan saat Data Sedang Dimuat (Loading)
    if (isLoading) {
        return (
            <Container className="text-center my-5">
            <Spinner animation="border" variant="primary" role="status"/>
            <p className="mt-2 text-muted">Sedang memuat data transaksi...</p>
            </Container>
        );
    }

    // 2. Conditional Rendering: Tampilan saat Terjadi Error Jaringan
    if (error) {
        return (
            <Container className="my-4">
                <Alert variant="danger">
                    <Alert.Heading>Kesalahan Sistem</Alert.Heading>
                    <p>{error}</p>
                </Alert>
            </Container>
        );
    }

    // Setelah onUpdateSuccess dipanggil dari form dalam modal FormEditTransaksi
    // tampilan tabel harus diperbarui sesuai state hook transaksi yang baru
    const handleDataUpdated = (dataTerbaru) => {
        setTransaksi(prevTransaksi =>
            prevTransaksi.map((item) =>
                item.id === dataTerbaru.id ? dataTerbaru : item
            )
        );
        setModeEdit(false); // Tutup form edit
    };

    const handleHapusSukses = (idDihapus) => {
        // Menyaring state dan membuang item yang memiliki ID yang sama dengan idDihapus
        setTransaksi(prevTransaksi => prevTransaksi.filter(item => item.id
        !== idDihapus));
    };

    return (
        <Container className="my-4">
            <h3 className="mb-3">Riwayat Transaksi Keuangan</h3>
            {/* Form Edit Transaksi ditampilkan sesuai dengan hook modeEdit */
                modeEdit && (
                    <div className="mb-4">
                        <FormEditTransaksi
                            dataAwal={modeEdit}
                            onUpdateSuccess={handleDataUpdated}
                            onCancel={() => setModeEdit(null)}
                        />
                    </div>
                )
            }
            {transaksi.length === 0 ? (
                <Alert variant="info">Belum ada data transaksi yang
                tersimpan.</Alert>
            ) : (
                <Table striped bordered hover responsive className="shadow-sm">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Keterangan</th>
                            <th>Kategori</th>
                            <th>Nominal</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaksi.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.keterangan}</td>
                                <td>
                                    <Badge bg={item.kategori === 'Pemasukan' ? 'success' : 'danger'}>
                                        {item.kategori}
                                    </Badge>
                                </td>
                                <td className="fw-bold">
                                    {(item.nominal).toLocaleString('id-ID')}
                                </td>
                                <td>
                                    <Button onClick={() => setModeEdit(item)}>
                                        Edit    
                                    </Button>
                                    <TombolHapusDenganModal
                                        idTransaksi={item.id}
                                        keterangan={item.keterangan}
                                        onDeleteSuccess={handleHapusSukses}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Container>
    );
}
export default TabelTransaksiDinamisKomplit;