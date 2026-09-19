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
                    boxing community since 1975. Ran by Frank McGrath and Ken
                    McNorgan for the first 20 years. Our gym has a rich history
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
                            {/* Add coach image here later */}
                        </div>

                        <h3 className="coach-name">Kelly O'Conner</h3>

                        <p className="coach-details">
                            Write a description about this coach here. You can
                            talk about their boxing experience, coaching
                            experience, accomplishments, and what they bring
                            to the gym.
                        </p>
                    </div>

                    {/* Coach 2 */}
                    <div className="coach">
                        <div className="coach-image">
                            {/* Add coach image here later */}
                        </div>

                        <h3 className="coach-name">Adam</h3>

                        <p className="coach-details">
                            Write a description about this coach here. You can
                            talk about their boxing experience, coaching
                            experience, accomplishments, and what they bring
                            to the gym.
                        </p>
                    </div>

                    {/* Coach 3 */}
                    <div className="coach">
                        <div className="coach-image">
                            {/* Add coach image here later */}
                        </div>

                        <h3 className="coach-name">Jeff Boyd</h3>

                        <p className="coach-details">
                            Write a description about this coach here. You can
                            talk about their boxing experience, coaching
                            experience, accomplishments, and what they bring
                            to the gym.
                        </p>
                    </div>

                </div>
            </section>

            <RingContact />
        </div>
    );
}