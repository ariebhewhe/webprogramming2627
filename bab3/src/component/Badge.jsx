import '../styles/transaksi.css';
import React from 'react';

export default function Badge({ tipe, children }) {
  const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';
  return <span className={className}>{children}</span>;
}