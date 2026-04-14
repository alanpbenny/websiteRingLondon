import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Close from "./close.svg";
import Hamburger from "./ham.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const options = [
    { title: "Schedule", to: "/#schedule", id: 1 },
    { title: "Membership", to: "/membership", id: 2 },
    { title: "Contact", to: "/#contact", id: 3 },
    { title: "About", to: "/about", id: 4 },
  ];

  const scrollToSection = (id) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="nav">
      <img src="/ring-london-logo.png" alt="Ring London Logo" />

      <ul className={`sidebar ${open ? "show" : ""}`}>
        <li onClick={() => setOpen(false)}>
          <img src={Close} alt="Close menu" />
        </li>

        {options.map((item) => (
          <li key={item.id}>
            {item.title === "Schedule" || item.title === "Contact" ? (
              <button onClick={() => scrollToSection(item.title.toLowerCase())}>
                {item.title}
              </button>
            ) : (
              <Link to={item.to} onClick={() => setOpen(false)}>
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <ul className="normal">
        {options.map((item) => (
          <li className="normalNav" key={item.id}>
            {item.title === "Schedule" || item.title === "Contact" ? (
              <button onClick={() => scrollToSection(item.title.toLowerCase())}>
                {item.title}
              </button>
            ) : (
              <Link to={item.to}>{item.title}</Link>
            )}
          </li>
        ))}

        <li onClick={() => setOpen(!open)}>
          <img src={Hamburger} alt="Hamburger menu icon" />
        </li>
      </ul>
    </nav>
  );
}