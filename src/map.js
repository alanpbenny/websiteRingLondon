
function GymMap() {
  return (
    <div className="map">
      <iframe
        title="Gym Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.879612251939!2d-81.19797992403383!3d43.00186947114058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882eed6fc7602019%3A0x43e177e489f8459a!2sRing%20London%20Boxing%20Club!5e0!3m2!1sen!2sca!4v1771800297104!5m2!1sen!2sca"
        style={{ border: 0 }}
        loading="lazy"
        className="map-iframe"

        allowFullScreen

      ></iframe>
    </div>
  );
}

export default GymMap;