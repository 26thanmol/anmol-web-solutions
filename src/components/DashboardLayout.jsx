import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <header className="bg-white shadow px-8 py-5">
          <h2 className="text-2xl font-bold">
            Anmol Web Solutions Dashboard
          </h2>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;