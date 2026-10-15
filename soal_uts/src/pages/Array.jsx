//TODO 18
export default function Array () {
    const daftarBuah = ['Apel', 'Mangga', 'Pisang'];
    return (
       <dev>
        <h1>Daftar Buah</h1>

        <ul>
            {daftarBuah.map((buah, index) => ( <li key={index}>{buah}</li> ))}
        </ul>

       </dev>
      
    );
}

//Validasi TODO 18 
// oke