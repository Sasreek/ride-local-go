
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Car } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Car className="h-6 w-6 text-golocal-purple" />
              <span className="ml-2 text-xl font-bold text-golocal-purple">Go Local</span>
            </div>
            <p className="text-gray-600 text-sm">
              Connecting college students for safe, affordable rides.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-golocal-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-golocal-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-golocal-purple">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-golocal-purple">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-golocal-purple">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/rides" className="text-gray-600 hover:text-golocal-purple">
                  Find Rides
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-golocal-purple">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-golocal-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-golocal-purple">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-600 hover:text-golocal-purple">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-600">
                support@golocal.com
              </li>
              <li className="text-gray-600">
                1-800-GO-LOCAL
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} Go Local. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
