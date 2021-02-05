import React from "react";

export default function Menu(props) {
  return (
    <>
      <section id="menu" data-stellar-background-ratio="0.5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              {/* <!-- MENU THUMB --> */}
              <div className="menu-thumb">
                <a
                  href={
                    props.img1 ||
                    "https://primicia.com.ve/wp-content/uploads/2019/06/azucar.jpg"
                  }
                  className="image-popup"
                  title="Azucar"
                >
                  <img
                    src={
                      props.img1 ||
                      "https://primicia.com.ve/wp-content/uploads/2019/06/azucar.jpg"
                    }
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>{ props.name1 || "Azucar"}</h3>
                      <p>{ props.desc1 || "400gr / 700gr / 1000gr"}</p>
                    </div>
                    <div className="menu-price">
                      <span>{ props.price1 || "$1"}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              {/* <!-- MENU THUMB --> */}
              <div className="menu-thumb">
                <a
                  href={
                    props.img2 ||
                    "https://dam.muyinteresante.com.mx/wp-content/uploads/2018/07/aceites-mas-sanos.jpg"
                  }
                  className="image-popup"
                  title="Aceite"
                >
                  <img
                    src={
                      props.img2 ||
                      "https://dam.muyinteresante.com.mx/wp-content/uploads/2018/07/aceites-mas-sanos.jpg"
                    }
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>{ props.name2 || "Aceite"}</h3>
                      <p>{ props.desc2 || "Vatel / Kaldini / Soya"}</p>
                    </div>
                    <div className="menu-price">
                      <span>{ props.price2 || "$2,5"}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              {/* <!-- MENU THUMB --> */}
              <div className="menu-thumb">
                <a
                  href={
                    props.img3 ||
                    "https://www.elfinanciero.com.mx/uploads/2020/04/02/a0205b87491585888360_standard_desktop_medium_retina.webp"
                  }
                  className="image-popup"
                  title="Cigarros"
                >
                  <img
                    src={
                      props.img3 ||
                      "https://www.elfinanciero.com.mx/uploads/2020/04/02/a0205b87491585888360_standard_desktop_medium_retina.webp"
                    }
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>{props.name3 || "Cigarros"}</h3>
                      <p>{props.desc3 || "Vicerroy / Consul / Belmont"}</p>
                    </div>
                    <div className="menu-price">
                      <span>{props.price3 || "$2"}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              {/* <!-- MENU THUMB --> */}
              <div className="menu-thumb">
                <a
                  href={
                    props.img4 ||
                    "https://cdn.shopify.com/s/files/1/1044/8640/files/foto_3_1_04b7e680-9e2b-476a-85db-f63f32498fd4_large.jpg?v=1539889037"
                  }
                  className="image-popup"
                  title="Harina Pan"
                >
                  <img
                    src={
                      props.img4 ||
                      "https://cdn.shopify.com/s/files/1/1044/8640/files/foto_3_1_04b7e680-9e2b-476a-85db-f63f32498fd4_large.jpg?v=1539889037"
                    }
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>{props.name4 || "Harina Pan"}</h3>
                      <p>{props.desc4 || "Maiz / Arroz"}</p>
                    </div>
                    <div className="menu-price">
                      <span>{props.price4 || "$1,5"}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              {/* <!-- MENU THUMB --> */}
              <div className="menu-thumb">
                <a
                  href={
                    props.img5 ||
                    "https://c8.alamy.com/compes/c8w9d9/botellas-de-cloro-en-un-supermercado-el-martes-1-de-noviembre-de-2011-richard-b-levine-c8w9d9.jpg"
                  }
                  className="image-popup"
                  title="Clorox"
                >
                  <img
                    src={
                      props.img5 ||
                      "https://c8.alamy.com/compes/c8w9d9/botellas-de-cloro-en-un-supermercado-el-martes-1-de-noviembre-de-2011-richard-b-levine-c8w9d9.jpg"
                    }
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>{props.name5 || "Liquidos"}</h3>
                      <p>{props.desc5 || "Lavaplatos / Jabon Liquido / Cloro"}</p>
                    </div>
                    <div className="menu-price">
                      <span>{props.price5 || "$0,5"}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              {/* <!-- MENU THUMB --> */}
              <div className="menu-thumb">
                <a
                  href={
                    props.img6 ||
                    "https://st2.depositphotos.com/20397274/42911/i/1600/depositphotos_429118082-stock-photo-german-maggi-instant-sauce-packages.jpg"
                  }
                  className="image-popup"
                  title="Cubitos Maggi"
                >
                  <img
                    src={
                      props.img6 ||
                      "https://st2.depositphotos.com/20397274/42911/i/1600/depositphotos_429118082-stock-photo-german-maggi-instant-sauce-packages.jpg"
                    }
                    className="img-responsive"
                    alt=""
                  />

                  <div className="menu-info">
                    <div className="menu-item">
                      <h3>{props.name6 || "Cubitos"}</h3>
                      <p>{props.desc6 || "Maggi / Kalidini"}</p>
                    </div>
                    <div className="menu-price">
                      <span>{props.price6 || "$0,17"}</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
