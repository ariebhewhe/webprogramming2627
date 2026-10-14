// TODO 18
export default function DaftarBuah() {

const daftarBuah = ['Apel','Mangga','Pisang'];

    return (
        <ul>
            {daftarBuah.map((buah, index) => (
                <li key={index}>{buah}</li>
            ))}
        </ul>
    );
}