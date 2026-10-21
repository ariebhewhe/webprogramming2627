import { Container } from 'react-bootstrap'

function HeaderBanner() {
  return (
    <div className="hero-banner mb-4">
      <Container fluid className="py-3">
        <span className="eyebrow">KEUANGAN PRIBADI</span>
        <h1 className="display-5 fw-bold">Catatan Keuangan</h1>
        <p className="col-md-8 fs-5 mb-0">
          Pantau arus kas harian, atur pengeluaran, dan lihat perkembangan saldo dalam satu tempat.
        </p>
      </Container>
    </div>
  )
}

export default HeaderBanner