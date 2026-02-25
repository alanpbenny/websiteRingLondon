export default function Navbar() {
  const options = [
    { title: "Schedule", href: "#schedule", id: 1 },
    { title: "Membership", href: "#membership", id: 2 },
    { title: "Contact", href: "#contact", id: 3 },
    { title: "About", href: "#about", id: 4 },
  ];

  return (
    <nav className="nav">
      <img src="/ring-london-logo.png" alt="Ring London Logo" />
      <ul>
        {options.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
