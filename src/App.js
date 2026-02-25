import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navBar";
import GymMap from "./map";
import RingContact from "./ringContact";
import HeroSlider from "./HeroSlider";

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <h1 className="title">The Oldest Boxing gym in London</h1>
        <p className="sub-title">Serving the community since 1950</p>
        <HeroSlider />
        <p className="disclaimer">What We Offer:</p>

        <section className="programs">
          <div className="program">
            <img src="/fitness.jpg" alt="Fitness" className="weofferImage" />
            <h2>Fitness</h2>
            <p>BoxFit, conditioning, strength training for all levels.</p>
          </div>

          <div className="program">
            <img
              src="/competition.jpg"
              alt="Competition"
              className="weofferImage"
            />
            <h2>Competition</h2>
            <p>Amateur team, sparring, and fight camp preparation.</p>
          </div>

          <div className="program youth">
            <img
              src="/youth.avif"
              alt="Youth Boxing"
              className="weofferImage"
            />
            <h2>Youth Boxing</h2>
            <p>Kids and teen classes focused on discipline and fitness.</p>
          </div>
        </section>

        <section className="information" id="schedule">
          <div className="info">
            <div className="hours">
              <h2 className="schedule">Schedule</h2>

              <p className="times">Monday: 7pm - 8:30pm</p>
              <p className="times">Wednesday: 7pm - 8:30pm</p>
              <p className="times">Friday: 7pm - 8:30pm</p>
            </div>
            <div className="address">
              <p>500 First Street</p>
              <p>London, ON</p>
              <p>N5V 2J7</p>
            </div>
          </div>

          <div className="map-column">
            <h2 className="schedule">CHECK US OUT</h2>
            <GymMap />
          </div>
        </section>
        <div id = "contact">
          {" "}
          <RingContact />
        </div>
      </div>
    </div>
  );
}

export default App;
