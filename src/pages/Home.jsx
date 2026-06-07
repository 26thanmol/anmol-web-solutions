import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Power Gym",
    category: "Gym Website",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800",
  },
  {
    title: "FitZone Studio",
    category: "Fitness Brand",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800",
  },
  {
    title: "Startup Launch",
    category: "Startup Website",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
  },
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              🚀 Professional Web Development Agency
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-8">
              Transform Your Business With A
              <span className="text-blue-500"> Professional Website</span>
            </h1>

            <p className="text-xl text-gray-300 mt-8 max-w-3xl">
              We design and develop modern, responsive and high-converting
              websites for startups, gyms, local businesses and professionals.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold"
              >
                Get Free Quote
              </Link>

              <Link
                to="/portfolio"
                className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["50+", "Projects Completed"],
              ["20+", "Happy Clients"],
              ["99%", "Client Satisfaction"],
              ["24/7", "Support"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition"
              >
                <h2 className="text-4xl font-bold text-blue-600">{value}</h2>
                <p className="text-gray-600 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">
            Our Services
          </h2>

          <p className="text-center text-gray-600 mb-14">
            Everything you need to grow your business online.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Business Websites",
              "Gym Websites",
              "Startup Websites",
              "Portfolio Websites",
              "E-Commerce Stores",
              "SEO Optimization",
            ].map((service) => (
              <div
                key={service}
                className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold mb-4">{service}</h3>
                <p className="text-gray-600">
                  Modern and responsive solutions tailored for your business.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>

          <p className="text-center text-gray-600 mb-14">
            A few examples of our recent work.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="text-gray-600 mt-2">{project.category}</p>

                  <Link
                    to="/portfolio"
                    className="inline-block mt-5 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-14">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Amazing website and excellent support.",
              "Professional design and fast delivery.",
              "Our business grew after launching the new website.",
            ].map((review, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl p-8">
                <p className="text-gray-300">{review}</p>

                <h4 className="mt-6 font-bold">Client {index + 1}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold">
            Ready To Grow Your Business?
          </h2>

          <p className="mt-6 text-xl">
            Let's build a website that attracts customers and drives results.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;