import React from "react";
import "./footer.css";

const Footer = ({ name }) => (
    <footer className="footer text-center">
        <p>&copy; {name} 2018</p>
    </footer>
);

export default Footer;
