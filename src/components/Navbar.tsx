
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Car } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-golocal-purple" />
              <span className="ml-2 text-xl font-bold text-golocal-purple">Go Local</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/how-it-works" className="text-gray-700 hover:text-golocal-purple px-3 py-2 rounded-md">
              How It Works
            </Link>
            <Link to="/rides" className="text-gray-700 hover:text-golocal-purple px-3 py-2 rounded-md">
              Find Rides
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-golocal-purple px-3 py-2 rounded-md">
              Testimonials
            </Link>
            <Link to="/login">
              <Button variant="outline" className="ml-2">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-golocal-purple hover:bg-golocal-darkPurple">Sign Up</Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-golocal-purple focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/how-it-works" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-golocal-purple"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link 
              to="/rides" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-golocal-purple"
              onClick={toggleMenu}
            >
              Find Rides
            </Link>
            <Link 
              to="/testimonials" 
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-golocal-purple"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <Link 
                  to="/login" 
                  className="w-full"
                  onClick={toggleMenu}
                >
                  <Button variant="outline" className="w-full mb-2">Log In</Button>
                </Link>
              </div>
              <div className="flex items-center px-3">
                <Link 
                  to="/signup" 
                  className="w-full"
                  onClick={toggleMenu}
                >
                  <Button className="w-full bg-golocal-purple hover:bg-golocal-darkPurple">Sign Up</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
