const Navbar = () => {
  return (
    <nav className="border">
      {/* Logo Section */}
      {/* mx-20 */}
      <div className="flex items-center justify-between px-6 my-4">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold">HOME</span>
        </div>
        {/* Buttons Section */}
        <div className="flex items-center space-x-2">
          <button className="px-4 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
            button
          </button>
          <button className="px-4 py-1 text-sm font-medium text-gray-800 bg-gray-200 rounded hover:bg-gray-300">
            button
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar