import React from "react";
import Link from "next/link";

export default function Team() {
  return (
    <>
      <section id="team" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
                <h2>Nuestros Productos</h2>
                <h4>They are nice &amp; friendly</h4>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
                <Link href="/categorias/viveres">
                  <a>
                    <img
                      src="https://static.wixstatic.com/media/05cebb_3b4fff7ed435433daa807d67b502adfe~mv2.png/v1/fill/w_498,h_498,al_c,usm_0.66_1.00_0.01/05cebb_3b4fff7ed435433daa807d67b502adfe~mv2.png"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="team-info">
                <h3>Viveres</h3>
                <p>Harinas, Salsas, Cereales</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
                <a href="/categorias/charcuteria">
                  <img
                    src="https://aecocfront-resources.s3.eu-west-1.amazonaws.com/resources/public/1589390576573.jpg"
                    className="img-responsive"
                    alt="charcuteria"
                  />
                </a>
              </div>

              <div className="team-info">
                <h3>Charcuteria</h3>
                <p>Mortadela, Queso, Chorizo, Pollo</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
                <Link href="/categorias/licor">
                  <a>
                    <img
                      src="https://st2.depositphotos.com/1063437/11520/i/600/depositphotos_115203820-stock-photo-bottles-of-assorted-hard-liquor.jpg"
                      className="img-responsive"
                      alt="licor"
                    />
                  </a>
                </Link>
              </div>
              <div className="team-info">
                <h3>Licores</h3>
                <p>Ron, Wiskhy, Cerveza</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
