// Todo 18

export default function DaftarBuah() {
    const buahBuahan = ['Apel', 'Jeruk', 'Mangga', 'Pisang'];
        return (
            <ul>
                {buahBuahan.map((buah, index) => <li key={index}>{buah}</li>)}
            </ul>
        );
}