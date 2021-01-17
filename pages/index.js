import React from 'react'
import Layout from '../src/components/Layout/Layout'

function Content() {
    return (
        <Layout>
    <title>Delicias Vallemar</title>
    {/* <!-- HOME -->  JUmbo Tron Slider*/}
{/*     <section id="home" className="slider" data-stellar-background-ratio="0.5">
      <div className="row">
        <div className="owl-carousel owl-theme">
          <div className="item item-first">
            <div className="caption">
              <div className="container">
                <div className="col-sm-12">

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> */}

   {/* <!-- ABOUT --> */}
    <section id="about" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="about-info">
              <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
                <h4>Read our story</h4>
                <h2>Los Precios Más Competitivos De Todo El Valle!</h2>
              </div>

              <div className="wow fadeInUp" data-wow-delay="0.4s">
                <p>
                  Fusce hendrerit malesuada lacinia. Donec semper semper sem
                  vitae malesuada. Proin scelerisque risus et ipsum semper
                  molestie sed in nisi. Ut rhoncus congue lectus, rhoncus
                  venenatis leo malesuada id.
                </p>
                <p>
                  Sed elementum vel felis sed scelerisque. In arcu diam,
                  sollicitudin eu nibh ac, posuere tristique magna. You can use
                  this template for your cafe or restaurant website. Please tell
                  your friends about
                  <a href="https://plus.google.com/+templatemo" target="_parent">templatemo</a>Thank you.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="wow fadeInUp" data-wow-delay="0.6s">
           <center>
              <img src="https://media.v2.siweb.es/uploaded_thumb_big/6c2e7f094d11964e982b1a2f0c0d1ebf/mejor-precio-garantizado.png" className="img-responsive" alt="" width="300" height="300"/>
          </center>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- TEAM --> */}
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
              <img
                src="https://static.wixstatic.com/media/05cebb_3b4fff7ed435433daa807d67b502adfe~mv2.png/v1/fill/w_498,h_498,al_c,usm_0.66_1.00_0.01/05cebb_3b4fff7ed435433daa807d67b502adfe~mv2.png"
                className="img-responsive"
                alt=""
              />
              <div className="team-hover">
                <div className="team-item">
                  <h4>Duis vel lacus id magna mattis vehicula</h4>
                  <ul className="social-icon">
                    <li><a href="#" className="fa fa-linkedin-square"></a></li>
                    <li><a href="#" className="fa fa-envelope-o"></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="team-info">
              <h3>Vívires</h3>
              <p>Harinas, Salsas, Cereales</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
              <img
                src="https://aecocfront-resources.s3.eu-west-1.amazonaws.com/resources/public/1589390576573.jpg"
                className="img-responsive"
                alt=""
              />
              <div className="team-hover">
                <div className="team-item">
                  <h4>Cras suscipit neque quis odio feugiat</h4>
                  <ul className="social-icon">
                    <li><a href="#" className="fa fa-instagram"></a></li>
                    <li><a href="#" className="fa fa-flickr"></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="team-info">
              <h3>Charcuteria</h3>
              <p>Mortadela, Queso, Chorizo, Pollo</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
              <img
                src="https://st2.depositphotos.com/1063437/11520/i/600/depositphotos_115203820-stock-photo-bottles-of-assorted-hard-liquor.jpg"
                className="img-responsive"
                alt=""
              />
              <div className="team-hover">
                <div className="team-item">
                  <h4>Etiam auctor enim tristique faucibus</h4>
                  <ul className="social-icon">
                    <li><a href="#" className="fa fa-github"></a></li>
                    <li><a href="#" className="fa fa-google"></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="team-info">
              <h3>Licores</h3>
              <p>Ron, Wiskhy, Cerveza</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- MENU--> */}
    <section id="menu" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
              <h2>PRODUCTOS MAS VENDIDOS</h2>
              <h4>Productos con Mayor ConsumoS</h4>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            {/* <!-- MENU THUMB --> */}
            <div className="menu-thumb">
              <a
                href="https://primicia.com.ve/wp-content/uploads/2019/06/azucar.jpg"
                className="image-popup"
                title="Azucar"
              >
                <img
                  src="https://primicia.com.ve/wp-content/uploads/2019/06/azucar.jpg"
                  className="img-responsive"
                  alt=""
                />

                <div className="menu-info">
                  <div className="menu-item">
                    <h3>Azucar</h3>
                    <p>400gr / 700gr / 1000gr</p>
                  </div>
                  <div className="menu-price">
                    <span>$1</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            {/* <!-- MENU THUMB --> */}
            <div className="menu-thumb">
              <a
                href="https://dam.muyinteresante.com.mx/wp-content/uploads/2018/07/aceites-mas-sanos.jpg"
                className="image-popup"
                title="Aceite"
              >
                <img
                  src="https://dam.muyinteresante.com.mx/wp-content/uploads/2018/07/aceites-mas-sanos.jpg"
                  className="img-responsive"
                  alt=""
                />

                <div className="menu-info">
                  <div className="menu-item">
                    <h3>Aceite</h3>
                    <p>Vatel / Kaldini / Soya</p>
                  </div>
                  <div className="menu-price">
                    <span>$2,5</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            {/* <!-- MENU THUMB --> */}
            <div className="menu-thumb">
              <a
                href="https://www.tupanapanadero.com/wp-content/uploads/2020/03/belmont-1.jpeg"
                className="image-popup"
                title="Cigarros Belmont"
              >
                <img
                  src="https://www.tupanapanadero.com/wp-content/uploads/2020/03/belmont-1.jpeg"
                  className="img-responsive"
                  alt=""
                />

                <div className="menu-info">
                  <div className="menu-item">
                    <h3>Cigarros</h3>
                    <p>Vicerroy / Consul / Belmont</p>
                  </div>
                  <div className="menu-price">
                    <span>$2</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            {/* <!-- MENU THUMB --> */}
            <div className="menu-thumb">
              <a
                href="https://cdn.shopify.com/s/files/1/1044/8640/files/foto_3_1_04b7e680-9e2b-476a-85db-f63f32498fd4_large.jpg?v=1539889037"
                className="image-popup"
                title="Harina Pan"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/1044/8640/files/foto_3_1_04b7e680-9e2b-476a-85db-f63f32498fd4_large.jpg?v=1539889037"
                  className="img-responsive"
                  alt=""
                />

                <div className="menu-info">
                  <div className="menu-item">
                    <h3>Harina Pan</h3>
                    <p>Maiz / Arroz</p>
                  </div>
                  <div className="menu-price">
                    <span>$1,5</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            {/* <!-- MENU THUMB --> */}
            <div className="menu-thumb">
              <a
                href="https://c8.alamy.com/compes/c8w9d9/botellas-de-cloro-en-un-supermercado-el-martes-1-de-noviembre-de-2011-richard-b-levine-c8w9d9.jpg"
                className="image-popup"
                title="Clorox"
              >
                <img
                  src="https://c8.alamy.com/compes/c8w9d9/botellas-de-cloro-en-un-supermercado-el-martes-1-de-noviembre-de-2011-richard-b-levine-c8w9d9.jpg"
                  className="img-responsive"
                  alt=""
                />

                <div className="menu-info">
                  <div className="menu-item">
                    <h3>Liquidos</h3>
                    <p>Lavaplatos / Jabon Liquido / Cloro</p>
                  </div>
                  <div className="menu-price">
                    <span>$0,5</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            {/* <!-- MENU THUMB --> */}
            <div className="menu-thumb">
              <a
                href="https://st2.depositphotos.com/20397274/42911/i/1600/depositphotos_429118082-stock-photo-german-maggi-instant-sauce-packages.jpg"
                className="image-popup"
                title="Cubitos Maggi"
              >
                <img
                  src="https://st2.depositphotos.com/20397274/42911/i/1600/depositphotos_429118082-stock-photo-german-maggi-instant-sauce-packages.jpg"
                  className="img-responsive"
                  alt=""
                />

                <div className="menu-info">
                  <div className="menu-item">
                    <h3>Cubitos</h3>
                    <p>Maggi / Kalidini</p>
                  </div>
                  <div className="menu-price">
                    <span>$0,17</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- TESTIMONIAL --> */}
    {/* 
    <section id="testimonial" data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
              <h2>Testimonials</h2>
            </div>
          </div>

          <div className="col-md-offset-2 col-md-8 col-sm-12">
            <div className="owl-carousel owl-theme">
              <div className="item">
                <p>
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet. Maecenas faucibus mollis interdum ullamcorper nulla
                  non.
                </p>
                <div className="tst-author">
                  <h4>Digital Carlson</h4>
                  <span>Pharetra quam sit amet</span>
                </div>
              </div>

              <div className="item">
                <p>
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada fames ac turpis egestas. Sed vestibulum orci quam.
                </p>
                <div className="tst-author">
                  <h4>Johnny Stephen</h4>
                  <span>Magna nisi porta ligula</span>
                </div>
              </div>

              <div className="item">
                <p>
                  Vivamus aliquet felis eu diam ultricies congue. Morbi porta
                  lorem nec consectetur porta quis dui elit habitant morbi.
                </p>
                <div className="tst-author">
                  <h4>Jessie White</h4>
                  <span>Vitae lacinia augue urna quis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
 */}

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
          <div className="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
            <div id="google-map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d892.8607325256453!2d-63.890866385780974!3d10.987815184457428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sve!4v1609702153035!5m2!1ses!2sve" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
          </div>

          <div className="col-md-6 col-sm-12">
            <div className="col-md-12 col-sm-12">
              <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
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

        </Layout>
    )
}

export default Content
