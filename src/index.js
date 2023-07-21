import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import { Wrapper } from './style/style.jsx'
import { GiHamburgerMenu } from "react-icons/gi";


function R17App () {

    const[status,setStatus] = useState({
        menu: true,
        hamburger: false,
    })

    const [classs, setClasss] = useState("aaa")
    console.log(classs)

    const statusChange = () => {
        setClasss("active")
        setStatus({menu:true})
        console.log(classs)
    }

    useEffect(() => {
        window.onresize = () => {
            let resolution = window.innerWidth
            resolution > 800 && setStatus({menu:true, hamburger: false})
            resolution < 800 && setStatus({menu:false, hamburger: true})
        }
    })

    return (
        <div style={{
            display:"flex",
            width:"100vw - 16px",
            height:"100vh - 16px",
            margin:"0",
            padding:"0",
            boxSizing:"border-box",
        }}>
        <Wrapper>
            <div className="my">My very own App</div>
            {status.menu && <ul className={`container ${classs} `}>
               <li><a href="home">Home</a></li>
               <li><a href="about" >About</a></li>
               <li><a href="contact">Contact</a></li> 
            </ul>}
            {status.hamburger && <GiHamburgerMenu 
            onClick={statusChange} style={{
                fontSize:"4rem",
                color: "white",
                margin:"auto 20px",
                cursor:"pointer"
            }}/>}
        </Wrapper>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<R17App />)
