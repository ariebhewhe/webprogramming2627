// import '../styles/transaksi.css';

// export default function Badge({ tipe, children }) {
//     const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';
//    return <span className={className}>{children}</span>;
// }

// // Cara pakai: <Badge tipe="Pemasukan">+ Rp 50.000</Badge> misal pada app.jsx

import '../styles/transaksi.css';

// Kita beri nilai bawaan (default) jika tipe dan children tidak diisi oleh Route
export default function Badge({ tipe = 'Pengeluaran', children = 'Contoh Rp 0' }) {
    const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <span className={className}>{children}</span>
            <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
               (Ini adalah tampilan preview komponen Badge kustom kamu)
            </p>
        </div>
    );
}
