import React from "react";
import Carousel from "./Carousel";
import Links from "./Links";
import Link from "next/link";

function Navbar() {
  return (
    <>
      {/* Agregar al Navbar una condicional para varios Navbar */}

      <Links />

      {/* <!-- MENU --> */}
      <section
        className="navbar custom-navbar navbar-fixed-top"
        role="navigation"
      >
        <div className="container">
          <div className="navbar-header">
            <button
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
              <span className="icon icon-bar"></span>
            </button>

            {/* <!-- lOGO TEXT HERE --> */}
            <Link href="/">
              <a className="navbar-brand">
                Delicias <span>.</span> Vallemar
              </a>
            </Link>
          </div>

          {/* <!-- MENU LINKS --> */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-nav-first">
              <li>
                <Link href="/about" className="smoothScroll">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/categorias" className="smoothScroll">
                <a>
                Categorias
                </a>
                </Link>
              </li>
{/*               <li>
                <a href="#menu" className="smoothScroll">
                  Mas Vendidos
                </a>
              </li> */}
              <li>
                <Link href="/contact" className="smoothScroll">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="tel:04140937325">
                  Llame ahora! <i className="fa fa-phone"></i> 0414 093 7325
                </a>
              </li>
              <a href="tel:04140937325" className="section-btn">
                Marca Ya!
              </a>
            </ul>
          </div>
        </div>
      </section>
      <Carousel />
    </>
  );
}

export default Navbar;
