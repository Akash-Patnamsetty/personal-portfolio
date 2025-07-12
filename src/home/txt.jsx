import "./Txt.css"
import { useState } from "react"
const Txt=()=>{
    const[color,setColor]=useState(false)
    function down(){
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
        <div className="t1">
        <h1>hello, my name is <span>Akash</span></h1>
        <h1>i'm a <span>web developer</span></h1>
        <h2> I'm passionate about crafting clean, modern designs backed by powerful, functional web solutions.
 I build responsive websites that feel great to use. <br />
Simplicity, speed, and user experience are at the core of everything I create.
Let’s connect and bring your next big idea to life. <br />I build , user-friendly websites that not only look great but also perform seamlessly across all devices.</h2>
        <br /><br />
        <button className={color? "cvbtnactive":"cvbtn"} onClick={down}>download cv </button>
        </div>
    )
}
export default Txt