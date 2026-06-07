import { Link } from "react-router-dom";

function Careers() {
  const jobs = [
    {
      title: "Frontend Developer",
      type: "Remote",
      experience: "0-2 Years",
    },
    {
      title: "React Developer",
      type: "Remote",
      experience: "1-3 Years",
    },
    {
      title: "UI/UX Designer",
      type: "Remote",
      experience: "0-2 Years",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">Join Our Team</h1>

          <p className="text-xl text-blue-100">
            Build amazing digital experiences with Anmol Web Solutions.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid gap-8">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-3">
                {job.title}
              </h2>

              <p className="text-gray-600">
                📍 {job.type} | 💼 {job.experience}
              </p>

              <Link
                to="/contact"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Careers;