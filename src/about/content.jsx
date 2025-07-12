import "./content.css"
import { useState } from "react";
const Content=()=>{
    const[color,setColor]=useState(false)
    const down=()=>{
         const lik=document.createElement("a");
        lik.href="${process.env.PUBLIC_URL}/public/akash_resume.pdf";
        lik.download="akash_resume.pdf";
        lik.click();
        if(color===false){
                setColor(!color)
        }
        else{
            setColor(color)
        }
    };

  

    return(
        <div className="maint3">
            <div className="head">personal details</div>
            <div className="detail">
                <h1>full name :- <span>AKASH PATNAMSETTY</span></h1>
            <h1>degree:- <span>computer science</span></h1><h1>email:-<span> patnamsettyakash@gmail.com</span></h1>
            <h1>phone:- +91 <span>9000920161</span></h1>
            <h1> city:- <span>gunter</span></h1>
            
            <button className={color? "cvbtnactive":"cvbtn"}  onClick={down}>download cv</button>
            </div>
           </div>
    )
}
export default Content