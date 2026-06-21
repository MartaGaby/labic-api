import Navbar from '../../layouts/Navbar'
import Footer from '../../layouts/Footer'
import './PublicLayout.css'

export default function PublicLayout({ children }) {
  return (
    <div className="public-layout">
      <Navbar />
      <main className="public-layout__main">
        {children}
      </main>
      <Footer />
    </div>
  )
}