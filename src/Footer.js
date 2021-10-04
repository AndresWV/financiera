import { IoLogoFacebook} from "react-icons/io";
import { IoLogoInstagram} from "react-icons/io";
import { IoLogoTwitter} from "react-icons/io";
import { IoIosMail} from "react-icons/io";
function foot() {
    return (
        <div>
            <footer className="footer-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="#">Web design</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Hosting</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Team</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>ORDENA - T</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div className="col item social"><a href="#"><i className="icon"><IoLogoFacebook /></i></a><a href="#"><i className="icon"><IoLogoTwitter /></i></a><a href="#"><i className="icon"><IoLogoInstagram /></i></a><a href="#"><i className="icon"><IoIosMail /></i></a></div>
                    </div>
                    <p className="copyright">ORDENA-T&nbsp; © 2021</p>
                </div>
            </footer>
            <script src="src\bootstrap\css\bootstrap.min.css"></script>
            <script src="src\js\Contact-Form-v2-Modal--Full-with-Google-Map.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.4.8/swiper-bundle.min.js"></script>
            <script src="src\js\Simple-Slider.js"></script>
            <script src="src\js\Ultimate-Testimonial-Slider-BS5.js"></script>
        </div>
    )
}
export default foot