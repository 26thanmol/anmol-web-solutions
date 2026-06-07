import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            About Anmol Web Solutions
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We create powerful digital experiences that help businesses grow,
            attract customers, and build a strong online presence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6">
              Our Story
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              Anmol Web Solutions was founded with a simple goal:
              helping businesses succeed online through modern web
              development and creative digital solutions.
            </p>

            <p className="text-lg text-gray-600">
              From small startups to growing businesses, we focus on
              creating responsive, fast, and professional websites
              that drive real results.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-10">
            <h3 className="text-3xl font-bold mb-4">
              Why Choose Us?
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>✅ Modern Website Design</li>
              <li>✅ Mobile Responsive Development</li>
              <li>✅ SEO Optimization</li>
              <li>✅ Fast Loading Performance</li>
              <li>✅ Ongoing Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            What Drives Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🎯</div>

              <h3 className="text-2xl font-bold mb-3">
                Mission
              </h3>

              <p className="text-gray-600">
                Deliver high-quality websites that help businesses
                attract customers and grow faster.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🚀</div>

              <h3 className="text-2xl font-bold mb-3">
                Vision
              </h3>

              <p className="text-gray-600">
                Become a trusted digital partner for businesses
                across India and beyond.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">💎</div>

              <h3 className="text-2xl font-bold mb-3">
                Values
              </h3>

              <p className="text-gray-600">
                Quality, transparency, innovation and client
                success are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-600">
                50+
              </h3>
              <p className="text-gray-600 mt-2">
                Projects Completed
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-600">
                20+
              </h3>
              <p className="text-gray-600 mt-2">
                Happy Clients
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-600">
                99%
              </h3>
              <p className="text-gray-600 mt-2">
                Satisfaction Rate
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-600">
                24/7
              </h3>
              <p className="text-gray-600 mt-2">
                Support
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Ready To Grow Your Business?
          </h2>

          <p className="text-xl text-gray-300 mt-6">
            Let's build a website that helps your business stand out online.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;