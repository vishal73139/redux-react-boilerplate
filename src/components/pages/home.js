import React from 'react'; 
import { Link } from "react-router-dom";

import Masonry from 'react-masonry-component';

const masonryOptions = {
    transitionDuration: 0
};


import searchImage from "../../img/core-img/search.png";
import logoImage from "../../img/core-img/logo.png";
import cartImage from "../../img/core-img/cart.png";
import favImage from "../../img/core-img/favorites.png";

import productImage from "../../img/bg-img/1.jpg";
import productImage2 from "../../img/bg-img/2.jpg";
import productImage3 from "../../img/bg-img/3.jpg";
import productImage4 from "../../img/bg-img/4.jpg";
import productImage5 from "../../img/bg-img/5.jpg";
import productImage6 from "../../img/bg-img/6.jpg";
import productImage7 from "../../img/bg-img/7.jpg";
import productImage8 from "../../img/bg-img/8.jpg";
import productImage9 from "../../img/bg-img/9.jpg";
 

const Home = () => ( 
	<div>
  <div className="search-wrapper section-padding-100">
        <div className="search-close">
            <i className="fa fa-close" aria-hidden="true"></i>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="search-content">
                        <form action="#" method="get">
                            <input type="search" name="search" id="search" placeholder="Type your keyword..." />
                            <button type="submit"><img src={searchImage} alt="" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="main-content-wrapper d-flex clearfix">
 
        <div className="mobile-nav"> 
            <div className="amado-navbar-brand">
                <a href="index.html"><img src={logoImage} alt="" /></a>
            </div> 
            <div className="amado-navbar-toggler">
                <span></span><span></span><span></span>
            </div>
        </div>
 
        <header className="header-area clearfix"> 
            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true"></i>
            </div> 
            <div className="logo">
                <a href="index.html"><img src={logoImage} alt="" /></a>
            </div> 
            <nav className="amado-nav">
                <ul>
                    <li className="active"><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/">Product</Link></li>
                    <li><Link to="/">Cart</Link></li>
                    <li><Link to="/">Checkout</Link></li>
                </ul>
            </nav> 
            <div className="amado-btn-group mt-30 mb-100">
                <a href="#" className="btn amado-btn mb-15">%Discount%</a>
                <a href="#" className="btn amado-btn active">New this week</a>
            </div> 
            <div className="cart-fav-search mb-100">
                <a href="cart.html" className="cart-nav"><img src={cartImage} alt="" /> Cart <span>(0)</span></a>
                <a href="#" className="fav-nav"><img src={favImage} alt="" /> Favourite</a>
                <a href="#" className="search-nav"><img src={searchImage} alt="" /> Search</a>
            </div> 
            <div className="social-info d-flex justify-content-between">
                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>  

        <div className="products-catagories-area clearfix">
           <Masonry
            className={'amado-pro-catagory'} 
            options={masonryOptions} 
        >
                <div className="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={productImage} alt="" /> 
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </a>
                </div> 
                <div className="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={productImage2} alt="" /> 
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $180</p>
                            <h4>Minimalistic Plant Pot</h4>
                        </div>
                    </a>
                </div>
                <div className="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={productImage3} alt="" /> 
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $180</p>
                            <h4>Modern Chair</h4>
                        </div>
                    </a>
                </div> 
                <div className="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={productImage4} alt="" /> 
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $180</p>
                            <h4>Night Stand</h4>
                        </div>
                    </a>
                </div> 
                <div className="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={productImage5} alt="" /> 
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $18</p>
                            <h4>Plant Pot</h4>
                        </div>
                    </a>
                </div> 
                <div className="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={productImage6} alt="" /> 
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $320</p>
                            <h4>Small Table</h4>
                        </div>
                    </a>
                </div> 
                <div className="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={productImage7} alt="" /> 
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $318</p>
                            <h4>Metallic Chair</h4>
                        </div>
                    </a>
                </div> 
                <div className="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={productImage8} alt="" /> 
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $318</p>
                            <h4>Modern Rocking Chair</h4>
                        </div>
                    </a>
                </div> 
                <div className="single-products-catagory clearfix">
                    <a href="shop.html">
                        <img src={productImage9} alt="" /> 
                        <div className="hover-content">
                            <div className="line"></div>
                            <p>From $318</p>
                            <h4>Home Deco</h4>
                        </div>
                    </a>
                </div>
            </Masonry>
        </div> 
        </div></div>
)

export default Home;
