import Navbar from "../../components/Navbar"
import Hero from "../../components/Home/Hero"
import OurService from "../../components/Ourservices/Ourservice"
import AboutPage from "./AboutPage"
import Footer from "../../components/Footer"

const Home = () => {
 return (
    <div>
      <Navbar />
      <div id="home">
        <Hero/> 
      </div>
      <div id="about">
        <AboutPage/>
      </div>
     <div id="services">
       <OurService/>
     </div>
     <div id="services">
       <Footer/>
     </div>
    </div>
  )
}

export default Home
