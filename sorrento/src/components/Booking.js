import '../styles/Booking.css'

export function Booking(props) {
    return (
        <div className="gridcontainer">

            <section id="column1">
                <div className="booking">
                    <form id="bookingform" action="https://example.com/handler" method="post">
                        <h2>Booking</h2>
                        {/* name */}
                        <label htmlFor="visitor_name">Name:</label>
                        <input type="text" id="visitor_name" name="visitor_name" placeholder="Your full name here ..." required />
                        {/* phone */}
                        <label htmlFor="visitor_phone">Phone:</label>
                        <input type="tel" id="visitor_phone" name="visitor_phone" placeholder="e.g. 0435 123 456" required />
                        {/* email */}
                        <label htmlFor="visitor_email">E-mail:</label>
                        <input type="email" id="visitor_email" name="visitor_email" placeholder="example@email.com" required />
                        {/* customer */}
                        <div class="inline">
                            <label htmlFor="total_adults">Adults:</label>
                            <input type="number" id="total_adults" name="total_adults" placeholder="2" min="1" required />
                        </div>
                        <div class="inline">
                            <label htmlFor="total_children">Children:</label>
                            <input type="number" id="total_children" name="total_children" placeholder="2" min="0" required />
                        </div>
                        {/* date */}
                        <div class="inline">
                            <label htmlFor="checkin-date">Check-in Date:</label>
                            <input type="date" id="checkin-date" name="checkin-date" required />
                        </div>
                        <div class="inline">
                            <label htmlFor="checkout-date">Check-out Date:</label>
                            <input type="date" id="checkout-date" name="checkout-date" required />
                        </div>
                        {/* message */}
                        <label htmlFor="message">Anything Else?</label>
                        <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important ..." required></textarea>
                        <div className="submitbutton">
                            <button type="submit">Submit Booking</button>
                        </div>
                    </form>
                </div>
            </section>
            <div className="testimonial">
                <i><h2>Customer Testimonials</h2></i>
                <ul>
                    <i><li>"So sorry we had to go home after only one night. We will definitely stay two nights next time!" - J. Smith</li></i>
                    <i><li>"This apartment is close to everything. We didn't need the car as the walks were amazing." - R. Kim</li></i>
                    <i><li>"Your attention to detail made our stay so relaxed and comfortable. It was such a shame we had to drive back to our little flat, which is smaller than your apartment. We want to move in!" - B. Robinson</li></i>
                    <i><li>"Cosy and comfortable. We imagined we owned it and enjoyed being spoilt.  Thank you." - T. Kennedy</li></i>
                    <i><li>"What a magical stay at such an amazing place. Completely self-contained and very private. We loved it and will return again and again and again." - F. Silver</li></i>
                    <i><li>"Never felt so spoilt. A perfect get away and so close to everything. We had the best bath ever!" - J. Kimberly</li></i>
                    <i><li>"A few minutes walk from the beach, picnic basket in hand and towel over the shoulder - can't think of anything better except that wonderful breakfast. That bacon is the best in Melbourne!" - K. Doe</li></i>
                    <i><li>Relaxing in that sunny garden watching our dog chasing balls. Let me stay forever!" M. Scott</li></i>
                </ul>
            </div>
        </div>
    )
}

export default Booking