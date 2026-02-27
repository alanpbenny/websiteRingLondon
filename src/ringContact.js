import React from "react";
import "./contact.css"; // if you split your CSS

function RingContact() {
  return (
    <section className="contact">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">
        <div className="contact-item">
          <span className="contact-label">📞 Phone</span>
          <p>(519) 555-1234</p>
        </div>

        <div className="contact-item">
          <span className="contact-label">📧 Email</span>
          <p>oconnork@hay.net</p>
        </div>

        <div className="contact-item">
          <a
            href="https://www.facebook.com/groups/YOURGROUP"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook-link"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
              alt="Facebook"
              className="facebook-icon"
            />
            Join our Facebook Group
          </a>
        </div>
      </div>
    </section>
  );
}

export default RingContact;