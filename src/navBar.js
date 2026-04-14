import { Link } from "react-router-dom";
import { useState } from "react";
import Close from "./close.svg";
import Hamburger from "./ham.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const options = [
    { title: "Schedule", to: "/#schedule", id: 1 },
    { title: "Membership", to: "/membership", id: 2 },
    { title: "Contact", to: "/#contact", id: 3 },
    { title: "About", to: "/about", id: 4 },
  ];

  return (
    <nav className="nav">
      <img src="/ring-london-logo.png" alt="Ring London Logo" />

      {/* Sidebar */}
      <ul className={`sidebar ${open ? "show" : ""}`}>
        <li onClick={() => setOpen(false)}>
          <img src={Close} alt="Close menu" />
        </li>
        {options.map((item) => (
          <li key={item.id}>
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))}
      </ul>

      {/* Normal nav */}
      <ul className="normal">
        {options.map((item) => (
          <li key={item.id}>
            <Link to={item.to}>{item.title}</Link>
          </li>
        ))}
        <li onClick={() => setOpen(!open)}>
          <img src={Hamburger} alt="Hamburger menu icon" />
        </li>
      </ul>
    </nav>
  );
}