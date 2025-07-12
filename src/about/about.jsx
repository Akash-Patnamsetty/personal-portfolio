import "./about.css"
import Content from "./content"
import Education from "./education"
import Personal from "./personal"
const About=()=>{
    return(
        <div className="mainabout">
            
            <div className="la">
                About
            </div>
            <div className="texta1">
            <h1>i'm a <span>web developer</span></h1>
        <h2> I'm passionate about crafting clean, modern designs backed by powerful, functional web solutions.
 I build responsive websites that feel great to use. <br />
Simplicity, speed, and user experience are at the core of everything I create.
Let’s connect and bring your next big idea to life. <br />I build , user-friendly websites that not only look great but also perform seamlessly across all devices.</h2>
        <br /><br />
        </div>
        <div className="mainv1">
            <Content/>
              <Personal/>
        </div>
       <Education/>
       </div>



      
    )
}
export default About