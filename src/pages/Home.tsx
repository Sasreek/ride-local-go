import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Check, Shield, MapPin, User, CarFront, Info } from "lucide-react";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-golocal-purple to-golocal-darkPurple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">
                Campus Carpooling Made Simple
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                Connect with fellow students for safe, affordable rides. Go Local helps you find rides or offer empty seats in your car.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/signup">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-golocal-purple hover:bg-gray-100">
                    Sign Up Free
                  </Button>
                </Link>
                <div className="bg-white/10 p-4 rounded-lg space-y-3">
                  <div className="flex items-center space-x-3">
                    <Info className="h-6 w-6 text-white" />
                    <h3 className="text-lg font-semibold">Why Go Local?</h3>
                  </div>
                  <ul className="text-sm space-y-2 pl-9">
                    <li className="relative">
                      <span className="absolute -left-6 top-1 text-green-400">✓</span>
                      Save money on transportation
                    </li>
                    <li className="relative">
                      <span className="absolute -left-6 top-1 text-green-400">✓</span>
                      Reduce carbon footprint
                    </li>
                    <li className="relative">
                      <span className="absolute -left-6 top-1 text-green-400">✓</span>
                      Meet fellow students
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/placeholder.svg" 
                alt="Students carpooling" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Go Local?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform is designed specifically for college students, offering safety, convenience, and affordability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-golocal-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verified Profiles</h3>
              <p className="text-gray-600">
                All users are verified with college emails and our secure verification system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-golocal-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Map View</h3>
              <p className="text-gray-600">
                Track your ride in real-time with our interactive map feature.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center mb-4">
                <CarFront className="h-6 w-6 text-golocal-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Rides</h3>
              <p className="text-gray-600">
                Find rides for long trips or just across campus. Post your own or join others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-golocal-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Get started with Go Local in three simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-golocal-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
              <p className="text-gray-600">
                Sign up with your college email for verification and create your profile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-golocal-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Find or Post Rides</h3>
              <p className="text-gray-600">
                Search for available rides or offer your own when you're driving.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-golocal-purple rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect & Go</h3>
              <p className="text-gray-600">
                Connect through our secure messaging, meet up, and start your journey.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" className="text-golocal-purple border-golocal-purple hover:bg-golocal-lightPurple">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Students Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from students who have used Go Local for their campus transportation needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-golocal-purple" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Alex Johnson</h4>
                  <p className="text-sm text-gray-500">University of Tech</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Go Local saved me so much money on my commute to campus. I found consistent rides with the same driver all semester!"
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-golocal-purple" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Williams</h4>
                  <p className="text-sm text-gray-500">State College</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "I love the verified profiles feature. Makes me feel safe knowing who I'm riding with is actually a fellow student."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center">
                  <User className="h-6 w-6 text-golocal-purple" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Miguel Rodriguez</h4>
                  <p className="text-sm text-gray-500">Coastal University</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a driver, I've offset my gas costs completely by offering rides. Plus, made some great friends along the way!"
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="text-golocal-purple border-golocal-purple hover:bg-golocal-lightPurple">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-golocal-purple text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of college students already using Go Local for their campus transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button size="lg" className="w-full sm:w-auto bg-white text-golocal-purple hover:bg-gray-100">
                Create an Account
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10">
                Log In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
