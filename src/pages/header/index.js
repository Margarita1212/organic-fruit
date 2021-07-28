import './style.css';
import {AiOutlineMobile} from "react-icons/ai";
import {BsTablet} from "react-icons/bs";
import {AiOutlineDesktop} from "react-icons/ai";
import {ImHeart} from "react-icons/im";

function Header() {
    return (
        <div className="header">
            <a href="https://www.templatemonster.com/woocommerce-themes/organic-fruit-woocommerce-multipurpose-theme-176332.html"
               className="back-to-product">
                <span className="back-to-product-icon"/>
                Organic Fruit - WooCommerce Multipurpose Theme
            </a>
            <div className="devices devices-static">
                <button type="button" className="device-btn device-btn_smartphone" title="Mobile">
                    <AiOutlineMobile className="device-icon"/>
                </button>
                <button type="button" className="device-btn device-btn_tablet" title="Tablet">
                    <BsTablet className="device-icon"/>
                </button>
                <button type="button" className="device-btn device-btn_desktop" title="Desktop">
                    <AiOutlineDesktop className="device-icon"/>
                </button>
            </div>
            <div className="header-buttons">
                <div className="add-to-cart">
                    <button type="button" className="header-btn header-btn_services">
                        <span className="header-btn_services-label">
                            Popular Services
                        </span>
                    </button>
                    <div className="cart-container"></div>
                    <a href="https://www.templatemonster.com/cart/?products=176332&license=19&channel=tm2-live_demo"
                    className="btn btn_2 btn-block add-to-cart-button header-btn header-btn_cart">
                        Buy Now for $39
                    </a>
                </div>
                <span className="header-btn_membershipBefore">or</span>
                <a href="https://www.templatemonster.com/monsterone/tm-membership/?id=176332?tmaff=infiapp&_gl=1*hfu1p3*_ga*MjA5MjgyMzgwOC4xNjI3NDYyODU4*_ga_FTPYEGT5LY*MTYyNzQ3MDMyNC4yLjEuMTYyNzQ3MDM0My40MQ..&_ga=2.2036083.331085536.1627462860-2092823808.1627462858"
                   target
                   className="header-btn header-btn_membership">
                    Get Unlimited Downloads
                </a>
                <div className="favorite">
                    <button type="button" className="product-set-favorite btn btn-icon"
                            data-title="Add to Favorites" data-active-title="Remove from Favorites">
                        <ImHeart className="favorite-icon"/>
                    </button>
                </div>
                <div className="frame-toggler">
                    <button type="button" className="frame-toggler-btn" title="Hide Panel">
                        <span className="frame-toggler-btn-icon"/>
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Header;
