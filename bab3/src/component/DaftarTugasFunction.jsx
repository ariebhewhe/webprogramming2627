import { useState, useEffect } from "react";

function DaftarTugasFunction(){
    const [tugas, setTugas] = useState([]);
    const [isLoading, setLoading] = useState([true]);

    // buat data fatching
    useEffect(() => {
        const ambilData = async () => {
            try {
                const response = await
                fetch('https://jsonplaceholder.typicode.com/todos');
                setTugas(data);
            } catch (error) {
                console.error("Gagal memuat data dari API", error);
            } finally {
                setIsLoading(false); //matiin status loading 
            }
        };
        // mengeksekusi fungsi
        ambilData();
    }, []);
    if (isLoading) return <p>Memuat data tugas dari server...</p>;
    return (
        <ul>
            {tugas.slice(0, 5).map(item =>
                <li key={item.id}>{item.title}</li>
            )}
        </ul>
    );
}
export default DaftarTugasFunction;