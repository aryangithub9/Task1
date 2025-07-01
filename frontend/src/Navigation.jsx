import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="flex gap-4 p-4 bg-gray-100 shadow-md">
      <Link to="/page1">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Page1
        </button>
      </Link>
      <Link to="/page2">
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
          Page2
        </button>
      </Link>
      <Link to="/page3">
        <button className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
          Page3
        </button>
      </Link>
      <Link to="/page4">
        <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
          Page4
        </button>
      </Link>
      <Link to="/page5">
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
          Page5
        </button>
      </Link>
    </div>
  );
}

export default Navigation;
