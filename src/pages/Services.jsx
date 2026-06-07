function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Business Websites",
      description:
        "Professional and responsive websites designed to build trust and generate leads.",
      features: ["Responsive Design", "SEO Friendly", "Fast Loading"],
    },
    {
      icon: "💪",
      title: "Gym Websites",
      description:
        "Fitness-focused websites with membership plans, trainer profiles and lead generation.",
      features: ["Trainer Profiles", "Membership Forms", "Lead Capture"],
    },
    {
      icon: "🚀",
      title: "Startup Websites",
      description:
        "Launch your startup with a modern digital presence that attracts customers and investors.",
      features: ["Landing Pages", "Modern UI", "Analytics Setup"],
    },
    {
      icon: "🎨",
      title: "Portfolio Websites",
      description:
        "Showcase your work, achievements and personal brand with style.",
      features: ["Project Showcase", "Personal Branding", "Contact Forms"],
    },
    {
      icon: "🛒",
      title: "E-Commerce Stores",
      description:
        "Powerful online stores with product management and payment integration.",
      features: ["Online Payments", "Product Catalog", "Order Tracking"],
    },
    {
      icon: "📈",
      title: "SEO Optimization",
      description:
        "Improve Google rankings, visibility and organic traffic for your business.",
      features: ["Technical SEO", "Performance", "Google Ranking"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Our Services
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            We provide premium digital solutions to help businesses
            establish a powerful online presence and grow faster.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-gray-500"
                  >
                    ✓ {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Our Process
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["1", "Discovery"],
              ["2", "Planning"],
              ["3", "Development"],
              ["4", "Launch"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                  {number}
                </div>

                <h3 className="text-2xl font-bold">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Ready To Start Your Project?
          </h2>

          <p className="text-xl text-gray-300 mt-6">
            Let's build a website that helps your business grow.
          </p>

          <button className="mt-10 bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;