import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
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

    try {
      await axios.post(
        "http://localhost:5000/api/leads",
        formData
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Let's Build Something Amazing
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Ready to grow your business online? Get in touch with us and let's
            discuss your project.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Get In Touch
            </h2>

            <p className="text-gray-600 mb-10">
              We help businesses create powerful online experiences.
              Contact us today for a free consultation.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-lg">
                <Mail size={28} className="text-blue-600" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">
                    contact@anmolwebsolutions.in
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-lg">
                <Phone size={28} className="text-blue-600" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">
                    +91 9876543210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-lg">
                <MapPin size={28} className="text-blue-600" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p className="text-gray-600">
                    India
                  </p>
                </div>
              </div>

            </div>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-6">
              Request a Free Quote
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Service</option>
                <option value="Business Website">Business Website</option>
                <option value="Gym Website">Gym Website</option>
                <option value="Startup Website">Startup Website</option>
                <option value="E-Commerce Store">E-Commerce Store</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Others">Others</option>
              </select>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Surat,India&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section>

    </div>
  );
}

export default Contact;