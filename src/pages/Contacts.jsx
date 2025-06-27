import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = "service_kwa6caf";
    const templateId = "template_iiz5q0j";
    const publikKey = "XYEWY2IxbOxpsm_WW";

    const tempalteParams = {
      form_name: name,
      form_email: email,
      to_name: 'Imad Azaalam',
      message: message
    };

    emailjs.send(serviceId, templateId, tempalteParams, publikKey)
      .then((response) => {
        console.log("Email Sent Successfully", response);
        setName('');
        setEmail('');
        setMessage('');
      }).catch((error) => {
        console.log("Error Sending Email", error);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-[100vh] py-1 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center"
    >
      <div className="max-w-4xl w-full mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-10"
        >
          <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Contact Me
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4 text-lg text-gray-300 mb-10"
        >
          <div className='flex flex-wrap justify-center items-center gap-4'>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-300" />
              azaalamimad2020@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-purple-300" />
              +212 6 59 59 57 23
            </p>
          </div>
          <p className="flex justify-center items-center gap-2">
            <MapPin className="w-5 h-5 text-purple-300" />
            Casablanca, Morocco
          </p>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto space-y-6"
        >
          <motion.input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <motion.textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 h-32 rounded bg-white/10 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></motion.textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-600 hover:bg-purple-700 transition text-white px-6 py-3 rounded-full"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contacts;
