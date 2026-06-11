import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Careers from "./pages/Careers";
import Dashboard from "./dashboard/Dashboard";
import Leads from "./dashboard/Leads";
import Projects from "./dashboard/Projects";
import Clients from "./dashboard/Clients";
import Messages from "./dashboard/Messages";
import Settings from "./dashboard/Settings";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Website Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />

        {/* Dashboard Pages */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/leads" element={<Leads />} />
        <Route path="/dashboard/projects" element={<Projects />} />
        <Route path="/dashboard/clients" element={<Clients />} />
        <Route path="/dashboard/messages" element={<Messages />} />
        <Route path="/dashboard/settings" element={<Settings />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;