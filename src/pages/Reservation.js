import { Link } from "react-router-dom"; // Importing the `Link` component from React Router for navigation.

// Functional component for the reservation section of a website.
const Reservation = () => {
    return (
        <section id="reservation"> {/* Main section for the reservation form */}
            {/* Social Media and Contact Links */}
            <div className="social">
                {/* Social media and contact icons linking to respective platforms */}
                <Link to="#"><i className="fab fa-facebook-f"></i></Link> {/* Facebook icon */}
                <Link to="#"><i className="fab fa-twitter"></i></Link> {/* Twitter icon */}
                <Link to="#"><i className="fab fa-instagram"></i></Link> {/* Instagram icon */}
                <a href="tel:123-456-7890"><i className="fa fa-phone"></i></a> {/* Phone link */}
                <a href="mailto:example@gmail.com"><i className="fa fa-envelope"></i></a> {/* Email link */}
            </div>

            {/* Reservation Form */}
            <form>
                <div className="contact-box">
                    {/* Form Heading */}
                    <div className="c-heading">
                        <h1>Make a Reservation Today</h1>
                        <p className="text-blk contactus-subhead">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
                        </p>
                    </div>

                    <br/>

                    {/* Input for First Name */}
                    <div className="form-floating col-12">
                        <input type="text" className="form-control" id="first-name" placeholder="First Name"/>
                        <label htmlFor="first-name" className="ms-1">
                            {/* First Name Label with SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                <path d="..."/> {/* SVG Path for person icon */}
                            </svg>
                            First Name
                        </label>
                    </div>

                    <br/>

                    {/* Input for Last Name */}
                    <div className="form-floating col-12">
                        <input type="text" className="form-control" id="last-name" placeholder="Last Name"/>
                        <label htmlFor="last-name" className="ms-1">
                            {/* Last Name Label with SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="..."/> {/* SVG Path for person-fill icon */}
                            </svg>
                            Last Name
                        </label>
                    </div> 

                    <br/>
                
                    {/* Input for Email */}
                    <div className="form-floating col-12">
                        <input type="email" className="form-control" id="Email" placeholder="name@example.com"/>
                        <label htmlFor="Email" className="ms-1">
                            {/* Email Label with SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="..."/> {/* SVG Path for envelope icon */}
                            </svg>
                            Email Address
                        </label>
                    </div>

                    <br/>

                    {/* Input for Telephone */}
                    <div className="form-floating col-12">
                        <input type="text" className="form-control" id="telephone" placeholder="Telephone Number"/>
                        <label htmlFor="Telephone" className="ms-1">
                            {/* Telephone Label with SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="..."/> {/* SVG Path for telephone icon */}
                            </svg>
                            Telephone Number
                        </label>
                    </div>

                    <br/>

                    {/* Input for Date of Reservation */}
                    <div className="form-floating col-12">
                        <input type="date" className="form-control" id="date-of-resveration"/>
                        <label htmlFor="date" className="ms-1">
                            {/* Date Label with SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
                                <path d="..."/> {/* SVG Path for calendar icon */}
                            </svg>
                            Date Of Reservation
                        </label>
                    </div>

                    <br/>

                    {/* Input for Time of Reservation */}
                    <div className="form-floating col-12">
                        <input type="time" className="form-control" id="time-of-resveration"/>
                        <label htmlFor="Time" className="ms-1">
                            {/* Time Label with SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                                <path d="..."/> {/* SVG Path for alarm icon */}
                            </svg>
                            Time For Reservation
                        </label>
                    </div>

                    <br/>

                    {/* Input for Number of Guests */}
                    <div className="form-floating col-12">
                        <input type="number" className="form-control" id="num-guest" placeholder="Number of Guests"/>
                        <label htmlFor="number" className="ms-1">
                            {/* Number of Guests Label with SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="..."/> {/* SVG Path for people-fill icon */}
                            </svg>
                            Number Of Guests
                        </label>
                    </div>

                    <br/>

                    {/* Input for Special Request */}
                    <div className="form-floating col-12">
                        <input type="text" className="form-control" id="text" placeholder="Special Request"/>
                        <label htmlFor="text" className="ms-1">
                            {/* Special Request Label with SVG Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                <path d="..."/> {/* SVG Path for pen icon */}
                            </svg>
                            Special Request
                        </label>
                    </div>

                    <br/>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button className="reservation-btn btn mx-auto">Reserve Now</button>
                    </div>
                </div>
            </form>

            {/* Embedded Google Map */}
            <div className="map">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=..." 
                    title="rest-map"
                    width="600" 
                    height="450" 
                    frameBorder="0" 
                    style={{border: "0"}} 
                    allowFullScreen 
                    aria-hidden="false" 
                    tabIndex="0">
                </iframe>	
            </div>
        </section>
    );
};

export default Reservation;










