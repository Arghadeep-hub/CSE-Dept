import React, { useState } from 'react'
import { Spinner } from 'react-bootstrap';
import * as faIcon from 'react-icons/fa'

function Newsletter({ status, message, onValidated }) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const subscribeEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const isFormValidated = await onValidated({ EMAIL: email });
            setLoading(false);
            setEmail("");
            return email && email.indexOf("@") > -1 && isFormValidated;
        } catch (err) {
            alert(err);
            setLoading(false);
            setEmail("");
        }
    }
    // console.log(status, message);

    return (
        <div className="p-2 col-md-4 col-12 newsletter-input">
            <h6>NEWSLETTER</h6>
            <form onSubmit={subscribeEmail} className="input-group mb-3">
                <input
                    type="email" className="form-control" placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                <button className="btn" type="submit" disabled={loading}>sign up</button>
            </form>

            {'sending' === status ? (<p className="newsletter-para">
                Just Wait...&nbsp; &nbsp;
                <Spinner animation="border" size="sm" variant="light" />
            </p>) : status ? (
                <p className="newsletter-para" dangerouslySetInnerHTML={{ __html: message }} />
            ) : (<p className="newsletter-para">
                Get updates on fun stuff you probably want to know about in your inbox.
            </p>)
            }

            <ul className="social-icons">
                <li><a href="https://www.facebook.com/Try-The-Menu-106094794396573" target="_blank" rel="noreferrer"><faIcon.FaFacebook /></a></li>

                <li><a href="https://www.instagram.com/trythemenu/" target="_blank" rel="noreferrer"><faIcon.FaInstagram />
                </a></li>

                <li><a href="https://www.linkedin.com/company/the-menu-india/" target="_blank" rel="noreferrer"><faIcon.FaLinkedin /></a></li>
            </ul>
        </div>
    )
}

export default Newsletter
