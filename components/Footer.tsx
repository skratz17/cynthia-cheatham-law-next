import Link from "next/link";

export const Footer = () => (
    <footer id="main-footer" className="py-2">
    <div className="container">
        <div className="footer-content">
        <div>
            <i className="fas fa-map-marked fa-2x"></i>
            <h3>Address</h3>
            <p>PO Box 90814, Nashville, TN 37209</p>
        </div>
        <div>
            <i className="fas fa-phone-alt fa-2x"></i>
            <h3>Phone</h3>
            <a href="tel:615-645-5665">(615) 645-5665</a>
        </div>
        <div>
            <p><small>Copyright Cynthia Cheatham Law &copy; {new Date().getFullYear()}. All rights reserved.</small></p>
            <p>
            <small>Site designed by&nbsp; 
                <a href="https://jacobweckert.com" target="_blank" rel="noopener noreferrer">Jacob Eckert</a>.
            </small>
            </p>
            <p>
            <small><Link href="/legal-disclaimer">Legal Disclaimer and Privacy Policy</Link></small>
            </p>
        </div>
        </div>
    </div>
    </footer>
);