import React from 'react';

export default function Berita() {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Berita & Pengumuman</h2>
      <p>
        Halaman ini menyajikan kabar terbaru seputar kegiatan akademik, seminar, serta prestasi mahasiswa dan dosen Program Studi Informatika.
      </p>
      <div className="news-list">
        <article style={{ marginBottom: '15px' }}>
          <h3>Workshop Pengembangan Web Modern</h3>
          <p>
            Prodi Informatika menyelenggarakan pelatihan intensif pengembangan aplikasi web berbasis ReactJS untuk mempersiapkan mahasiswa menghadapi dunia industri.
          </p>
        </article>
      </div>
    </div>
  );
}