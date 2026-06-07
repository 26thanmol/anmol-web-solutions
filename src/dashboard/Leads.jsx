function Leads() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Leads</h1>

      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">John</td>
            <td className="border p-3">john@email.com</td>
            <td className="border p-3">New</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Leads;