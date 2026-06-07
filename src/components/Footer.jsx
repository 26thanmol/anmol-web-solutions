import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              Anmol Web Solutions
            </h2>

            <p className="text-gray-400">
              Professional websites for growing businesses.
              We help brands establish a strong online presence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/careers">Careers</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Services
            </h3>

            <div className="flex flex-col gap-2 text-gray-400">
              <span>Business Websites</span>
              <span>Gym Websites</span>
              <span>Startup Websites</span>
              <span>E-Commerce</span>
              <span>SEO Optimization</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>📧 contact@anmolwebsolutions.in</p>
              <p>📞 +91 9876543210</p>
              <p>📍 India</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          © 2026 Anmol Web Solutions. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;