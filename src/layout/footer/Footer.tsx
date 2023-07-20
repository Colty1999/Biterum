import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";
import { PiGithubLogoFill } from "react-icons/pi";
import './Footer.scss'

export default function Footer() {
    return (
        <div className="footer-container">
            <a href="#"><PiGithubLogoFill /></a>
            <a href="#"><BiLogoLinkedin/></a>
            <a href="#"><BiLogoFacebook/></a>
        </div>
    )
}