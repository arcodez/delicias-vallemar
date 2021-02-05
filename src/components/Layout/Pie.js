import React from "react";
import Scripts from "./Scripts";

export default function Pie() {
  return (
    <>
      {/*   <!-- CONTACT --> */}
      <section id="contact" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            {/*           <!-- How to change your own map point
            1. Go to Google Maps
            2. Click on your location point
            3. Click "Share" and choose "Embed map" tab
            4. Copy only URL and paste it within the src="" field below
	--> */}
            <div
              className="wow fadeInUp col-md-6 col-sm-12"
              data-wow-delay="0.4s"
            >
              <div id="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d892.8607325256453!2d-63.890866385780974!3d10.987815184457428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sve!4v1609702153035!5m2!1ses!2sve"
                  width="600"
                  height="450"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="col-md-12 col-sm-12">
                <div
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <h2>Contactanos</h2>
                </div>
              </div>

              {/*  <!-- CONTACT FORM --> */}
              <form
                action="#"
                method="post"
                className="wow fadeInUp"
                id="contact-form"
                role="form"
                data-wow-delay="0.8s"
              >
                {/*  <!-- IF MAIL SENT SUCCESSFUL  // connect this with custom JS --> */}
                <h6 className="text-success">
                  Your message has been sent successfully.
                </h6>

                {/*  <!-- IF MAIL NOT SENT -- */}
                <h6 className="text-danger">
                  E-mail must be valid and message must be longer than 1
                  character.
                </h6>

                <div className="col-md-6 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="cf-name"
                    name="name"
                    placeholder="Full name"
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <input
                    type="email"
                    className="form-control"
                    id="cf-email"
                    name="email"
                    placeholder="Email address"
                  />
                </div>

                <div className="col-md-12 col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="cf-subject"
                    name="subject"
                    placeholder="Subject"
                  />

                  <textarea
                    className="form-control"
                    rows="6"
                    id="cf-message"
                    name="message"
                    placeholder="Tell about your project"
                  ></textarea>

                  <button
                    type="submit"
                    className="form-control"
                    id="cf-submit"
                    name="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*  <!-- FOOTER --> */}
      <footer id="footer" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-8">
              <div className="footer-info">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    Encuentranos
                  </h2>
                </div>
                <address className="wow fadeInUp" data-wow-delay="0.4s">
                  <p>
                    El Valle del Espiritu Santo
                    <br />
                    Frente a la mata de tamarindo
                    <br />
                    Las Piedras del Valle
                  </p>
                </address>
              </div>
            </div>

            <div className="col-md-3 col-sm-8">
              <div className="footer-info">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    Preguntanos
                  </h2>
                </div>
                <address className="wow fadeInUp" data-wow-delay="0.4s">
                  <p>0295-2870850</p>
                  <p></p>
                </address>
              </div>
            </div>

            <div className="col-md-4 col-sm-8">
              <div className="footer-info footer-open-hour">
                <div className="section-title">
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    Siempre a la orden!
                  </h2>
                </div>
                <div className="wow fadeInUp" data-wow-delay="0.4s">
                  <div>
                    <strong>Lunes - Viernes</strong>
                    <p>7:00 AM - 7:00 PM</p>
                  </div>
                  <div>
                    <strong>Sabado - Domingo</strong>
                    <p>7:00 AM - 6:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-2 col-sm-4">
              <ul className="wow fadeInUp social-icon" data-wow-delay="0.4s">
                <li>
                  <a
                    href="#"
                    className="fa fa-facebook-square"
                    attr="facebook icon"
                  ></a>
                </li>
                <li>
                  <a href="#" className="fa fa-twitter"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-instagram"></a>
                </li>
                <li>
                  <a href="#" className="fa fa-google"></a>
                </li>
              </ul>

              <div
                className="wow fadeInUp copyright-text"
                data-wow-delay="0.8s"
              >
                <p>
                  <br />
                  Copyright &copy; 2020 <br />
                  Delicias Vallemar
                  <br />
                  <br />
                  Power by:
                  <a rel="nofollow" href="" target="_parent">
                    Abel Rodriguez
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Scripts />
    </>
  );
}
