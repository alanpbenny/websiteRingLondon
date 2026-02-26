import Navbar from "./navBar";
import "./App.css";

export default function Membership() {
    return(
    <div>
        <Navbar />
        <div className="membership">
            <h1 className="membership-title">Membership Information</h1>
            <p className="membership-details">
                Join our boxing gym and become part of a vibrant community! We offer flexible membership options to suit your needs. Whether you're looking for fitness, competition training, or youth classes, we have something for everyone. Contact us today to learn more about our membership plans and start your boxing journey with us!
            </p>
        </div>
    </div>
    )
}
