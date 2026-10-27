// import '../styles/transaksi.css';

// export default function Badge({ tipe, children }) {
//     const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';

//     if (children === undefined) {
//         const transaksi = [
//             { id: 1, tipe: 'Pemasukan', nominal: '+ Rp 50.000' },
//             { id: 2, tipe: 'Pengeluaran', nominal: '- Rp 20.000' },
//             { id: 3, tipe: 'Pemasukan', nominal: '+ Rp 150.000' },
//             { id: 4, tipe: 'Pengeluaran', nominal: '- Rp 35.000' },
//         ];

//         return (
//             <div style={{ width: '100%', marginTop: '20px' }}>
//                 {transaksi.map((item) => (
//                     <div
//                         key={item.id}
//                         style={{
//                             width: '100%',
//                             minHeight: '29px',
//                             display: 'flex',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             fontSize: '18px',
//                             lineHeight: 1.45,
//                             backgroundColor: item.tipe === 'Pemasukan' ? '#d4edda' : '#f8d7da',
//                         }}
//                     >
//                         <Badge tipe={item.tipe}>{item.nominal}</Badge>
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     return <span className={className}>{children}</span>;
// }

// // Cara pakai: <Badge tipe="Pemasukan">+ Rp 50.000</Badge> misal pada app.jsx



import '../styles/transaksi.css';

export default function Badge({ tipe, children }) {
    const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';
    return <div className={className}>{children}</div>;
}