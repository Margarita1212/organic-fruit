import './style.css';
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaAngleDown} from "react-icons/fa";
import {BiSearch} from "react-icons/bi";
import {FiHeart} from "react-icons/fi";
import {HiShoppingBag} from "react-icons/hi";
import {FaUser} from "react-icons/fa";

function Header() {
    return (
        <>
            <div id="main-header" className="site-header vt-header">
                <div className="vt-topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 row-item">
                                <div className="vt-welcome-text">
                                    <p>
                                        <FaMapMarkerAlt/>
                                        Are You Looking For A Best Deal?
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 row-item">
                                <div className="vt-topbar-right">
                                    <ul className="vt-topbar-right-menu">
                                        <li className="myaccount-list">
                                            <a className="myaccount" href="https://epsilonitservice.com/woo/my-account/"
                                               title="My Account">
                                                My Account
                                                <FaAngleDown className="angle-down" spin/>
                                            </a>
                                            <ul className="myacc-list-dropdown">
                                                <li>
                                                    <a className="myacc-list-dropdown"
                                                       href="https://epsilonitservice.com/woo/my-account/">
                                                        <FaUser className="FaName"/> Login / Register
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="vt-language">
                                            <div className="switcher notranslate">
                                                <a href="#">
                                                    <img
                                                        src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/en.png"
                                                        height="24" width="24" alt="en"/>
                                                    English
                                                    <FaAngleDown className="angle-down"/>
                                                    <div className="option">
                                                        <a href="#" title="Arabic">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/ar.png"
                                                                height="24" width="24" alt="ar"/>
                                                            Arabic
                                                        </a>
                                                        <a href="#" title="Chinese (Simplified)">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/zh-CN.png"
                                                                height="24" width="24" alt="zh-CN"/>
                                                            Chinese (Simplified)
                                                        </a>
                                                        <a href="#" title="Dutch">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/nl.png"
                                                                height="24" width="24" alt="nl"/>
                                                            Dutch
                                                        </a>
                                                        <a href="#" title="English">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/en.png"
                                                                height="24" width="24" alt="en"/>
                                                            English
                                                        </a>
                                                        <a href="#" title="French">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/fr.png"
                                                                height="24" width="24" alt="fr"/>
                                                            French
                                                        </a>
                                                        <a href="#" title="German">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/de.png"
                                                                height="24" width="24" alt="de"/>
                                                            German
                                                        </a>
                                                        <a href="#" title="Italian">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/it.png"
                                                                height="24" width="24" alt="it"/>
                                                            Italian
                                                        </a>
                                                        <a href="#" title="Portuguese">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/pt.png"
                                                                height="24" width="24" alt="pt"/>
                                                            Portuguese
                                                        </a>
                                                        <a href="#" title="Russian">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/ru.png"
                                                                height="24" width="24" alt="ru"/>
                                                            Russian
                                                        </a>
                                                        <a href="#" title="Spanish">
                                                            <img
                                                                src="https://epsilonitservice.com/woo/wp-content/plugins/gtranslate/flags/24/es.png"
                                                                height="24" width="24" alt="es"/>
                                                            Spanish
                                                        </a>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li className="vt-currency">
                                            <div className="chosen-container">
                                                <a href="#">
                                                    USD
                                                    <FaAngleDown className="angle-down"/>
                                                    <div className="chosen-drop">
                                                        <ul className="chosen-results">
                                                            <li>USD</li>
                                                            <li>EUR</li>
                                                            <li>GBP</li>
                                                            <li>AUD</li>
                                                            <li>INR</li>
                                                        </ul>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vt-header-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12 row-item">
                                <div className="vt-header-logo">
                                    <a href="https://epsilonitservice.com/woo/">
                                        <img width="107" height="39"
                                             src="https://epsilonitservice.com/woo/wp-content/uploads/2021/03/site-logo.png"
                                             className="custom-logo" alt="organic fruit"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 row-item">
                                <div className="vt-custom-searchbar">
                                    <div className="vt-custom-advance-search">
                                        <div className="vt-search-select-cat">
                                            <select className="vt-search-product">
                                                <option> All Categories</option>
                                                <option data-tokens="aloo" value="aloo">Aloo Bukhara</option>
                                                <option data-tokens="apple" value="apple">Apple</option>
                                                <option data-tokens="banana" value="banana">Banana</option>
                                                <option data-tokens="grapes" value="grapes">Grapes</option>
                                                <option data-tokens="guava" value="guava">Guava</option>
                                                <option data-tokens="lemon" value="lemon">Lemon</option>
                                                <option data-tokens="mango" value="mango">Mango</option>
                                                <option data-tokens="organic" value="organic">Organic</option>
                                                <option data-tokens="strawberry" value="strawberry">Strawberry</option>
                                                <option data-tokens="sweetlime" value="sweetlime">Sweet lime</option>
                                            </select>
                                        </div>
                                        <div className="vt-search-form">
                                            <input type="text" placeholder="Search store product here"/>
                                            <button type="button" id="searchsubmit">
                                                <BiSearch className="searchbar"/>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 row-item">
                                <div className="vt-woo-cart-list">
                                    <ul className="vt-wc">
                                        <li className="vt-wc-list">
                                            <a className="vt-quick-wishlist" href="wishlist"></a>
                                            <FiHeart className="FiHeart" size="25px" title="Wishlist"/>
                                            <span>0</span>
                                        </li>
                                        <li className="vt-wc-list">
                                            <a className="vt-cart-contents"
                                               href="https://epsilonitservice.com/woo/cart/"
                                            />
                                            <HiShoppingBag className="HiShoppingBag" size="25px"
                                                           title="View your shopping cart"/>
                                            <span>0</span>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <nav id="vt-primary-navigation" className=" vt-main-navigation">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="primary-navigation">
                                    <ul id="primary-menu" className="menu">
                                        <li><a href="https://epsilonitservice.com/woo/">HOME</a></li>
                                        <li><a href="https://epsilonitservice.com/woo/shop/">SHOP</a></li>
                                        <li>
                                            <a href="#">PAGES
                                                <FaAngleDown className="angle-down" spin/>
                                            </a>
                                            <ul className="sub-menu">
                                                <li className="menu-item"><a href="https://epsilonitservice.com/woo/cart/">CART</a></li>
                                                <li className="menu-item"><a href="https://epsilonitservice.com/woo/checkout/">CHECKOUT</a></li>
                                                <li className="menu-item"><a href="https://epsilonitservice.com/woo/wishlist/">WISHLIST</a></li>
                                                <li className="menu-item"><a href="https://epsilonitservice.com/woo/my-account/">MY ACCOUNT</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://epsilonitservice.com/woo/blog/category/blog/">BLOG</a></li>
                                        <li><a href="https://epsilonitservice.com/woo/about-us/">ABOUT US</a></li>
                                        <li><a href="https://epsilonitservice.com/woo/contact-us/">CONTACT US</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </nav>


            </div>
        </>
    );
}

export default Header;
