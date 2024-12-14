const Sidebar = () => {
  return (
    <div className="bg-blue-100 w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold text-blue-600">Jur</h1>
      <ul className="mt-8 space-y-4 text-gray-700">
        <li>Dashboard</li>
        <li>My Cases</li>
        <li>Activities</li>
        <li>Calendar</li>
        <li>Files</li>
        <li>Open a Dispute</li>
      </ul>
      <div className="mt-8 bg-blue-300 p-4 rounded-lg text-center text-white">
        <p>Get Justice on every Claim</p>
      </div>
    </div>
  );
};

export default Sidebar;
