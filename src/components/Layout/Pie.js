import React from 'react'
import Scripts from './Scripts'

export default function Pie() {
    return (
        <>
          
   {/*  <!-- FOOTER --> */}
    <footer id="footer" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-8">
            <div className="footer-info">
              <div className="section-title">
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">Encuentranos</h2>
              </div>
              <address className="wow fadeInUp" data-wow-delay="0.4s">
                <p>
                  El Valle del Espiritu Santo<br />
                  Frente a la mata de tamarindo<br />Las Piedras del Valle
                </p>
              </address>
            </div>
          </div>

          <div className="col-md-3 col-sm-8">
            <div className="footer-info">
              <div className="section-title">
                <h2 className="wow fadeInUp" data-wow-delay="0.2s">Reservation</h2>
              </div>
              <address className="wow fadeInUp" data-wow-delay="0.4s">
                <p>090-080-0650 | 090-070-0430</p>
                <p><a href="mailto:info@company.com">info@company.com</a></p>
                <p>LINE: eatery247</p>
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
              <li><a href="#" className="fa fa-twitter"></a></li>
              <li><a href="#" className="fa fa-instagram"></a></li>
              <li><a href="#" className="fa fa-google"></a></li>
            </ul>

            <div className="wow fadeInUp copyright-text" data-wow-delay="0.8s">
              <p>
                <br />Copyright &copy; 2020 <br />Delicias Vallemar

                <br /><br />Power by:
                <a rel="nofollow" href="" target="_parent">Abel Rodriguez</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

        <Scripts />
        </>
    )
}
