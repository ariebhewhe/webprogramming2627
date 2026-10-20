export default function KartuRingkasan() {
    const cardStyle = {
        padding: '20px',
        border: '1px solid #dee26e',
        boderRadius: '6px',
        maginBottom: '15px'
    };
    const textStyle = {
        fontWeight: 'bold',
        colot: '#0d6efd'
    };
    return (
        <div style={cardStyle}>
            <p style={textStyle}>Total Saldo: Rp. 2.500.000</p>
        </div>
    )
}