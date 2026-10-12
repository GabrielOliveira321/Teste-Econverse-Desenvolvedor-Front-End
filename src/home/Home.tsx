import Footer from '../components/footer/Footer.tsx'
import Heder from '../components/hender/Heder'
import MainContent from '../components/mainContent/MainContent.tsx'
import '../scss/home.scss'

function Home() {
  return (
    <div className="home">
      <Heder />
      <MainContent />
      <Footer />
    </div>
  )
}

export default Home



