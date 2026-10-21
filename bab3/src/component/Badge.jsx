import '../styles/transaksi.css';

export default function Badge({ tipe, children }) {
    tipe = tipe || 'Pemasukan';
    children = children || '+ Rp 500.000';
    const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';
    return <span className={className}>{children}</span>;
}