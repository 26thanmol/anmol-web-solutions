import DashboardLayout from "../components/DashboardLayout";

function Dashboard() {
  const stats = [
    { title: "Total Leads", value: "125", icon: "📈" },
    { title: "Active Projects", value: "18", icon: "🚀" },
    { title: "Clients", value: "32", icon: "👥" },
    { title: "Revenue", value: "₹2.4L", icon: "💰" },
  ];

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-4xl font-bold mb-2">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 mb-8">
          Welcome back to Anmol Web Solutions Admin Panel
        </p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>
                </div>

                <span className="text-4xl">
                  {item.icon}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Recent Leads
            </h2>

            <div className="space-y-4">
              <div className="border-b pb-3">
                <h3 className="font-semibold">
                  Raj Fitness
                </h3>

                <p className="text-gray-500">
                  Gym Website Inquiry
                </p>
              </div>

              <div className="border-b pb-3">
                <h3 className="font-semibold">
                  Startup Launch
                </h3>

                <p className="text-gray-500">
                  Business Website Inquiry
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Cafe Aroma
                </h3>

                <p className="text-gray-500">
                  E-Commerce Inquiry
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">
              Project Status
            </h2>

            <div className="space-y-5">

              <div>
                <div className="flex justify-between">
                  <span>Power Gym</span>
                  <span>80%</span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                  <div className="bg-blue-600 h-3 rounded-full w-4/5"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>TechNova</span>
                  <span>60%</span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                  <div className="bg-green-500 h-3 rounded-full w-3/5"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span>Startup Launch</span>
                  <span>95%</span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                  <div className="bg-purple-500 h-3 rounded-full w-[95%]"></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;