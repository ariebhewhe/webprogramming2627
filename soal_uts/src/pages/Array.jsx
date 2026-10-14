export default function Array (){
    const daftarBuah = ['Apel', 'Mangga', 'Pisang'];
    return(
      <ul>
            {daftarbuah.map((buah, index) => (<li key={index}>{buah}</li>))}
        </ul>
    );
}
//izin commit & push