import { useState } from "react";
import { Link } from "react-router-dom";
interface HeaderProps {
  paths: Array<{ name: string; path: string }>;
}

export default function Header({ paths }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  return (
    <header className="h-20 z-50 sticky top-0 bg-stone-50 border-b-4 border-orange-500 shadow-lg font-mono">
      <nav className="h-full max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
            {/* Logo Section */}
          {/* <div className="bg-orange-500 text-white px-4 py-2 font-bold text-lg">
            
          </div> */}
          <div>
            <Link to="/" className="text-xl font-bold text-gray-900">Jiawei Wu</Link>
          </div>
        </div>
        <button 
          className="sm:hidden bg-white border-2 border-gray-300 hover:border-orange-500 px-4 py-2 font-bold text-sm transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          MENU
        </button>
        <nav className="hidden sm:flex space-x-2">
          {paths.map(({ name, path }, i) => 
            <a 
              key={i} 
              href={path} 
              className="bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white px-6 py-2 font-bold text-sm transition-all uppercase tracking-wide"
            >
              {name}
            </a>
          )}
        </nav>
        
        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-stone-50 border-b-4 border-orange-500 shadow-lg sm:hidden">
            <div className="max-w-7xl mx-auto px-8 py-4 space-y-2">
              {paths.map(({ name, path }, i) => 
                <a 
                  key={i} 
                  href={path} 
                  className="block bg-white text-gray-700 border-2 border-gray-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 font-bold text-sm transition-all uppercase tracking-wide text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </a>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}