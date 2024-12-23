import { FaUsers, FaInfoCircle, FaCheckCircle, FaListAlt } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const QuickFindAnswers = () => {
  return (
    <section className="w-full max-w-full mx-auto h-auto py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-gray-50 rounded-lg shadow-md">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Quick Find Answers</h2>
        <p className="text-gray-600 text-lg">
          Get answers to common questions about KLE-HubSpot.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-10">
        {[
          {
            icon: <FaInfoCircle className="h-6 w-6 text-blue-600" />,
            title: "What is KLE-HubSpot?",
            content:
              "KLE-HubSpot is a centralized platform designed to manage college events, fostering collaboration and engagement among students, club leaders, and admins.",
            gradient: "bg-gradient-to-br from-blue-100 to-blue-300",
          },
          {
            icon: <FaListAlt className="h-6 w-6 text-green-600" />,
            title: "What features does KLE-HubSpot offer?",
            content:
              "It offers event registration, role-based access, event creation and management, user role assignments, and admin oversight.",
            gradient: "bg-gradient-to-br from-green-100 to-green-300",
          },
          {
            icon: <FaUsers className="h-6 w-6 text-purple-600" />,
            title: "Who can use KLE-HubSpot?",
            content:
              "Students, club leaders, and administrators can use KLE-HubSpot for event participation, management, and oversight.",
            gradient: "bg-gradient-to-br from-purple-100 to-purple-300",
          },
          {
            icon: <FaCheckCircle className="h-6 w-6 text-yellow-600" />,
            title: "How can KLE-HubSpot benefit event organizers?",
            content:
              "Event organizers can streamline planning, manage participants efficiently, and enhance communication through a single platform.",
            gradient: "bg-gradient-to-br from-yellow-100 to-yellow-300",
          },
        ].map(({ icon, title, content, gradient }, idx) => (
          <Card
            key={idx}
            className={`transition-transform transform hover:scale-105 hover:shadow-lg ${gradient} rounded-lg`}
          >
            <CardHeader className="flex flex-col items-center justify-center pb-3">
              <div className="p-3 bg-white rounded-full shadow-md">{icon}</div>
              <CardTitle className="text-lg font-semibold text-center mt-3 text-gray-800">
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-gray-700">{content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default QuickFindAnswers;
