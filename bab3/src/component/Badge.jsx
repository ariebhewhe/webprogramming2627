import '../styles/transaksi.css';

export default function Badge({ tipe, bg, children, className = '', ...props }) {
  const normalized = (bg ?? tipe ?? 'pengeluaran').toLowerCase();
  const variantClass =
    normalized === 'pemasukan' || normalized === 'success' || normalized === 'aktif'
      ? 'badge-pemasukan'
      : 'badge-pengeluaran';

  return (
    <span className={[variantClass, className].filter(Boolean).join(' ')} {...props}>
      {children ?? 'Aktif'}
    </span>
  );
}

// Cara pakai:
// <Badge tipe="Pemasukan">+ Rp 50.000</Badge>
// <Badge bg="success">Aktif</Badge>