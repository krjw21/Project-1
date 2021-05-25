import '../styles/Contact.css'

export function Contact(props) {
    return (
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
                <input id="name" name="name" type="text" placeholder="Your Full Name" />
                {/* email */}
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" placeholder="emailhere@example.com" />
                {/* message */}
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" cols="48" placeholder="Type your message here" />
                {/* <button type="reset">Clear</button> */}
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact