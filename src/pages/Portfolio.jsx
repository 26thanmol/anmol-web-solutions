const projects = [
  {
    title: "Power Gym",
    category: "Gym Website",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
  },
  {
    title: "FitZone Studio",
    category: "Fitness Brand",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
  },
  {
    title: "Startup Launch",
    category: "Startup Website",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
  {
    title: "Cafe Aroma",
    category: "Restaurant Website",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    title: "TechNova",
    category: "Technology Company",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
  {
    title: "Portfolio Pro",
    category: "Personal Portfolio",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

function Portfolio() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-center mb-4">
          Our Portfolio
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Explore some of our featured projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  {project.category}
                </p>

                <button className="mt-5 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;