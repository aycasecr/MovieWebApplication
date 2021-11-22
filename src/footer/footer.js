import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import Ios from '../images/ios.webp';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';
import GooglePlay from '../images/google_play.webp';
import Mail from '../images/mail.webp'

class Footer extends React.Component {
    render() {
        return (
            <div class="footer">
                <div class="row images">
                    <img src={Ios} />
                    <img src={Mail} />
                    <img src={Facebook} />
                    <img src={Instagram} />
                    <img src={GooglePlay} />
                </div>
                <div class="row footer-text-div">
                    <p class="col-1">Seslendirme ve Alt Yazı</p>
                    <p class="col-1">Medya Merkezi</p>
                    <p class="col-1">Gizlilik</p>
                    <p class="col-1">Bize Ulaşın</p>
                    <p class="col-1">Kurumsal Bilgiler</p>
                </div>
                <div>
                    <p class="signature-text">©2021 AE Movie Web Application</p>
                </div>
            </div>
        )
    }
}
export default Footer;