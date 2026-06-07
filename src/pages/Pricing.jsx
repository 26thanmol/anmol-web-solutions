import { Link } from "react-router-dom";

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹4,999",
      description: "Perfect for individuals and small businesses.",
      features: [
        "5 Pages Website",
        "Mobile Responsive",
        "Contact Form",
        "Basic SEO",
        "1 Month Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹9,999",
      description: "Best choice for growing businesses.",
      features: [
        "10+ Pages Website",
        "Advanced UI Design",
        "SEO Optimization",
        "WhatsApp Integration",
        "3 Months Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹19,999",
      description: "Complete solution for large businesses.",
      features: [
        "Unlimited Pages",
        "Custom Design",
        "Priority Support",
        "Advanced SEO",
        "Dashboard Integration",
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            Simple & Transparent Pricing
          </h1>

          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose the perfect website package for your business and start
            growing online today.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 shadow-xl transition duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                plan.popular
                  ? "bg-gradient-to-br from-blue-600 to-indigo-700 text-white scale-105"
                  : "bg-white"
              }`}
            >
              {plan.popular && (
                <span className="absolute top-5 right-5 bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              <h2 className="text-3xl font-bold mb-2">
                {plan.name}
              </h2>

              <p
                className={`mb-6 ${
                  plan.popular ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center py-4 rounded-xl font-semibold ${
                  plan.popular
                    ? "bg-white text-blue-600"
                    : "bg-blue-600 text-white"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}

        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="shadow-lg rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">
                How long does it take to build a website?
              </h3>
              <p className="text-gray-600">
                Most websites are completed within 7–14 days depending on the project scope.
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">
                Do you provide hosting?
              </h3>
              <p className="text-gray-600">
                Yes, we can help you with hosting setup and domain configuration.
              </p>
            </div>

            <div className="shadow-lg rounded-2xl p-6">
              <h3 className="font-bold text-xl mb-2">
                Will my website be mobile responsive?
              </h3>
              <p className="text-gray-600">
                Absolutely. Every website is optimized for mobile, tablet and desktop devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold">
            Need a Custom Solution?
          </h2>

          <p className="text-xl text-gray-300 mt-6">
            Contact us today and let's discuss your project requirements.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-10 bg-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Pricing;