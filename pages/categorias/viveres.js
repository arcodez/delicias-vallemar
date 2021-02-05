import React from "react";
import Layout from "../../src/components/Layout/Layout";
import Menu from "../../src/components/Index/Menu";
import Head from "next/head";

function viveres() {
  return (
    <Layout titulo="Viveres">
    <Head>
      <title>Viveres</title>
    </Head>
      <h1 className="Display-2 text-center text-uppercase">Viveres</h1>
      <Menu
        name1="Harina Pan" price1="2050bsf" desc1="De Maiz \ De Arroz"
        img1="https://ipdvca.com/wp-content/uploads/2020/11/Harina-Pan.jpg"
        name2="Tomate" price2="1990 \ 5800 bsf" desc2="Salsa \ Natural"
        img2="https://www.hola.com/imagenes/cocina/recetas/20191015151566/recetas-salsas-basicas/0-732-846/salsas-basicas-m.jpg"
        name3="Espagueti" price3="2100bsf" desc3="Largo \ Corto"
        img3="https://image.freepik.com/foto-gratis/espagueti-crudo-close-up_449-19323094.jpg"
        name4="Arroz" price4="1780bsf" desc4="Doña Maria \ Mary"
        img4="https://image.freepik.com/foto-gratis/arroz-crudo-recipiente-arcilla-sobre-fondo-madera_127675-33.jpg"
        name5="Cafe" price5="1350 \ 2100 bsf" desc5="Arauca"
        img5="https://dam.ngenespanol.com/wp-content/uploads/2019/10/datos-sobre-el-cafe.jpg"
        name6="Pan" price6="300bsf" desc6="Canilla \ Dulce"
        img6="https://www.recetasdepan.net/wp-content/uploads/2019/05/Receta-de-pan-baguette.jpg"
      />
    </Layout>
  );
}

export default viveres;
