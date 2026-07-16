import Contact from "../component/Contact"
import Hero from "../component/Hero"
import MenuSection from "../component/MenuSection"
import MovingBanner from "../component/MovingBanner"
import Navbar from "../component/Navbar"
import OurStory from "./OurStory"
import Footer from "../component/Footer"

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <MovingBanner/>
      <MenuSection/>
      <OurStory/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home