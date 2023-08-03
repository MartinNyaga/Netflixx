import React from 'react';


function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <div className="Footer-left">
           
          <h3>About Us</h3>
          <p>
            Netflixx is your ultimate destination for streaming your favorite movies and TV shows on demand. Our platform offers an extensive library of top-rated content, including the latest blockbusters, timeless classics, and binge-worthy series.
          </p>
           <p>
            Our mission is to provide a seamless and immersive entertainment experience, connecting millions of users to captivating stories from around the world. We constantly strive to enhance your viewing pleasure with personalized recommendations and high-quality streaming.
          </p>
        </div>
        <div className="Footer-right">
          <h3>Contact</h3>
          <p>Email: Netflixx@gmail.com</p>
          <p>Phone: (+254)  0722200000</p>
        </div>
      </div>
      <div className="Footer-bottom">
        <p>&copy; {new Date().getFullYear()} Netflixx. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
