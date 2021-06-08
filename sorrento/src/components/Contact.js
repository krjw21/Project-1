import '../styles/Contact.css'
import '../styles/Social.css'

export function Contact(props) {
    return (
        <div className="contact-page">
            <section id="col1">
                <div className="contactmap">
                    <ul>
                        <p><strong>Information & Bookings</strong></p>
                        <li>42 Holyrood Avenue</li>
                        <li>Sorrento VIC 3943</li>
                        <p>Contact Number - 0435 123 456</p>
                    </ul>
                </div>

                <iframe className="googlemap" src="https://maps.google.com.au/maps?f=q&amp;source=s_q&amp;q=Sorrento,VIC,Australia&amp;t=m&amp;iwloc=&amp;output=embed" width="700" height="550"></iframe>
            </section>

            <section id="col2">
                <div className="contact">
                    <h2>Contact Us</h2>
                    <form
                        id="contact-form"
                        action="https://example.com/handler"
                        /* post method hides the data in the body
                           get method shows it in the url */
                        method="post"
                    >
                        {/* name */}
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" placeholder="Your full name" />
                        {/* email */}
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" placeholder="email@example.com" />
                        {/* booking date */}
                        <label htmlFor="bookingdate">Booking Date</label>
                        <input id="bookingdate" type="date" name="bookingdate" placeholder="31/12/2021" />
                        {/* message */}
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" cols="48" placeholder="Type your message here" />
                        <button type="reset">Clear</button>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact