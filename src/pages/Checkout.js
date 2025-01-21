// Importing the Link component from react-router-dom for navigation between routes
import { Link } from "react-router-dom";

// Checkout component definition
const Checkout = () => {
    return (
        <>
            {/* Breadcrumb navigation showing the current page flow */}
            <div className="order-to-payment-map">
                <span>
                    {/* Link to the main menu page */}
                    <Link to="/">View Our Menu</Link> 
                    {/* Arrow icon for breadcrumb navigation */}
                    <i className="fa-solid fa-angles-right" style={{color: "#3f762c"}}></i>
                    {/* Link to the order page */}
                    <Link to="/order">Your Order</Link>
                    {/* Arrow icon for breadcrumb navigation */}
                    <i className="fa-solid fa-angles-right" style={{color: "#3f762c"}}></i>
                    {/* Current page link for the payment section */}
                    <Link to="/checkout" id="payment-map-active">Payment</Link>
                </span>
            </div>

            {/* Main container for the checkout page content */}
            <div className="container mt-5 px-5">
                {/* Header section with title and subtitle */}
                <div className="mb-4">
                    <h2 className="payment-title">Confirm Order and Pay</h2>
                    <p className="payment-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>   
                </div>

                <div className="row">
                    {/* Left column for payment and billing details */}
                    <div className="col-md-8">
                        <div className="card p-3">
                            {/* Section title for payment details */}
                            <h6 className="payment-details-title text-uppercase">Payment details</h6>

                            {/* Input field for name on the card */}
                            <div className="inputbox mt-3">
                                <input type="text" name="name-on-card" className="form-control" required="required"/>
                                <span>Name on card</span>
                            </div>

                            {/* Input field for the card number */}
                            <div className="inputbox mt-3 me-2">
                                <input type="number" name="card-number" className="form-control" required="required"/>
                                <i className="fa fa-credit-card"></i>
                                <span>Card Number</span>
                            </div>
                            
                            {/* Row for expiry date and CVV */}
                            <div className="row">
                                {/* Input field for expiry date */}
                                <div className="col-md-6">
                                    <div className="inputbox mt-3 me-2">
                                        <input type="month" name="expiry-date" className="form-control" required="required"/>
                                        <span>Expiry Date</span>
                                    </div>
                                </div>
                                {/* Input field for CVV */}
                                <div className="col-md-6">
                                    <div className="inputbox mt-3 me-2">
                                        <input type="number" name="cvv" className="form-control" required="required"/>
                                        <span>CVV</span>
                                    </div>
                                </div>
                            </div>

                            {/* Billing address section */}
                            <div className="mt-4 mb-4">
                                <h6 className="billing-address-title text-uppercase">Billing Address</h6>

                                {/* Input fields for street address and city */}
                                <div className="row mt-3">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 me-2">
                                            <input type="text" name="street-address" className="form-control" required="required"/>
                                            <span>Street Address</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 me-2">
                                            <input type="text" name="city" className="form-control" required="required"/>
                                            <span>City</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Input fields for parish/state and zip code */}
                                <div className="row mt-2">
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 me-2">
                                            <input type="text" name="parish" className="form-control" required="required"/>
                                            <span>Parish/State</span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="inputbox mt-3 me-2">
                                            <input type="number" name="zip-code" className="form-control" required="required"/>
                                            <span>Zip code</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation buttons for previous step and payment confirmation */}
                        <div className="mt-4 mb-4 d-flex justify-content-between">
                            <a className="ckeckout-previous-step" href="/order">
                                <span>
                                    <i className="fa-solid fa-circle-left" style={{color: "#dc002a"}}></i> Previous step
                                </span>
                            </a>
                            <button className="btn btn-success px-3">Pay Now</button>
                        </div>
                    </div>

                    {/* Right column for order summary */}
                    <div className="col-md-4">
                        <div className="card card-blue p-3 text-white mb-3">
                            {/* Display the total price */}
                            <span>Your Total Today Is</span>
                            <div className="d-flex flex-row align-items-end mb-3">
                                <h1 className="mb-0 total">$5049.00</h1>
                            </div>
                            <span className="below-total">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            </span>

                            {/* Thank you message */}
                            <div className="hightlight">
                                <span>Thank You For Choosing Us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

// Exporting the Checkout component for use in other parts of the app
export default Checkout;