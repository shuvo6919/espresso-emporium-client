import "./footer.css";
import logo from "../../assets/images/more/logo1.png";
import footerBg from "../../assets/images/more/footer-bg.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  const handleGoToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer-container">
      <img className="footer-bg" src={footerBg} alt="" />

      <div className="footer-info">
        <img src={logo} alt="" />
        <div className="footer-infos">
          <div className="contact-info">
            <h1>Espresso Emporium</h1>
            <p>
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="social-media">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
            <h1>Get in Touch </h1>
            <div className="contact">
              <FaPhoneAlt />
              <p>+88 01533 333 333</p>
            </div>
            <div className="contact">
              <IoMdMail />
              <p>info@gmail.com</p>
            </div>
            <div className="contact">
              <FaLocationDot />
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
            <p></p>
          </div>
          <div className="contact-form">
            <h1>Connect with Us</h1>
            <form>
              <input placeholder="Name" type="text" name="name" />
              <input placeholder="Email" type="email" name="email" />
              <input placeholder="Message" type="text" name="message" />
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
      </div>
      <button onClick={handleGoToTop} className="button">
        got to the top
      </button>
    </div>
  );
};

export default Footer;
