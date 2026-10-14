export default function Array (){
    const daftarBuah = ['Apel', 'Mangga', 'Pisang'];
    return (
        <ul>
            {daftarBuah.map((buah) => (
                <li key={index}>{buah}</li>
            ))}
        </ul>
    )
};