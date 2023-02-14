import { ButtonDecoration } from "./ButtonDecoration";
import  Logo  from "../images/Logo.svg";
import IconFacebook from "../images/IconFacebook.svg";
import IconTwitter from "../images/IconTwitter.svg";
import IconPinterest from "../images/IconPinterest.svg";
import IconInstagram from "../images/IconInstagram.svg";

export function Footer(props) {
    return(
        <>
            <div className="footer__first">
                <p className="footerfirst__title">
                    Boost your links today
                </p>
                <ButtonDecoration text='Get Started'/>
            </div>
            <div className="footer__second">
                <div className="footer__logo">
                    <img src={Logo} alt="Logo"></img>
                </div>
                <section className="footer__feature">
                    <h3>Features</h3>
                    <ul>
                        <li>
                            <a href="#">Link Shortening</a>
                        </li>
                        <li>
                        <a href="#">Branded Links</a>
                        </li>
                        <li>
                            <a href="#">Analytics</a>    
                        </li>
                    </ul>
                </section>
                <section className="footer_resources">
                    <h3>Resources</h3>
                    <ul>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Developers</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </section>
                <section className="footer_company">
                <h3>Features</h3>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Our Team</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </section>
                <section className="footer_socialmedia">
                    <div className="icon">
                        <img src={IconFacebook} alt="Facebook"/>
                    </div>
                    <div className="icon">
                        <img src={IconTwitter} alt="Facebook"/>
                    </div>
                    <div className="icon">
                       <img src={IconPinterest} alt="Facebook"/>
                    </div>
                    <div className="icon">
                        <img src={IconInstagram} alt="Facebook"/>
                    </div>
                </section>
            </div>
        </>   
    )
}