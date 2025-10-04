const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">PropertyFinder</div>
          <div className="flex gap-4">
            <button className="text-gray-700">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
