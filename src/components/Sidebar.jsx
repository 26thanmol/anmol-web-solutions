import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-xl transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-slate-800"
    }`;

  return (
    <div className="w-64 bg-slate-900 min-h-screen p-6">
      <h1 className="text-2xl font-bold text-white mb-10">
        AWS Admin
      </h1>

      <nav className="space-y-3">
        <NavLink to="/dashboard" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/leads" className={linkClass}>
          Leads
        </NavLink>

        <NavLink to="/dashboard/projects" className={linkClass}>
          Projects
        </NavLink>

        <NavLink to="/dashboard/clients" className={linkClass}>
          Clients
        </NavLink>

        <NavLink to="/dashboard/messages" className={linkClass}>
          Messages
        </NavLink>

        <NavLink to="/dashboard/settings" className={linkClass}>
          Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;