import React from "react";
import './Footer.css'
import { assets } from "../../assets/assets";
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus eveniet provident! Nesciunt, ducimus maxime? Vel, totam voluptatem? Sequi adipisci optio accusamus provident animi quo ea non obcaecati tenetur consectetur.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook icon" />
                        <img src={assets.twitter_icon} alt="twitter icon" />
                        <img src={assets.linkedin_icon} alt="linkedin icon" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <ul>+1-232-472-7986</ul>
                        <ul>contact-debojeetdutta43@gmail.com</ul>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer;