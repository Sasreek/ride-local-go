
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { Shield } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "",
    agreeTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (!formData.agreeTerms) {
      toast.error("You must agree to the terms and conditions");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // For now, we'll just show a toast and redirect
      toast.info("This is a demo. PHP/XAMPP integration would be implemented here.");
      setIsLoading(false);
    }, 1500);
  };

  // Validate email is a university email
  const isUniversityEmail = (email: string) => {
    return email.endsWith('.edu') || email.includes('university') || email.includes('college');
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto px-4 sm:px-6 py-12">
        <Card>
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <p className="text-sm text-gray-500">
              Enter your details to create your Go Local account
            </p>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-golocal-lightPurple rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-golocal-purple" />
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">University Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@university.edu"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {formData.email && !isUniversityEmail(formData.email) && (
                  <p className="text-red-500 text-xs mt-1">
                    Please use your university email address
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="university">University/College</Label>
                <Input
                  id="university"
                  name="university"
                  placeholder="Your university or college"
                  value={formData.university}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {formData.password && formData.confirmPassword && 
                 formData.password !== formData.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    Passwords do not match
                  </p>
                )}
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="agreeTerms" 
                  name="agreeTerms" 
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => 
                    setFormData({...formData, agreeTerms: checked as boolean})
                  }
                />
                <label
                  htmlFor="agreeTerms"
                  className="text-sm text-gray-500 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link to="/terms" className="text-golocal-purple hover:underline">
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-golocal-purple hover:underline">
                    privacy policy
                  </Link>
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-golocal-purple hover:bg-golocal-darkPurple" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-golocal-purple hover:underline">
                Log in
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default Signup;
