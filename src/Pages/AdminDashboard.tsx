import React, { useState } from "react";

const AdminDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-30 inset-y-0 left-0 w-64 bg-green-800 text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="p-4 lg:p-6 font-bold text-xl lg:text-2xl border-b border-green-600 flex justify-between items-center">
          Admin Panel
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-2xl text-white focus:outline-none"
          >
            ✖
          </button>
        </div>
        <nav className="p-2 lg:p-4 space-y-1 lg:space-y-2">
          <a
            href="#"
            className="block py-2 px-3 lg:px-4 rounded hover:bg-green-600 text-sm lg:text-base"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block py-2 px-3 lg:px-4 rounded hover:bg-green-600 text-sm lg:text-base"
          >
            Analytics
          </a>
          <a
            href="#"
            className="block py-2 px-3 lg:px-4 rounded hover:bg-green-600 text-sm lg:text-base"
          >
            Settings
          </a>
          <a
            href="#"
            className="block py-2 px-3 lg:px-4 rounded hover:bg-green-600 text-sm lg:text-base"
          >
            Log Out
          </a>
        </nav>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        {/* Mobile Header */}
        <header className="bg-white shadow-md flex items-center justify-between px-4 py-3 lg:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-green-800 text-2xl focus:outline-none"
          >
            ☰
          </button>
          <span className="text-lg font-bold text-green-800">
            EcoSense Admin
          </span>
          <div className="w-6" />
        </header>

        {/* Main Dashboard */}
        <main className="p-4 lg:p-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-green-800 mb-6">
            Welcome, Admin!
          </h1>

          {/* Overview Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-5 rounded-lg shadow hover:scale-[1.02] transition-transform">
              <h3 className="text-lg font-semibold text-gray-600">
                Total Reports
              </h3>
              <p className="text-3xl font-bold text-green-800 mt-2">152</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:scale-[1.02] transition-transform">
              <h3 className="text-lg font-semibold text-gray-600">
                Pending Reviews
              </h3>
              <p className="text-3xl font-bold text-yellow-600 mt-2">8</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:scale-[1.02] transition-transform">
              <h3 className="text-lg font-semibold text-gray-600">
                Active Users
              </h3>
              <p className="text-3xl font-bold text-green-800 mt-2">74</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow hover:scale-[1.02] transition-transform">
              <h3 className="text-lg font-semibold text-gray-600">
                Resolved Reports
              </h3>
              <p className="text-3xl font-bold text-green-600 mt-2">138</p>
            </div>
          </section>

          {/* Recent Reports Table */}
          <section className="bg-white p-6 rounded-lg shadow mb-10 overflow-hidden">
            <h2 className="text-xl font-bold mb-4">Recent Reports</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-600 uppercase">
                  <tr>
                    <th className="px-4 py-2">Report ID</th>
                    <th className="px-4 py-2">User</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-t hover:bg-gray-50 transition">
                    <td className="px-4 py-2">#A001</td>
                    <td className="px-4 py-2">Jane D.</td>
                    <td className="px-4 py-2">Mombasa</td>
                    <td className="px-4 py-2 text-green-700">Resolved</td>
                    <td className="px-4 py-2">May 18, 2025</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50 transition">
                    <td className="px-4 py-2">#A002</td>
                    <td className="px-4 py-2">Ali M.</td>
                    <td className="px-4 py-2">Eldoret</td>
                    <td className="px-4 py-2 text-yellow-600">Pending</td>
                    <td className="px-4 py-2">May 19, 2025</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-600 hover:underline">
                        View
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;