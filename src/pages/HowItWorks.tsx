
import Layout from "@/components/Layout";
import { CarFront, UserCheck, MessageCircle, MapPin, Shield, Lock } from "lucide-react";

const HowItWorks = () => {
  return (
    <Layout>
      <div className="bg-golocal-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">How Go Local Works</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our platform connects college students for safe, affordable rides. Here's how our service works from start to finish.
          </p>
        </div>
      </div>

      {/* Main Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Easy as 1-2-3</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our simple process makes finding or offering rides effortless
            </p>
          </div>

          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-golocal-lightPurple p-6 rounded-xl">
                  <img src="/placeholder.svg" alt="Create Profile" className="rounded-lg shadow" />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="w-16 h-16 bg-golocal-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Create Your Verified Profile</h3>
                <p className="text-lg text-gray-600">
                  Sign up using your university email. Complete your profile with your student details, profile picture, and preferences.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <UserCheck className="h-5 w-5 text-golocal-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Verify your student status</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-golocal-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">End-to-end encrypted messaging</span>
                  </li>
                  <li className="flex items-start">
                    <Lock className="h-5 w-5 text-golocal-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Secure payment options</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-golocal-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Find or Offer Rides</h3>
                <p className="text-lg text-gray-600">
                  Use our intuitive interface to find available rides or offer seats in your car for your next journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-golocal-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Search rides by destination and time</span>
                  </li>
                  <li className="flex items-start">
                    <CarFront className="h-5 w-5 text-golocal-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Specify available seats and cost</span>
                  </li>
                  <li className="flex items-start">
                    <MessageCircle className="h-5 w-5 text-golocal-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Communicate with potential riders/drivers</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="bg-golocal-lightPurple p-6 rounded-xl">
                  <img src="/placeholder.svg" alt="Search Rides" className="rounded-lg shadow" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-golocal-lightPurple p-6 rounded-xl">
                  <img src="/placeholder.svg" alt="Live Map" className="rounded-lg shadow" />
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <div className="w-16 h-16 bg-golocal-purple rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Travel with Peace of Mind</h3>
                <p className="text-lg text-gray-600">
                  Meet at the designated spot, track your ride with our live map, and enjoy a safe journey.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <MapPin className="h-5 w-5 text-golocal-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Real-time ride tracking</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-golocal-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Safety verification features</span>
                  </li>
                  <li className="flex items-start">
                    <UserCheck className="h-5 w-5 text-golocal-purple mr-2 mt-0.5" />
                    <span className="text-gray-700">Rate your experience after the ride</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-golocal-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Security Features</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              We prioritize your safety with industry-leading security features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-golocal-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Verification</h3>
              <p className="text-gray-600">
                Users must verify their identity with university emails and student IDs to create accounts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-golocal-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600">
                All communication and personal data is protected with end-to-end encryption.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-golocal-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety Alerts</h3>
              <p className="text-gray-600">
                Emergency features including safety alerts and campus security contact options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to the most common questions about Go Local
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-golocal-lightPurple p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I know the ride is safe?</h3>
              <p className="text-gray-700">
                All users are verified students with complete profiles. We have a rating system and safety verification features built into the app.
              </p>
            </div>
            
            <div className="bg-golocal-lightPurple p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How much does it cost?</h3>
              <p className="text-gray-700">
                Go Local is free to use! Drivers set their own prices for rides, which are typically much lower than commercial rideshare services.
              </p>
            </div>
            
            <div className="bg-golocal-lightPurple p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What if my ride gets canceled?</h3>
              <p className="text-gray-700">
                We have a notification system to alert you immediately, and our app will help you find alternative rides in your area.
              </p>
            </div>
            
            <div className="bg-golocal-lightPurple p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I use Go Local for long trips?</h3>
              <p className="text-gray-700">
                Absolutely! Many students use Go Local for rides home during breaks or weekend trips. Just search for your destination and dates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
