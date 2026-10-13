// TODO 12
// 1. Buat component function dengan nama Beranda
// 2. Struktur wajib di dalam return (bungkus dengan tag <div>):
//    - Buat tag <h2> berisi teks "Halaman Beranda". Berikan inline style marginTop dengan nilai 0.
//    - Buat paragraf pertama (<p>). Cetak tebal (strong) pada kata "Jurusan Informatika" dan "Ilmu Komputer". Cetak miring (em) pada kata "Era Digital Sekarang".
//    - Buat paragraf kedua (<p>) berisi teks: "Teknik Informatika Merupakan Salah Satu Jurusan Pendidikan Tingkat Perguruan Tinggi Yang Mempelajari Serta Menerapkan Prinsip-Prinsip Ilmu Komputer."
// 3. Lakukan commit dan push dengan pesan "Selesai TODO 12"

export default function Beranda() {
    return (
        <div>
            <h2 style={{ marginTop: 0 }}>Halaman Beranda</h2>
            <p>
                <strong>Jurusan Informatika</strong> Merupakan Salah Satu Jurusnan Yang Paling Dicari Oleh Calon Mahasiswa Di Indonesia Karena Di <em>Era Digital Sekarang</em>, <strong>Ilmu Komputer</strong> Menjadi Salah Satu Ilmu Esensial Yang Harus Dipelajari Semua Orang.
            </p>
            <p>
                Teknik Informatika Merupakan Salah Satu Jurusan Pendidikan Tingkat Perguruan Tinggi Yang Mempelajari Serta Menerapkan Prinsip-Prinsip Ilmu Komputer.
            </p>
        </div>
    );
}
export default Beranda;