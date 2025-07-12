import { useEffect, useState } from "react"
import Navi from "../navbar/nav"
import "./home.css"
import Img from "./image"
import Txt from "./txt"

const Home=()=>{
        const [showna,setshownav]=useState(false);

    function shownavi(){
            setshownav(!showna);
        
    }
    return(
        <div className="home1">
            <div className="navires">
            <div className="navicon">akash</div>
            <div className="navidown"> <button onClick={shownavi} >{ showna? "#":"%" }</button> </div>
                
            </div>
            {showna &&(
                    <div className="showna">
                        <nav>
                            <ul>
                                <li>home</li>
                                <li>about</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </nav>
            </div>
                )}

            
    
            
   
            
        <Txt/>
        <Img/>
        </div>
       
    )
}
export default Home