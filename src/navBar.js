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

  const renderNavItem = (item, inSidebar = false) => {
    if (item.title === "Schedule" || item.title === "Contact") {
      return (
        <button onClick={() => scrollToSection(item.title.toLowerCase())}>
          {item.title}
        </button>
      );
    }
    return (
      <Link to={item.to} onClick={() => inSidebar && setOpen(false)}>
        {item.title}
      </Link>
    );
  };

  return (
    <nav className="nav">
      <img src="/ring-london-logo.png" alt="Ring London Logo" />

      {/* Sidebar (mobile) */}
      <ul className={`sidebar ${open ? "show" : ""}`}>
        <li className="close-row">
          <img
            src={Close}
            alt="Close menu"
            onClick={() => setOpen(false)}
          />
        </li>
        {options.map((item) => (
          <li key={item.id}>{renderNavItem(item, true)}</li>
        ))}
      </ul>

      {/* Desktop nav links */}
      <ul className="normal">
        {options.map((item) => (
          <li className="normalNav" key={item.id}>
            {renderNavItem(item, false)}
          </li>
        ))}
      </ul>

      {/* Hamburger — always visible, sits outside normal list */}
      <button
        className="hamburger-btn"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
      >
        <img src={Hamburger} alt="Menu" />
      </button>
    </nav>
  );
}