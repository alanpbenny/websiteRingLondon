import { Link } from "react-router-dom";

export default function Navbar() {
  const options = [
    { title: "Schedule", to: "/#schedule", id: 1 },
    { title: "Membership", to: "/membership", id: 2 },
    { title: "Contact", to: "/#contact", id: 3 },
    { title: "About", to: "/about", id: 4 },
  ];

  return (
    <nav>
      <img src="/ring-london-logo.png" alt="Ring London Logo" />
      <ul>
        {options.map((item) => (
          <li key={item.id}>
            {item.to ? (
              <Link to={item.to}>{item.title}</Link>
            ) : (
              <a href={item.href}>{item.title}</a>
            )}
          </li>
        ))}
      </ul>
 
    </nav>
    
  );
}
