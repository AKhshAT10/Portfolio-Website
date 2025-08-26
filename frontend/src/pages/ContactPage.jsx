// src/components/ContactForm.jsx
import { useRef } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import { Mail} from "lucide-react"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_le0or3r",   
        "template_kd4z1kn",  
        form.current,
        "AgejtOnwWnRe9fXg-"    
      )
      .then(
        () => {
          alert("Message Sent ");
          form.current.reset();
        },
        (error) => {
          alert("Failed  " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#0a192f] text-white flex flex-col items-center justify-center px-6 py-16"
    >
        <Header/>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-400">Let's Connect!</h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 bg-[#112240] p-6 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <label className="text-sm">Your Name:</label>
        <input
          type="text"
          name="from_name"
          placeholder="e.g., Alan Turing"
          className="p-2 rounded bg-[#0a192f] text-white focus:outline-none"
          required
        />

        <label className="text-sm">Your Email:</label>
        <input
          type="email"
          name="from_email"
          placeholder="e.g., alan@bletchleypark.cc"
          className="p-2 rounded bg-[#0a192f] text-white focus:outline-none"
          required
        />

        <label className="text-sm">Message:</label>
        <textarea
          name="message"
          rows="4"
          placeholder="What's on your mind?"
          className="p-2 rounded bg-[#0a192f] text-white focus:outline-none"
          required
        ></textarea>

        <input type="hidden" name="email" value="your@email.com" />

        <button
          type="submit"
          className="bg-transparent border-2 border-white text-white px-1 py-1 rounded hover:bg-white hover:text-black transition flex items-center justify-center border-4"
        >
          Send Message ✈
        </button>
      </form>
      <div className="flex gap-6 mt-8">
        <a href="akhshat.sharma25@gmail.com" target="_blank" rel="noopener noreferrer">
          <Mail className="w-8 h-8 hover:text-green-400" />
        </a>
        <a href="https://www.linkedin.com/in/akhshat-sharma-123378315/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-8 h-8 hover:text-green-400" />
        </a>
        <a href="https://github.com/AKhshAT10" target="_blank" rel="noopener noreferrer">
          <FaGithub className="w-8 h-8 hover:text-green-400" />
        </a>
      </div>
      <Footer/>
    </section>
  );
};

export default ContactPage;
