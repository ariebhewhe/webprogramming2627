import '../styles/transaksi.css';

export default function Badge({ tipe, children }) {
    const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';
    return <div className={className}>{children}</div>;
}

// Cara pakai: <Badge tipe="Pemasukan">+ Rp 50.000</Badge> misal pada app.jsx