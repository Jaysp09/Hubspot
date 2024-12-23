import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "", email: "" });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("/api/users/auth/register", formData);
      toast.success(data.message);
      navigate("/login");
    } catch (err) {
      toast.error("Registration failed, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="bg-white shadow-lg p-6 rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-gray-900">Create an Account</CardTitle>
        <CardDescription className="text-gray-600">
          Fill in the details to register.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="username" className="text-sm text-gray-700">Username</Label>
            <Input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="mt-2 px-4 py-3 w-full rounded-lg bg-gray-100 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm text-gray-700">Email Address</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-2 px-4 py-3 w-full rounded-lg bg-gray-100 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-sm text-gray-700">Password</Label>
            <Input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="mt-2 px-4 py-3 w-full rounded-lg bg-gray-100 text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold text-lg transition-transform transform hover:scale-105"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mx-auto"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
