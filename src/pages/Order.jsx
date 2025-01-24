import { Link } from "react-router-dom";
import drink2 from "../images/drink2.jpg";
import main6 from "../images/main6.jpg";
import side3 from "../images/side3.jpg";

const Order = () => {
    return (
        <>
            <div className="order-to-payment-map">
                <span> <Link to="/">Veiw Our Menu</Link> <i className="fa-solid fa-angles-right" style={{color: "#3f762c"}}></i> <Link to="/order" id="payment-map-active">Your Order</Link> <i className="fa-solid fa-angles-right" style={{color: "#3f762c"}}></i> <Link to="/checkout">Payment </Link></span>
            </div>
            <h3 className="order-title display-5 mb-2 text-center">Your Order</h3>
            <div className="num-items-in-cart mb-5 text-center">
                <p> 3 items in your cart</p>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <aside className="col-lg-9">
                        <div className="card">
                            <div className="table-responsive">
                                <table id="Veiw-order" className="table table-condensed table-responsive">
                                    <thead>
                                        <tr>
                                            <th style={{width: "60%"}}>Menu Item</th>
                                            <th style={{width: "12%"}}>Price</th>
                                            <th style={{width: "10%"}}>Quantity</th>
                                            <th style={{width: "16%"}}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td data-th="Product">
                                                <div className="order-product row align-items-center">
                                                    <div className="col-md-3 text-left">
                                                        <img src={drink2} alt="" className="img-fluid d-none d-md-block mb-2 shadow"/>
                                                    </div>
                                                    <div className="col-md-9 text-left mt-sm-2">
                                                        <h4>Menu Item</h4>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, conse</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-th="Price" className="order-price" >$1049.00</td>
                                            <td data-th="Quantity">
                                                <input type="number" className="form-control form-control-lg text-center" value="1"/>
                                            </td>
                                            <td className="actions" data-th="">
                                                <div className="text-right">
                                                    <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                        <i className="fas fa-sync"></i>
                                                    </button>
                                                    <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-th="Product">
                                                <div className="order-product row align-items-center">
                                                    <div className="col-md-3 text-left">
                                                        <img src={side3} alt="" className="img-fluid d-none d-md-block mb-2 shadow "/>
                                                    </div>
                                                    <div className="col-md-9 text-left mt-sm-2">
                                                        <h4>Menu Item</h4>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, conse</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-th="Price">$1049.00</td>
                                            <td data-th="Quantity">
                                                <input type="number" className="form-control form-control-lg text-center" value="1"/>
                                            </td>
                                            <td className="actions" data-th="">
                                                <div className="text-right">
                                                    <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                        <i className="fas fa-sync"></i>
                                                    </button>
                                                    <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td data-th="Product">
                                                <div className="order-product row align-items-center">
                                                    <div className="col-md-3 text-left">
                                                        <img src={main6} alt="" className="img-fluid d-none d-md-block mb-2 shadow "/>
                                                    </div>
                                                    <div className="col-md-9 text-left mt-sm-2">
                                                        <h4>Menu Item</h4>
                                                        <p className="card-text">Lorem ipsum dolor sit amet, conse</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td data-th="Price" className="order-price">$1000.00</td>
                                            <td data-th="Quantity">
                                                <input type="number" className="form-control form-control-lg text-center" value="1"/>
                                            </td>
                                            <td className="actions" data-th="">
                                                <div className="text-right">
                                                    <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                        <i className="fas fa-sync"></i>
                                                    </button>
                                                    <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </aside>
                    <aside className="col-lg-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="coupon">Have coupon?</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control coupon" name="coupon" placeholder="Coupon code"/>
                                            <span className="input-group-append"> <button className="btn btn-secondary btn-apply coupon">Apply</button> </span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <dl className="dlist-align">
                                    <dt>Total price:</dt>
                                    <dd className="text-right ml-3">$69.97</dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dt>Discount:</dt>
                                    <dd className="text-right text-danger ml-3">- $10.00</dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dt>Total:</dt>
                                    <dd className="text-right text-dark b ml-3"><strong>$59.97</strong></dd>
                                </dl>
                                <hr/>
                                <div className="text-center">
                                    <Link to="/checkout" className="btn btn-checkout"> <i className="fa-solid fa-cart-shopping" style={{color: "#ffffff"}}></i> Go To Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default Order;
