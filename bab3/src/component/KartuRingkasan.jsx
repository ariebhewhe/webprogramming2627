import { useState, useEffect } from 'react';

export default function KartuRingkasan() {
  const cardStyle = {
    padding: '20px',
    border: '1px solid #dee2e6',
    borderRadius: '6px',
    marginBottom: '15px'
  };
  const textStyle = {
    fontWeight: 'bold',
    color: '#0d6efd'
  };

  const [transaksi, setTransaksi] = useState([]);

  const ambilData = () => {
    fetch('http://localhost:3000/transaksi')
      .then((response) => response.json())
      .then((data) => {
        console.log('Data diterima:', data);
        setTransaksi(data);
      })
      .catch((error) => {
        console.log('Terjadi error:', error);
      });
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <div style={cardStyle}>
      <p style={textStyle}>Total Saldo: Rp 2.500.000</p>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Keterangan</th>
            <th>Kategori</th>
            <th>Nominal</th>
          </tr>
        </thead>
        <tbody>
          {transaksi.map((item, index) => (
            <tr key={item.id || index}>
              <td>{index + 1}</td>
              <td>{item.keterangan}</td>
              <td>{item.kategori}</td>
              <td>{item.nominal}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}