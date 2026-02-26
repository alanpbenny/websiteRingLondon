import "./App.css";
import Navbar from "./navBar";

export default function About() {
    return(
        <div>
            <Navbar />
            <div className="about">
                <h1 className="about-title">About Us</h1>
                <p className="about-details">
                    Ring London Boxing Gym has been a cornerstone of the London community since 1950. Founded by legendary boxer Jack "The Hammer" Thompson, our gym has a rich history of training champions and fostering a love for the sport. We are dedicated to providing a welcoming and inclusive environment for boxers of all ages and skill levels. Our experienced coaches are passionate about helping you achieve your fitness and boxing goals, whether you're looking to compete or just get in shape. Join us and become part of our proud tradition!
                </p>
            </div>
        </div>
    )
}