import React, { useState } from "react";

const Contact = ({ email, phone, location, socialLinks }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-sky-500 to-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something
            amazing!
          </p>
        </div>

        {/* Main Grid - Responsive: stacked on small, split 2/3 on large */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-slate-700">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
                Contact Information
              </h3>

              <div className="space-y-4 md:space-y-6">
                {/* Contact Items - Responsive sizing */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-gray-900 dark:text-white font-medium text-base hover:text-emerald-500 transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className="text-gray-900 dark:text-white font-medium text-base hover:text-emerald-500 transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-linear-to-br from-sky-500 to-emerald-500 rounded-lg flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Location
                    </p>
                    <p className="text-gray-900 dark:text-white font-medium text-base">
                      {location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links - Responsive sizing */}
              <div className="mt-6 pt-6 md:mt-8 md:pt-8 border-t border-gray-200 dark:border-slate-700">
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  Follow Me
                </p>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-linear-to-r hover:from-sky-500 hover:to-emerald-500 hover:text-white transition-all duration-300 text-gray-600 dark:text-gray-400"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-slate-700"
            >
              {/* Form fields - Responsive: 2 columns on small/medium, stacked on very small screens */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm sm:text-base">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm sm:text-base">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-4 md:mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm sm:text-base">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-sky-500 to-emerald-500 text-white rounded-lg font-semibold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 border border-green-500 text-green-700 dark:text-green-400 rounded-lg text-sm sm:text-base">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
