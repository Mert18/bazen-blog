
import { useState } from 'react';
import classes from './contact.module.css';


function Contact() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function sendMessageHandler(e) {
        e.preventDefault();

        fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify({
                email,
                message
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        })

        setEmail('');
        setMessage('');
    }
    return (
        <section className={classes.contact}>
            <div className={classes.left}>
                <form autoComplete="off" className={classes.form} onSubmit={sendMessageHandler}>
                    <div className={classes.element}>
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className={classes.element}>
                        <label htmlFor="message">Mesajınız</label>
                        <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <button className="form-btn" type="submit">Gönder</button>
                </form>
            </div>
        </section>
    )
}

export default Contact