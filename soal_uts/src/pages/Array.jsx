export default function Array(){
    const daftarBuah = ['Apel','Mangga','Pisang'];

    return (
        <div>
            <h1>Daftar Buah</h1>
            <ul>
                {daftarBuah.map((buah,index) => (
                    <li key={index}>{buah}</li>
                ))}
            </ul>
        </div>
    );
}