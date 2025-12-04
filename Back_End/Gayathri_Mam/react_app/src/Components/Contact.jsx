import { useState } from "react";
import "./Contact.css";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [msg, setMsg] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email || !form.message) {
            setMsg("All fields are required!");
            return;
        }

        setMsg("Message sent successfully! ✔");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>

            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Your Name" onChange={handleChange} value={form.name} />
                <input name="email" placeholder="Your Email" onChange={handleChange} value={form.email} />
                <textarea name="message" placeholder="Message" onChange={handleChange} value={form.message}></textarea>

                <button type="submit">Send</button>

                {msg && <p className="message">{msg}</p>}
            </form>
        </section>
    );
}
