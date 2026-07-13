/*function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-900 text-white flex items-center justify-center"
    >
      <h2 className="text-5xl font-bold">Contact</h2>
    </section>
  );
}

export default Contact;*/

import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  try {
    await emailjs.send(
      "service_eebx0zt",
      "template_2ixirab",
      templateParams,
      "YLpgPWFUlqvsPu7-n"
    );

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to send message.");
  }
};


  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <h2 className="text-center text-4xl font-bold text-cyan-400 mb-12">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="w-full p-4 rounded-xl bg-gray-900 outline-none"
/>

         <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  className="w-full p-4 rounded-xl bg-gray-900 outline-none"
/>

          <input
  type="text"
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  placeholder="Subject"
  className="w-full p-4 rounded-xl bg-gray-900 outline-none"
/>

          <textarea
  rows="6"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Your Message"
  className="w-full p-4 rounded-xl bg-gray-900 outline-none"
></textarea>

         <button
  type="submit"
  className="bg-cyan-500 hover:bg-cyan-400 px-8 py-4 rounded-xl text-black font-bold transition"
>
  Send Message
</button>
        </form>

        <div className="mt-12 text-center text-gray-400">

          <p>Email : shrutimaslekar10@gmail.com</p>

          <p>Phone : +91 9284355312</p>

          <p>Location : Maharashtra, India</p>

        </div>

      </div>
    </section>
  );
};

export default Contact;