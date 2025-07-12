
import About from './about/about'
import './App.css'
import Contact from './contact/contact'
import Home from './home/home'
import Navi from './navbar/nav'
import Projects from './projects/projects'
import Services from './services/services'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <div className="main">
      <div className="main2"><Navi/></div>
      <div className="main3">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
      <div className="mainline">
        <div className="home"><Home/></div> <br /><br /><br /><br /><br /><br />
        <div className="about"> <About/></div> <br /><br /><br />
        <div className="services"> <Services/></div>
        <div className="project"><Projects/></div>
        <div className="contact"><Contact/></div>
      </div>

      
      
    </div>
  )
}

export default App
