// Todo 18
export default function daftarBuah() {
    const daftarBuah = ['Apel', 'Jeruk', 'Mangga', 'Pisang'];
        return (
            <ul>
                {daftarBuah.map((buah, index) => <li key={index}>{buah}</li>)}
            </ul>
        );
}