// TODO 11
// 1. Buat component function dengan nama SideBar
export default function SideBar (){
    return (
        <aside className="sidebar-area">
            <h3>Berita Terbaru</h3>
            <div className="news-item">
                <strong>New Website Launched</strong>
                <br />
                <em>January 1st, 2010</em>
            </div>
            <div className="news-Item">
                <em>2010 sees the redesign of our website. Take a look around and let us know what you think.</em>
                <br />
                <a href="/berita">Read more</a>
            </div>
            <br />
            <h3>Pencarian</h3>
            <input style={{padding:'5px', width:'100%'}} type="text" placeholder="Enter keywords..." />
        </aside>
    )
}
// 2. Struktur wajib di dalam return:
//    - Gunakan elemen <aside className="sidebar-area"> sebagai pembungkus utama.
//    - Tambahkan <h3>Berita Terbaru</h3>.
//    - Buat div dengan className="news-item". Di dalamnya beri teks <strong>New Website Launched</strong>, tag <br />, dan <em>January 1st, 2010</em>.
//    - Buat div className="news-item" kedua. Isikan teks: "2010 sees the redesign of our website. Take a look around and let us know what you think.", lalu beri <br /> dan link <a href="#">Read more</a>.
//    - Beri jarak dengan tag <br />.
//    - Tambahkan <h3>Pencarian</h3>.
//    - Buat elemen <input type="text" placeholder="Enter keywords..." />. Berikan inline style dengan nilai padding "5px" dan width "100%".
// 3. Lakukan commit dan push dengan pesan: "Selesai TODO 11"