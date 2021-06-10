import '../styles/Contact.css'

export function Contact(props) {
    return (
        <div className="contact-page">
            <section id="col1">
                <div className="contactdetails">
                    <p><strong>Main Office</strong><br />
                        42 Holyrood Avenue<br />
                        Sorrento, VIC 3943</p>
                    <p className="directcontact"><strong>Direct Contact</strong><br />
                    Phone: 0435-123-456<br />
                    Email: info@sorrentovic.com.au
                    </p>
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
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" name="name" placeholder="Your full name here ..." />
                        {/* phone */}
                        <label htmlFor="phone">Phone Number:</label>
                        <input id="phone" type="text" name="phone" placeholder="e.g. 0435 123 456" />
                        {/* email */}
                        <label htmlFor="email">Email:</label>
                        <input id="email" type="email" name="email" placeholder="example@email.com" />
                        {/* booking date */}
                        <label htmlFor="bookingdate">Booking Date:</label>
                        <input id="bookingdate" type="date" name="bookingdate" placeholder="31/12/2021" />
                        {/* people */}
                        <label htmlFor="peopl">Number of Visitors:</label>
                        <input id="people" type="number" name="people" placeholder="2"/>
                        {/* message */}
                        <label htmlFor="message">Comments:</label>
                        <textarea id="message" rows="5" cols="48" placeholder="Type your message here ..." />
                        <button type="reset">Clear</button>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact