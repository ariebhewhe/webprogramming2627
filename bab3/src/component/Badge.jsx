import '../styles/transaksi.css';

export default function Badge({ tipe, children }) {
    if (tipe === undefined && children === undefined) {
        const contohTransaksi = [
            { tipe: 'Pemasukan', nominal: '+ Rp 100.000' },
            { tipe: 'Pengeluaran', nominal: '- Rp 200.000' },
            { tipe: 'Pemasukan', nominal: '+ Rp 150.000' },
            { tipe: 'Pengeluaran', nominal: '- Rp 350.000' },
        ];

        return (
            <div className="d-grid gap-0 p-0">
                {contohTransaksi.map((transaksi, index) => (
                    <Badge key={index} tipe={transaksi.tipe}>
                        {transaksi.nominal}
                    </Badge>
                ))}
            </div>
        );
    }

    const className = tipe === 'Pemasukan' ? 'badge-pemasukan' : 'badge-pengeluaran';
    return <span className={className}>{children}</span>;
}
//aa