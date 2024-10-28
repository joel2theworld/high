import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <footer id="fh5co-footer" role="contentinfo">
        <div className="row">
          <div className="col-md-3 fh5co-widget">
            <h4>About High Park</h4>
            <p>
              At High Park Architecture, we're not just creating spaces – we're
              crafting experiences. With a blend of creativity, expertise, and
              dedication, we transform visions into reality, one exceptional
              project at a time. Welcome to a world of timeless elegance and
              unparalleled sophistication.
            </p>
          </div>
          <div className="col-md-3 col-md-push-1">
            <h4>Our Services</h4>
            <ul className="fh5co-footer-links">
              <li>Architecture Design</li>
              <li>Interior Design</li>
              <li>FF&E (Fixtures, Furniture & Equipment) Contracting</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div className="col-md-3 col-md-push-1">
            <h4>Links</h4>
            <ul className="fh5co-footer-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/services">Our Services</a>
              </li>
              <li>
                <a href="https://instagram.com/highpark.in">Projects</a>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h4>Contact Us</h4>
            <ul className="fh5co-footer-links">
              <li>
                20 Omole Phase 2 Extension,<br></br> 100214, Lagos, Nigeria.
              </li>
              <li>
                <a href="tel://1234567920">+2348156309890</a>
              </li>
              <li>
                <a href="mailto:dolapofadipe@highpark.in">
                  dolapofadipe@highpark.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row copyright">
          <div className="col-md-12 text-center">
            <p>
              <small className="block">
                &copy; 2024 High Park. All Rights Reserved.
              </small>
            </p>
            <p>
              <ul className="fh5co-social-icons flex justify-center space-x-4 mt-2">
                <li>
                  <a href="https://web.facebook.com/people/High-park-In/61559836871155/">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/highpark.in">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
