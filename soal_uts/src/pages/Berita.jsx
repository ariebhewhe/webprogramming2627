import { Link } from 'react-router-dom';

export default function Berita() {
	return (
		<div>
			<h2 style={{ marginTop: 0 }}>Halaman Berita</h2>
			<p>Informasi dan berita terbaru Jurusan Informatika.</p>
            <br />
			<Link to="/notfound">Read more</Link>
		</div>
	);
}
