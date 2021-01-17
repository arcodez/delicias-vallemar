import React from 'react'
import Carousel from './Carousel'
import Links from './Links'

function Navbar() {
    return (
        <>
            <Links />
          {/*   <!-- PRE LOADER --> */}
    <section className="preloader">
      <div className="spinner">
        <span className="spinner-rotate"></span>
      </div>
    </section>


            {/* <!-- MENU --> */}
            <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
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
                        <a href="index.html" className="navbar-brand">Delicias <span>.</span> Vallemar</a>

                    </div>

                    {/* <!-- MENU LINKS --> */}
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-nav-first">
                            <li><a href="#home" className="smoothScroll">Home</a></li>
                            <li><a href="#about" className="smoothScroll">About</a></li>
                            <li><a href="#team" className="smoothScroll">Productos</a></li>
                            <li><a href="#menu" className="smoothScroll">Mas Vendidos</a></li>
                            <li><a href="#contact" className="smoothScroll">Contact</a></li>
                        </ul>

                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="tel:0414-093-7325"
                                >Llame ahora! <i className="fa fa-phone"></i> 0414 093 7325
                </a>
                            </li>
                            <a href="#footer" className="section-btn">Reserve a table</a>
                        </ul>
                    </div>
                </div>
            </section>
<Carousel />
        </>
    )
}

export default Navbar
