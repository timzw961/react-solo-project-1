import react from "react"
import fb from "../images/Facebook Icon.png"
import twitter from "../images/Twitter Icon.png"
import insta from "../images/Instagram Icon.png"
import git from "../images/GitHub Icon.png"

export default function Footer(){
    return (
        <div className = "footer_body">
            <div className = "footer_container">
                <img className = "footer_twit" src={twitter} />
                <img className = "footer_fb" src={fb} />
                <img className = "footer_insta" src={insta} />
                <img className = "footer_git" src={git}/>
             </div>
        </div>
    )
}