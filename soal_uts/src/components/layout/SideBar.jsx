import { Link } from 'react-router-dom';

// TODO 11
function SideBar() {
  return (
    <aside className="sidebar-area">
      <h3>Berita Terbaru</h3>

      <div className="news-item">
        <strong>New Website Launched</strong>
        <br />
        <em>January 1st, 2010</em>
      </div>

      <div className="news-item">
        2010 sees the redesign of our website. Take a look around and let us know
        what you think.
        <br />
        <Link to="/berita">Read more</Link>
      </div>

      <br />
      <h3>Pencarian</h3>
      <input
        type="text"
        placeholder="Enter keywords..."
        style={{ padding: "5px", width: "100%" }}
      />

    </aside>
  );
}

export default SideBar;
