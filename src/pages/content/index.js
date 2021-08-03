import './style.css';
import '../../index.css'
import {Fragment} from "react";

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
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 row-item">
                                        <div className="sticky-content">
                                            <header className="woocommerce-products-header">
                                                <h1 className="woocommerce-products-header_title page-title">Shop</h1>
                                            </header>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 row-item">
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
