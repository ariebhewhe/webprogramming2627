export default function Array (){
    const daftarBuah = ['Apel', 'Mangga', 'Pisang'];
    return (
        <ul>
            {daftarBuah.map((buah) => (
                <li>{buah}</li>
            ))}
        </ul>
    )
};