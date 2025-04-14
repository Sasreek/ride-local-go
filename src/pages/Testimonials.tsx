
import Layout from "@/components/Layout";
import { User, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    school: "University of Tech",
    testimonial: "Go Local saved me so much money on my commute to campus. I found consistent rides with the same driver all semester! The app is super easy to use and I love the live map feature to track when my ride is approaching.",
    rating: 5,
    type: "rider"
  },
  {
    id: 2,
    name: "Sarah Williams",
    school: "State College",
    testimonial: "I love the verified profiles feature. Makes me feel safe knowing who I'm riding with is actually a fellow student. The end-to-end encryption for messaging gives me peace of mind when coordinating pickup details.",
    rating: 5,
    type: "rider"
  },
  {
    id: 3,
    name: "Miguel Rodriguez",
    school: "Coastal University",
    testimonial: "As a driver, I've offset my gas costs completely by offering rides. Plus, made some great friends along the way! The payment system is straightforward and I appreciate how the app helps calculate fair rates.",
    rating: 5,
    type: "driver"
  },
  {
    id: 4,
    name: "Taylor Singh",
    school: "Northern Institute",
    testimonial: "I was skeptical at first, but the verification system made me feel comfortable. Now I use Go Local for all my campus transportation needs. The student-only community makes it feel much safer than other rideshare apps.",
    rating: 4,
    type: "rider"
  },
  {
    id: 5,
    name: "Jordan Lee",
    school: "Eastern College",
    testimonial: "When my car broke down mid-semester, Go Local was a lifesaver. I found daily rides to campus within minutes of searching. The schedule matching feature is perfect for finding consistent rides that match my class schedule.",
    rating: 5,
    type: "rider"
  },
  {
    id: 6,
    name: "Cameron Wilson",
    school: "Western University",
    testimonial: "I drive to campus from an off-campus apartment and Go Local helps me find riders to split gas costs. The app makes it easy to set my route and available seats. I've met some great people and made my commute more environmentally friendly.",
    rating: 5,
    type: "driver"
  },
  {
    id: 7,
    name: "Jamie Parker",
    school: "Metropolitan University",
    testimonial: "The map feature is fantastic for coordinating pickup. I can see exactly where my driver is and get real-time updates. Scheduling recurring rides for my regular classes was super convenient.",
    rating: 4,
    type: "rider"
  },
  {
    id: 8,
    name: "Riley Thompson",
    school: "Tech Institute",
    testimonial: "I offer rides to and from campus events. The app makes it easy to post my availability and I've helped many students get to games and concerts safely. The verification system gives everyone peace of mind.",
    rating: 5,
    type: "driver"
  },
  {
    id: 9,
    name: "Dakota Chen",
    school: "South State University",
    testimonial: "During bad weather, Go Local was my savior. Found a ride immediately when I didn't want to walk in the rain. The quick booking feature is perfect for last-minute ride needs.",
    rating: 5,
    type: "rider"
  }
];

const Testimonials = () => {
  // Helper function to render stars
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Layout>
      <div className="bg-golocal-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Student Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from students across the country who are using Go Local for their campus transportation needs
          </p>
        </div>
      </div>

      <section className="py-16 bg-golocal-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-golocal-purple" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.school}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <span className="text-xs text-white px-2 py-1 rounded-full bg-golocal-purple mr-3">
                    {testimonial.type === "rider" ? "Rider" : "Driver"}
                  </span>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-gray-600 italic">
                  "{testimonial.testimonial}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Experience the benefits of our student-focused ridesharing platform and be part of the Go Local community.
          </p>
          <div className="inline-flex rounded-md shadow">
            <a
              href="/signup"
              className="px-5 py-3 bg-golocal-purple text-white font-medium rounded-md hover:bg-golocal-darkPurple transition-colors"
            >
              Sign Up Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
