import React from "react";
import Layout from "../src/components/Layout/Layout";
import Team from "../src/components/Index/Team";
import About from "../src/components/Index/About";
import Menu from "../src/components/Index/Menu";
import Head from "next/head";

function Content() {
  return (
    <Layout>
      <Head>
        <title>Delicias Vallemar</title>
        <meta name="title" content="Delicias Vallemar" />
        <meta name="google-site-verification" content="sqyMM9vfTwNQJLR2RbyP-Zyz_HzKXuFYHIt1uuztbnU" />
        <meta
          name="description"
          content="Estamos en El Valle del Espíritu Santo con la mejor ubicación y los mejores precios En productos como: Harina Pan, Arroz,  Azucar, Cigarros Cafe"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Delicias Vallemar" />
        <meta
          property="og:description"
          content="Estamos en El Valle del Espíritu Santo con la mejor ubicación y los mejores precios En productos como:
Harina Pan, Arroz,  Azucar, Cigarros Cafe"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Delicias Vallemar" />
        <meta
          property="twitter:description"
          content="Estamos en El Valle del Espíritu Santo con la mejor ubicación y los mejores precios En productos como: Harina Pan, Arroz,  Azucar, Cigarros Cafe"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>

      {/* <!-- ABOUT --> */}
      <About />
      {/* <!-- TEAM --> */}
      <Team />
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
          </div>
        </div>
      </section>
      <Menu />
    </Layout>
  );
}

export default Content;
