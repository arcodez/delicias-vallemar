import Head from "next/head";
import React from "react";
import Menu from "../../src/components/Index/Menu";
import Layout from "../../src/components/Layout/Layout";

function charcuteria() {
  return (
    <Layout>
      <Head>
        <title>Charcuteria</title>
      </Head>
      <h1 className="Display-2 text-center text-uppercase">Charcuteria</h1>
      <Menu
        name1="Carne" price1=" " desc1=" "
        img1="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/03/20/150320172053_sp_jamon_serrano_624x351_thinkstock.jpg"
        name2="Jamon" price2="Ni puta Idea" desc2="Rebanado"
        img2="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/06/jamon.jpg"
        name3="Queso" price3="5900bsf" desc3="Duro \ Semi-salado "
        img3="https://autosysaludcom.files.wordpress.com/2019/07/queso-1-1.jpg?quality=80&strip=all"
        name4="Pollo" price4="5200bsf" desc4="Picado \ Muslo \ Pechuga"
        img4="https://www.hola.com/imagenes/cocina/recetas/20190729146642/pollo-asado-al-horno-con-tomillo/0-705-707/pollo-asado-horno-tomillo-m.jpg"
        name5="Mortadela" price5="5300bsf" desc5="Entera \ Rebanada"
        img5="https://elrancho.com.ec/wp-content/uploads/2020/02/mortadela-especial.jpg"
        name6="Carne Molida" price6="7200bsf" desc6="Embolsada"
        img6="https://i.pinimg.com/736x/aa/24/c8/aa24c8757bcc609c985583f7f8d3c3d5.jpg"
      />
    </Layout>
  );
}

export default charcuteria;
