import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import "./Contact.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const publickKey = "zdqIsAXr7OgcsK4y5";

  const form = useRef();

  // HANDLE SUBMIT FORM =>
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .sendForm("o2utgua", "template_jbu4yfa", form.current, {
        publicKey: publickKey,
      })
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully 🚀");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong ❌");
          console.log(`Failed : ${error.text}`);
        }
      );
  };

  return (
    <section id="contact" className="fade-in w-full">
      <div className="container">
        <h1 className="text-[45px] font-semibold">
          Contact <span className="primary">Me</span>
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="fullName">Full-Name</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter Your Name Pleas"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email..."
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Message..."
              required
            ></textarea>
          </div>
          <button type="submit" className="btn text-white" disabled={loading} aria-label="send message">
            {loading ? "Snding ..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
