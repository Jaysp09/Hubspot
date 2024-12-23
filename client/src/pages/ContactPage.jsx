import { useState } from "react";
import axios from "axios";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const clearText = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const validate = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    try {
      const response = await axios.post("/api/contact", formData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success(response.data.message);
      setLoading(false);
      clearText();
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-600 py-12 md:py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-white text-opacity-80 md:text-lg">
            We’re here to assist you. Drop us a message or connect through the
            details below.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                Reach Us
              </h2>
              <p className="text-gray-600 md:text-lg">
                Our team is ready to answer your questions and assist you with
                any concerns. Get in touch today.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-gray-600">
                    KLE Technological University, Belagavi 590008
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhone className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="w-8 h-8 text-indigo-500" />
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-600">
                    <Link to="mailto:info@example.com">info@example.com</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full mt-2 px-4 py-2 border rounded-md"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full mt-2 px-4 py-2 border rounded-md"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full mt-2 px-4 py-2 border rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full mt-2 px-4 py-2 border rounded-md"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Subject</label>
                <select
                  name="subject"
                  className="w-full mt-2 px-4 py-2 border rounded-md"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Event Support">Event Support</option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  className="w-full mt-2 px-4 py-2 border rounded-md"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-md hover:from-purple-600 hover:via-blue-600 hover:to-indigo-600"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
