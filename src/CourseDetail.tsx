import React from 'react';
import { useParams } from 'react-router-dom';

interface Course {
  title: string;
  duration: string;
  stipend: string;
  features: string[];
  expectedSalary: string;
  scope: string[];
}

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();

  // Sample data for demonstration; this should be replaced with actual data fetching logic
  const courses: Record<string, Course> = {
    'full-stack-development': {
      title: "Full Stack Development",
      duration: "3 Months",
      stipend: "₹5000-₹10000/month",
      features: [
        "MERN Stack Development",
        "Real-world Projects",
        "Industry Mentorship",
        "Job Assistance"
      ],
      expectedSalary: "₹3-8 LPA",
      scope: [
        "High demand in startups and enterprises",
        "Remote work opportunities",
        "Freelancing potential",
        "Career growth to Tech Lead"
      ]
    },
    // Add other courses here...
  };

  const course = courses[courseId];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg mb-4">Duration: {course.duration}</p>
      <p className="text-lg mb-4">Stipend: {course.stipend}</p>
      <h2 className="text-2xl font-semibold mb-2">What you'll learn:</h2>
      <ul className="list-disc list-inside mb-4">
        {course.features.map((feature: string, index: number) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Expected Salary:</h2>
      <p className="text-lg font-semibold">{course.expectedSalary}</p>
      <h2 className="text-2xl font-semibold mb-2">Career Scope:</h2>
      <ul className="list-disc list-inside">
        {course.scope.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetail;
