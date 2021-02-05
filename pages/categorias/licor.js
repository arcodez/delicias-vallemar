import Head from "next/head";
import React from "react";
import Menu from "../../src/components/Index/Menu";
import Layout from "../../src/components/Layout/Layout";

function licor() {
  return (
    <Layout>
      <Head>
      <title>Licores</title>
      </Head>
      <h1 className="Display-2 text-center text-uppercase">Viveres</h1>
      <div className="container text-center">
        <h1>Los Mejores Precios en licores que hay</h1>
      </div>
      <Menu
        img1="https://st2.depositphotos.com/1063437/11520/i/600/depositphotos_115203820-stock-photo-bottles-of-assorted-hard-liquor.jpg"
        img2="https://static.iris.net.co/finanzas/upload/images/2016/9/9/65040_1.jpg"
        img3="https://www.mgdestiladosylicores.com/wp-content/uploads/2017/01/historia-del-licor.jpg"
        img4="https://www.cocinayvino.com/wp-content/uploads/2018/04/62130665_m-696x464.jpg"
        img5="https://www.mastercardbiz.com/content/uploads/sites/8/2019/11/assorted-wine-bottles-1283219.jpg"
        img6="https://thumbs.dreamstime.com/b/botellas-de-las-bebidas-los-licores-rhum-gin-alcohol-vodkas-102621812.jpg"
      />
    </Layout>
  );
}

export default licor;
