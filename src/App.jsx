
import './App.css'
import Footer from './Components/Footer'
import Carousel from './Components/HomePage/Carousel'
import Feedback from './Components/HomePage/Feedback'
import Navigation from './Components/HomePage/Navigation'
import Recent from './Components/HomePage/Recent'
import Trend from './Components/HomePage/Trend'
import MyNavbar from './Components/Navbar'

function App() {
  

  return (
    <>
      <MyNavbar/>
      <Navigation/>
      <Carousel/>  
      <Trend/> 
      <Feedback/>
      <Recent/>
      <Footer/>
      </>
  )
}

export default App
