import About from "./components/about/About"
import BottomBar from "./components/bottom bar/BottomBar"
import Specials from "./components/coffee types/Specials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import SocialProof from "./components/header/SocialProof"
import HeroSection from "./components/hero/HeroSection"
import MapComponent from "./components/Location/MapComponent"

const App = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />
       <BottomBar />
      <HeroSection />
      <SocialProof />
      <Specials/>
      <About />
      <Contact />
      <MapComponent />
      {/* cta should be here  */}
      <Footer />
    </div>
  )
}

export default App