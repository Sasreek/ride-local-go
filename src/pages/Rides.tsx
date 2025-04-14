
import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { toast } from "sonner";
import { MapPin, Calendar, Clock, Car, Search, User, MessageCircle } from "lucide-react";

// Mock data for rides
const mockRides = [
  {
    id: 1,
    driver: "Alex Johnson",
    from: "North Campus",
    to: "Downtown Mall",
    date: "2025-04-15",
    time: "14:30",
    seats: 3,
    price: "$5",
    rating: 4.8
  },
  {
    id: 2,
    driver: "Maria Garcia",
    from: "South Dorms",
    to: "Airport",
    date: "2025-04-16",
    time: "08:00",
    seats: 2,
    price: "$15",
    rating: 4.9
  },
  {
    id: 3,
    driver: "James Smith",
    from: "Engineering Building",
    to: "Concert Hall",
    date: "2025-04-15",
    time: "18:45",
    seats: 4,
    price: "$4",
    rating: 4.7
  },
  {
    id: 4,
    driver: "Sophia Lee",
    from: "Library",
    to: "Shopping Center",
    date: "2025-04-17",
    time: "13:15",
    seats: 3,
    price: "$6",
    rating: 4.6
  },
];

// Mock Map Component (in a real app, this would be integrated with a mapping API)
const MapView = () => {
  return (
    <div className="bg-gray-200 w-full h-[500px] rounded-lg flex items-center justify-center">
      <div className="text-center">
        <MapPin className="h-12 w-12 text-golocal-purple mx-auto mb-2" />
        <p className="text-gray-500">Interactive Map View</p>
        <p className="text-xs text-gray-500 mt-2">
          (In the real app, this would be an interactive map using a mapping API)
        </p>
      </div>
    </div>
  );
};

const Rides = () => {
  const [searchForm, setSearchForm] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: "1"
  });

  const [offerForm, setOfferForm] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: "1",
    price: ""
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchForm({ ...searchForm, [name]: value });
  };

  const handleOfferChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOfferForm({ ...offerForm, [name]: value });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("This is a demo. PHP/XAMPP integration would be implemented here for ride search.");
  };

  const handleOfferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("This is a demo. PHP/XAMPP integration would be implemented here for ride posting.");
  };

  const handleBookRide = (id: number) => {
    toast.info(`This is a demo. Booking ride #${id} would connect to PHP/XAMPP database.`);
  };

  const handleContactDriver = (driver: string) => {
    toast.info(`This is a demo. Messaging ${driver} would be end-to-end encrypted.`);
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-8">Find or Offer Rides</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Tabs defaultValue="search">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="search">Find a Ride</TabsTrigger>
                <TabsTrigger value="offer">Offer a Ride</TabsTrigger>
              </TabsList>
              
              <TabsContent value="search" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSearchSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="search-from">From</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="search-from"
                            name="from"
                            placeholder="Pickup location"
                            value={searchForm.from}
                            onChange={handleSearchChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="search-to">To</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="search-to"
                            name="to"
                            placeholder="Destination"
                            value={searchForm.to}
                            onChange={handleSearchChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="search-date">Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="search-date"
                            name="date"
                            type="date"
                            value={searchForm.date}
                            onChange={handleSearchChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="search-time">Time (optional)</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="search-time"
                            name="time"
                            type="time"
                            value={searchForm.time}
                            onChange={handleSearchChange}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="search-seats">Seats Needed</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="search-seats"
                            name="seats"
                            type="number"
                            min="1"
                            max="6"
                            value={searchForm.seats}
                            onChange={handleSearchChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-golocal-purple hover:bg-golocal-darkPurple">
                        <Search className="h-4 w-4 mr-2" />
                        Search Rides
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="offer" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <form onSubmit={handleOfferSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="offer-from">From</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="offer-from"
                            name="from"
                            placeholder="Pickup location"
                            value={offerForm.from}
                            onChange={handleOfferChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="offer-to">To</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="offer-to"
                            name="to"
                            placeholder="Destination"
                            value={offerForm.to}
                            onChange={handleOfferChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="offer-date">Date</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="offer-date"
                            name="date"
                            type="date"
                            value={offerForm.date}
                            onChange={handleOfferChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="offer-time">Time</Label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="offer-time"
                            name="time"
                            type="time"
                            value={offerForm.time}
                            onChange={handleOfferChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="offer-seats">Available Seats</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                          <Input
                            id="offer-seats"
                            name="seats"
                            type="number"
                            min="1"
                            max="6"
                            value={offerForm.seats}
                            onChange={handleOfferChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="offer-price">Price per Seat ($)</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          <Input
                            id="offer-price"
                            name="price"
                            type="number"
                            min="0"
                            step="0.50"
                            placeholder="0.00"
                            value={offerForm.price}
                            onChange={handleOfferChange}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      
                      <Button type="submit" className="w-full bg-golocal-purple hover:bg-golocal-darkPurple">
                        <Car className="h-4 w-4 mr-2" />
                        Offer Ride
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Available Rides</h2>
              
              {mockRides.length > 0 ? (
                <div className="space-y-4">
                  {mockRides.map((ride) => (
                    <div 
                      key={ride.id} 
                      className="border rounded-lg p-4 hover:border-golocal-purple transition-colors ride-card-shadow"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-golocal-lightPurple rounded-full flex items-center justify-center">
                              <User className="h-5 w-5 text-golocal-purple" />
                            </div>
                            <div className="ml-3">
                              <p className="font-medium">{ride.driver}</p>
                              <div className="flex items-center text-xs text-gray-500">
                                <span>{ride.rating}</span>
                                <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 ml-1" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <div className="flex items-center text-gray-500">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>From:</span>
                              </div>
                              <p className="font-medium">{ride.from}</p>
                            </div>
                            
                            <div>
                              <div className="flex items-center text-gray-500">
                                <MapPin className="h-3 w-3 mr-1" />
                                <span>To:</span>
                              </div>
                              <p className="font-medium">{ride.to}</p>
                            </div>
                            
                            <div>
                              <div className="flex items-center text-gray-500">
                                <Calendar className="h-3 w-3 mr-1" />
                                <span>Date:</span>
                              </div>
                              <p className="font-medium">{new Date(ride.date).toLocaleDateString()}</p>
                            </div>
                            
                            <div>
                              <div className="flex items-center text-gray-500">
                                <Clock className="h-3 w-3 mr-1" />
                                <span>Time:</span>
                              </div>
                              <p className="font-medium">{ride.time}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex flex-col items-end mt-4 md:mt-0 space-y-2">
                          <div className="text-right">
                            <p className="text-sm text-gray-500">{ride.seats} seats available</p>
                            <p className="text-lg font-bold text-golocal-purple">{ride.price}</p>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="text-golocal-purple border-golocal-purple hover:bg-golocal-lightPurple"
                              onClick={() => handleContactDriver(ride.driver)}
                            >
                              <MessageCircle className="h-4 w-4 mr-1" />
                              Message
                            </Button>
                            <Button 
                              size="sm" 
                              className="bg-golocal-purple hover:bg-golocal-darkPurple"
                              onClick={() => handleBookRide(ride.id)}
                            >
                              Book
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">No rides available for the selected criteria.</p>
              )}
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-4">Live Map View</h2>
              <MapView />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Star = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default Rides;
