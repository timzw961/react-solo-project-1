import react from "react"
import tim from "../images/timWang.jpg"
import mail from "../images/mailicon.jpg"
import linkin from "../images/linkedin.png"

export default function Info(){
    return (
        <info>
            <img className= "info_photo" src={tim}/>
            <h1 className = "info_name"> Timothy Wang </h1>
            <h2 className = "info_position"> Frontend Developer </h2>
            <h4 className = "info_website"> timothywang.website </h4>
            <div className ="info_button_container">
                <button className = "info_emailbutton" > 
                    <img src={mail}/>
                    Email 
                </button>
                <a href="https://www.linkedin.com/in/timothy-wang-8bbb521b0/">
                <button className = "info_linkedinbutton"> 
                    <img src={linkin}/> LinkedIn
                </button>
                </a>
            </div>
        </info>
    )
}