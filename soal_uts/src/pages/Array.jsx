// TODO 18
export default function Array (){
    const daftarBuah = ['Apel', 'Mangga', 'Pisang']
    return(
        <ul>
            {daftarBuah.map((buah,index)=>{
                return(
                    <li key={index}>
                        {buah}
                    </li>
                )
            })}
        </ul>
    )
}