import Navbar from "./navBar";
import "./App.css";
import "./membership.css";
import RingContact from "./ringContact";
export default function Membership() {
    return(
    <div>
        <Navbar />
        <div className="membership">
            <h1 className="membership-h1">Membership Information</h1>
            <p className="membership-details">
                Join our boxing gym and become part of a vibrant community! Classes run weekly and dedicated athletes will have the opportunity to participate in competition.
            </p>

            <img className="price-img" src="prices.png" alt="Membership Prices" />
        </div>
          <RingContact />
       
    </div>
    )
}
