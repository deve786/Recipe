import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-div'>
                <h2>ChefChirp</h2>
                <p className='footer-text'>© 2024 ChefChirp Technologies Pvt. Ltd</p>
                <p>
                    <i class="fa-brands fa-instagram social-icon" ></i>
                    <i class="fa-brands fa-x-twitter social-icon" ></i>
                    <i class="fa-brands fa-youtube social-icon" ></i>
                    <i class="fa-brands fa-whatsapp social-icon"></i>
                </p>
            </div>
            <div className='footer-div footer-main'>
                <h3>Company</h3>
                <p>Team</p>
                <p>Careers</p>
                <p>About</p>
            </div>
            <div className='footer-div'>
                <h3>Contact Us</h3>
                <p>Help & Support</p>
                <p>Partners</p>
                <p>Ride</p>
            </div>
            <div className='footer-div'>
                <h3>Legal</h3>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer