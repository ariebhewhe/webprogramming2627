import React from 'react';

export default function Array() {
  const daftarBuah = ['Apel', 'Mangga', 'Pisang'];

  return (
    <div>
      <h2>Daftar Buah</h2>
      <ul>
        {daftarBuah.map((buah, index) => (
          <li key={index}>{buah}</li>
        ))}
      </ul>
    </div>
  );
}