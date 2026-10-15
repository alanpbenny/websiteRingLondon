import "./App.css";
import Navbar from "./navBar";
import "./about.css";
import RingContact from "./ringContact";

export default function About() {
    return (
        <div>
            <Navbar />

            <div className="about">
                <h1 className="about-h1">About Us</h1>

                <p className="about-details">
                    Ring London Boxing Gym has been a cornerstone of the London
                    boxing community since 1975. Founded by Frank McGrath and Ken
                    McNorgan. Our gym has a rich history
                    of training champions and fostering a love for the sport.
                    We are dedicated to providing a welcoming and inclusive
                    environment for boxers of all ages and skill levels. Our
                    experienced coaches are volunteers whoare passionate about helping you achieve
                    your fitness and boxing goals, whether you're looking to
                    compete or just get in shape.
                </p>
            </div>

            {/* COACHES */}
            <section className="coaches">
                <h2 className="coaches-title">Our Coaches</h2>

                <div className="coaches-grid">

                    {/* Coach 1 */}
                    <div className="coach">
                        <div className="coach-image">
                            <img
                                src="/kellyIMG.png"
                                alt="Kelly O'Conner"
                                className="weofferImage"
                            />
                        </div>

                        <h3 className="coach-name">Kelly O'Conner</h3>

                        <p className="coach-details">
                            34 years of coaching experience.
                        </p>
                    </div>

                    {/* Coach 2 */}
                    <div className="coach">
                        <div className="coach-image">
                            <img
                                src="/adamIMG.png"
                                alt="Adam Buckley"
                                className="weofferImage"
                            />
                        </div>

                        <h3 className="coach-name">Adam</h3>

                        <p className="coach-details">
                            20 years of experience.
                        </p>
                    </div>

                    {/* Coach 3 */}
                    <div className="coach">
                        <div className="coach-image">
                            <img
                                src="/jeffIMG.png"
                                alt="Jeff Boyd"
                                className="weofferImage"
                            />
                        </div>

                        <h3 className="coach-name">Jeff Boyd</h3>

                        <p className="coach-details">
                            20 years of expereience.
                        </p>
                    </div>

                </div>
            </section>

            <RingContact />
        </div>
    );
}