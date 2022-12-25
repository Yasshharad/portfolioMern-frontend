import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Hey, my name is Yash. I am a Full-Stack Developer and DSA learner..
                </Typography>

                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact Us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/Yasshharad/" target="black">
                    <BsGithub />
                </a>
                <a href="https://www.facebook.com/yash.harad.0836" target="black">
                    <BsFacebook />
                </a>
                <a href="https://www.instagram.com/yashharad_/" target="black">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/yash-harad-a60812227/" target="black">
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
};

export default Footer;
