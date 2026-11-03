{/* import { useState, useEffect } from 'react';
import React from 'react'; */}
export default function KartuRingkasan() {
  //const [transaksi, setTransaksi] = useState([])

  {/* const ambilData = () => {
    fetch('http://localhost:3000/transaksi')
      .then ((response) => response.json())
      .then((data) => {
        console.log('Data diterima:', data);
        setTransaksi(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    ambilData();
  }, []); */}

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

  return (
    <div style={cardStyle}>
      <p style={textStyle}>Total Saldo: Rp 2.500.000</p>
      {/*<table>
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
      </table>*/}
    </div>
  );
}