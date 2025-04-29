import React, { useState, useRef } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function PortfolioWebsite() {
  const [darkMode, setDarkMode] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef();

  const containerClass = darkMode ? "dark bg-gray-900 text-white" : "bg-gradient-to-br from-white to-slate-100 text-gray-800";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'your_service_id',
      'your_template_id',
      formRef.current,
      'your_public_key'
    ).then(() => {
      setSuccessMessage("Message sent successfully!");
      formRef.current.reset();
    }, () => {
      setSuccessMessage("Failed to send message. Please try again.");
    });
  };

  return (
    <div className={\`min-h-screen p-6 transition-colors duration-500 \${containerClass}\`}>
      <div className="flex justify-end mb-4">
        <Button onClick={() => setDarkMode(!darkMode)} className="bg-indigo-600 text-white hover:bg-indigo-700">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>

      <motion.section className="mb-16 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl font-extrabold text-indigo-600 mb-4">Hello, I'm [Your Name]</h1>
        <p className="text-lg max-w-3xl mx-auto">
          A passionate full-stack developer crafting elegant and efficient web solutions. I bring ideas to life through clean code and creative thinking.
        </p>
      </motion.section>

      <motion.section className="mb-16" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {["JavaScript", "React", "Node.js", "TypeScript", "Tailwind CSS", "Next.js", "Git & GitHub", "Problem Solving"].map(skill => (
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow" key={skill}>
              <CardContent className="text-center text-indigo-700 dark:text-indigo-300 font-semibold">{skill}</CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section className="mb-16" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[{
            title: "Habit Tracker App",
            desc: "Track your daily habits and reach your goals with this React-powered application.",
            link: "https://github.com/yourusername/project-one"
          }, {
            title: "Portfolio Website",
            desc: "A sleek, responsive portfolio built using Next.js and Tailwind CSS.",
            link: "https://github.com/yourusername/project-two"
          }].map(project => (
            <Card className="bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-shadow" key={project.title}>
              <CardContent>
                <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300 mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section>

      <motion.section className="mb-16 bg-white dark:bg-gray-800 py-10 px-6 rounded-xl shadow-md max-w-3xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input type="text" name="user_name" placeholder="Your Name" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white" required />
          <input type="email" name="user_email" placeholder="Your Email" className="w-full p-3 border rounded-lg dark:bg-gray-700 dark:text-white" required />
          <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded-lg h-32 dark:bg-gray-700 dark:text-white" required />
          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg">Send Message</Button>
        </form>
        {successMessage && <p className="text-center mt-4 text-green-500 dark:text-green-400">{successMessage}</p>}
      </motion.section>
    </div>
  );
}
