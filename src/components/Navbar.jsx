import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
<Link to="/">
  <h1
  className="text-2xl font-bold text-blue-600"
  style={{ fontFamily: "Exo 2, sans-serif" }}
>
  Anmol Web Solutions
</h1>
</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/portfolio" className={navLinkClass}>
            Portfolio
          </NavLink>

          <NavLink to="/pricing" className={navLinkClass}>
            Pricing
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <Link
            to="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col p-4 gap-4">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>

            <NavLink to="/portfolio" className={navLinkClass}>
              Portfolio
            </NavLink>

            <NavLink to="/pricing" className={navLinkClass}>
              Pricing
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

            <NavLink to="/careers" className={navLinkClass}>
              Careers
            </NavLink>
            
            <Link
              to="/contact"
              className="bg-blue-600 text-white text-center px-5 py-3 rounded-lg"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;