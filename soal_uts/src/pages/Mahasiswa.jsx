// TODO 13
// Buat component  function dengan nama Mahasiswa
/*
 <div>
      <h2 style={{ marginTop: 0 }}>Kegiatan Mahasiswa</h2>
      <p>
        Kehidupan kampus di Prodi Informatika sangat dinamis. Selain kegiatan akademik, 
        mahasiswa juga aktif dalam Himpunan Mahasiswa (HIMA), 
        kompetisi IT tingkat nasional maupun internasional, 
        serta berbagai lokakarya teknologi.
      </p>
      <p>
        Kami sangat mendukung pengembangan *soft skill* dan kepemimpinan melalui organisasi kemahasiswaan dan Unit Kegiatan Mahasiswa (UKM).
      </p>
    </div>
*/

// lakukan commit  "selesai TODO 13" dan push 
function Mahasiswa() {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Kegiatan Mahasiswa</h2>
      <p>
        Kehidupan kampus di Prodi Informatika sangat dinamis. Selain kegiatan akademik,
        mahasiswa juga aktif dalam Himpunan Mahasiswa (HIMA), kompetisi IT tingkat
        nasional maupun internasional, serta berbagai lokakarya teknologi.
      </p>
      <p>
        Kami sangat mendukung pengembangan <em>soft skill</em> dan kepemimpinan melalui
        organisasi kemahasiswaan dan Unit Kegiatan Mahasiswa (UKM).
      </p>
    </div>
  );
}
export default Mahasiswa;