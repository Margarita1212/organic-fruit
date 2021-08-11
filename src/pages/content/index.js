import './style.css';
import '../../index.css'
import {Fragment} from "react";
import {AiOutlineStar} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa"
import {IoEye} from "react-icons/io5"
import {FiHeart} from "react-icons/fi";
import {BsArrowRight} from "react-icons/bs";

function Content() {
    return (
        <Fragment>
            <div id="vt-content" className="vt-site-content">
                <div className="container">
                    <div className="row">
                        <div id="vt-primary" className="vt-content-area">
                            <div className="col-12">
                                <nav className="woocommerce-breadcrumb">
                                    <a href="https://epsilonitservice.com/woo"> Home </a>
                                    > Shop
                                </nav>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 row-item">
                                        <div className="sticky-content">
                                            <header className="woocommerce-products-header">
                                                <h1 className="woocommerce-products-header_title page-title">Shop</h1>
                                            </header>
                                            <p className="woocommerce-result-count"> Showing 1-12 of 18 results</p>
                                            <div className="woocommerce-ordering">
                                                <select className="orderby">
                                                    <option value="menu_order">Default sorting</option>
                                                    <option value="popularity">Sort by popularity</option>
                                                    <option value="rating">Sort by average rating</option>
                                                    <option value="date">Sort by latest</option>
                                                    <option value="price">Sort by price: low to high</option>
                                                    <option value="price-desc">Sort by price: high to low</option>
                                                </select>
                                            </div>
                                            <ul className="products columns-3">
                                                <li className="product">
                                                    <div className="vt-poduct-box">
                                                        <div className="vt-product-image-area">
                                                            <div className="new-label new-top-right">Sale!</div>
                                                            <a className="product-image" title="Strawberry">
                                                                <img width="228" height="228"
                                                                     src="https://epsilonitservice.com/woo/wp-content/uploads/2021/03/16-1.png"
                                                                     alt="Organic fruit"
                                                                />
                                                            </a>
                                                            <div className="vt-product-link-area">
                                                                <ul className="vt-product-link-info">
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt_add_to_cart add_to_cart_button ajax_add_to_cart">
                                                                            <FaShoppingCart className="FaShoppingCart"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button link-quickview vt-wcqv-button yith-wcqv-button">
                                                                            <IoEye className="GrView"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt-link-wishlist link-wishlist">
                                                                            <FiHeart className="FiHeart"/>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-title">
                                                            <span className="vt-cat-name">STRAWBERRY</span>
                                                            <h3><a title="Perspiciatis Unde Omnis"
                                                                   href="https://epsilonitservice.com/woo/product/perspiciatis-unde-omnis-18/"
                                                            >Perspiciatis Unde Omnis</a></h3>
                                                        </div>
                                                        <div className="vt-product-rating">
                                                            <div className="woocommerce-product-rating">
                                                                <div className="star-rating">
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-price">
                                                            <span className="price">
                                                                <del>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            35
                                                                        </bdi>
                                                                    </span>
                                                                </del>
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            25
                                                                        </bdi>
                                                                    </span>
                                                                </ins>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product">
                                                    <div className="vt-poduct-box">
                                                        <div className="vt-product-image-area">
                                                            <div className="new-label new-top-right">Sale!</div>
                                                            <a className="product-image" title="Mango">
                                                                <img width="228" height="228"
                                                                     src="https://epsilonitservice.com/woo/wp-content/uploads/2021/03/7-1.png"
                                                                     alt="Organic fruit"
                                                                />
                                                            </a>
                                                            <div className="vt-product-link-area">
                                                                <ul className="vt-product-link-info">
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt_add_to_cart add_to_cart_button ajax_add_to_cart">
                                                                            <FaShoppingCart className="FaShoppingCart"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button link-quickview vt-wcqv-button yith-wcqv-button">
                                                                            <IoEye className="GrView"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt-link-wishlist link-wishlist">
                                                                            <FiHeart className="FiHeart"/>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-title">
                                                            <span className="vt-cat-name">MANGO</span>
                                                            <h3><a title="Perspiciatis Unde Omnis"
                                                                   href="https://epsilonitservice.com/woo/product/perspiciatis-unde-omnis-18/"
                                                            >Perspiciatis Unde Omnis</a></h3>
                                                        </div>
                                                        <div className="vt-product-rating">
                                                            <div className="woocommerce-product-rating">
                                                                <div className="star-rating">
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/></div>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-price">
                                                            <span className="price">
                                                                <del>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            35
                                                                        </bdi>
                                                                    </span>
                                                                </del>
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            25
                                                                        </bdi>
                                                                    </span>
                                                                </ins>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product">
                                                    <div className="vt-poduct-box">
                                                        <div className="vt-product-image-area">
                                                            <div className="new-label new-top-right">Sale!</div>
                                                            <a className="product-image" title="Strawberry">
                                                                <img width="228" height="228"
                                                                     src="https://epsilonitservice.com/woo/wp-content/uploads/2021/03/16-1.png"
                                                                     alt="Organic fruit"
                                                                />
                                                            </a>
                                                            <div className="vt-product-link-area">
                                                                <ul className="vt-product-link-info">
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt_add_to_cart add_to_cart_button ajax_add_to_cart">
                                                                            <FaShoppingCart className="FaShoppingCart"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button link-quickview vt-wcqv-button yith-wcqv-button">
                                                                            <IoEye className="GrView"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt-link-wishlist link-wishlist">
                                                                            <FiHeart className="FiHeart"/>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-title">
                                                            <span className="vt-cat-name">Strawberry</span>
                                                            <h3><a title="Perspiciatis Unde Omnis"
                                                                   href="https://epsilonitservice.com/woo/product/perspiciatis-unde-omnis-18/"
                                                            >Perspiciatis Unde Omnis</a></h3>
                                                        </div>
                                                        <div className="vt-product-rating">
                                                            <div className="woocommerce-product-rating">
                                                                <div className="star-rating">
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/></div>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-price">
                                                            <span className="price">
                                                                <del>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            35
                                                                        </bdi>
                                                                    </span>
                                                                </del>
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            25
                                                                        </bdi>
                                                                    </span>
                                                                </ins>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="products columns-3">
                                                <li className="product">
                                                    <div className="vt-poduct-box">
                                                        <div className="vt-product-image-area">
                                                            <div className="new-label new-top-right">Sale!</div>
                                                            <a className="product-image" title="Strawberry">
                                                                <img width="228" height="228"
                                                                     src="https://epsilonitservice.com/woo/wp-content/uploads/2021/03/16-1.png"
                                                                     alt="Organic fruit"
                                                                />
                                                            </a>
                                                            <div className="vt-product-link-area">
                                                                <ul className="vt-product-link-info">
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt_add_to_cart add_to_cart_button ajax_add_to_cart">
                                                                            <FaShoppingCart className="FaShoppingCart"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button link-quickview vt-wcqv-button yith-wcqv-button">
                                                                            <IoEye className="GrView"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt-link-wishlist link-wishlist">
                                                                            <FiHeart className="FiHeart"/>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-title">
                                                            <span className="vt-cat-name">STRAWBERRY</span>
                                                            <h3><a title="Perspiciatis Unde Omnis"
                                                                   href="https://epsilonitservice.com/woo/product/perspiciatis-unde-omnis-18/"
                                                            >Perspiciatis Unde Omnis</a></h3>
                                                        </div>
                                                        <div className="vt-product-rating">
                                                            <div className="woocommerce-product-rating">
                                                                <div className="star-rating">
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-price">
                                                            <span className="price">
                                                                <del>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            35
                                                                        </bdi>
                                                                    </span>
                                                                </del>
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            25
                                                                        </bdi>
                                                                    </span>
                                                                </ins>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product">
                                                    <div className="vt-poduct-box">
                                                        <div className="vt-product-image-area">
                                                            <div className="new-label new-top-right">Sale!</div>
                                                            <a className="product-image" title="Mango">
                                                                <img width="228" height="228"
                                                                     src="https://epsilonitservice.com/woo/wp-content/uploads/2021/03/7-1.png"
                                                                     alt="Organic fruit"
                                                                />
                                                            </a>
                                                            <div className="vt-product-link-area">
                                                                <ul className="vt-product-link-info">
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt_add_to_cart add_to_cart_button ajax_add_to_cart">
                                                                            <FaShoppingCart className="FaShoppingCart"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button link-quickview vt-wcqv-button yith-wcqv-button">
                                                                            <IoEye className="GrView"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt-link-wishlist link-wishlist">
                                                                            <FiHeart className="FiHeart"/>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-title">
                                                            <span className="vt-cat-name">MANGO</span>
                                                            <h3><a title="Perspiciatis Unde Omnis"
                                                                   href="https://epsilonitservice.com/woo/product/perspiciatis-unde-omnis-18/"
                                                            >Perspiciatis Unde Omnis</a></h3>
                                                        </div>
                                                        <div className="vt-product-rating">
                                                            <div className="woocommerce-product-rating">
                                                                <div className="star-rating">
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/></div>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-price">
                                                            <span className="price">
                                                                <del>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            35
                                                                        </bdi>
                                                                    </span>
                                                                </del>
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            25
                                                                        </bdi>
                                                                    </span>
                                                                </ins>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="product">
                                                    <div className="vt-poduct-box">
                                                        <div className="vt-product-image-area">
                                                            <div className="new-label new-top-right">Sale!</div>
                                                            <a className="product-image" title="Strawberry">
                                                                <img width="228" height="228"
                                                                     src="https://epsilonitservice.com/woo/wp-content/uploads/2021/03/16-1.png"
                                                                     alt="Organic fruit"
                                                                />
                                                            </a>
                                                            <div className="vt-product-link-area">
                                                                <ul className="vt-product-link-info">
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt_add_to_cart add_to_cart_button ajax_add_to_cart">
                                                                            <FaShoppingCart className="FaShoppingCart"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button link-quickview vt-wcqv-button yith-wcqv-button">
                                                                            <IoEye className="GrView"/>
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"
                                                                           className="button vt-link-wishlist link-wishlist">
                                                                            <FiHeart className="FiHeart"/>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-title">
                                                            <span className="vt-cat-name">Strawberry</span>
                                                            <h3>
                                                                <a title="Perspiciatis Unde Omnis"
                                                                   href="https://epsilonitservice.com/woo/product/perspiciatis-unde-omnis-18/"
                                                                >Perspiciatis Unde Omnis
                                                                </a>

                                                            </h3>
                                                        </div>
                                                        <div className="vt-product-rating">
                                                            <div className="woocommerce-product-rating">
                                                                <div className="star-rating">
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/>
                                                                    <AiOutlineStar className="AiOutlineStar"/></div>
                                                            </div>
                                                        </div>
                                                        <div className="vt-product-price">
                                                            <span className="price">
                                                                <del>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            35
                                                                        </bdi>
                                                                    </span>
                                                                </del>
                                                                <ins>
                                                                    <span className="woocommerce-Price-amount amount">
                                                                        <bdi>
                                                                            <span
                                                                                className="woocommerce-Price-currencySymbol">
                                                                                $
                                                                            </span>
                                                                            25
                                                                        </bdi>
                                                                    </span>
                                                                </ins>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="row">

                                                <nav className="woocommerce-pagination">
                                                    <ul>
                                                        <li><span className="page-numbers">1</span></li>
                                                        <li><a className="page-numbers"
                                                               href="https://epsilonitservice.com/woo/shop/page/2/">2</a>
                                                        </li>
                                                        <li><a className="page-numbers"
                                                               href="https://epsilonitservice.com/woo/shop/page/2/">
                                                            <BsArrowRight/>
                                                        </a></li>
                                                    </ul>
                                                </nav>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 row-item">
                                        <aside id="vt-sidebar" className="vt-custom-sidebar" role="complementary">
                                            <section className="widget clearfix woocommerce widget_price_filter">
                                                <h3>Filter By Price</h3>
                                                <div className="price_slider_wrapper">
                                                    <div className="price_slider ul-slider"></div>
                                                    <div className="price_slider_amount">
                                                        <button type="submit" className="button">Filter</button>
                                                        <div className="price_label">
                                                            Price
                                                            <span className="from">$0</span>
                                                            -
                                                            <span className="to">$90</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                            <section></section>
                                            <section></section>
                                            <section></section>
                                        </aside>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Content;
