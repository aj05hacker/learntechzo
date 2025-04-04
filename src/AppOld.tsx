import React from 'react';
import { 
  GraduationCap, 
  Users, 
  Award, 
  BookOpen,
  ChevronRight,
  Star,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Code,
  Database,
  Cloud,
  LineChart,
  Cpu,
  Shield,
  Menu,
  X,
  Target
} from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://library.css.abdulhajees.in/stored-images/LT_logo.avif" 
                alt="LearntechZo Logo" 
                className="h-12"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#programs" className="hover:text-blue-200 transition font-semibold">Programs</a>
              <a href="#about" className="hover:text-blue-200 transition font-semibold">About</a>
              <a href="#testimonials" className="hover:text-blue-200 transition font-semibold">Testimonials</a>
              <a href="#contact" className="hover:text-blue-200 transition font-semibold">Contact</a>
            </div>
            <div className="hidden md:flex space-x-4">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
                Get Started
              </button>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-blue-600 p-4 shadow-lg">
              <div className="flex flex-col space-y-4">
                <a href="#programs" className="text-white hover:text-blue-200 transition">Programs</a>
                <a href="#about" className="text-white hover:text-blue-200 transition">About</a>
                <a href="#testimonials" className="text-white hover:text-blue-200 transition">Testimonials</a>
                <a href="#contact" className="text-white hover:text-blue-200 transition">Contact</a>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>

        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Transform Your Career with Tech Education
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Join our industry-leading programs to build real-world skills and launch your tech career.
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition flex items-center">
                  Explore Programs <ChevronRight className="ml-2" />
                </button>
                <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=945,h=891,fit=crop,trim=243.5715935334873;0;135.3175519630485;0/d95K6LkvRDcv9M5q/45bea7ebd96e93c2ae304f792f5bb52a-AGB6jXxEr0Hza3Na.jpg" 
                alt="LearntechZo"
                className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:-translate-y-2 transition duration-300">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">1000+</h3>
              <p className="text-gray-600">Students Trained</p>
            </div>
            <div className="text-center transform hover:-translate-y-2 transition duration-300">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-gray-600">Placement Support</p>
            </div>
            <div className="text-center transform hover:-translate-y-2 transition duration-300">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">6+</h3>
              <p className="text-gray-600">Programs</p>
            </div>
            <div className="text-center transform hover:-translate-y-2 transition duration-300">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">4.9/5</h3>
              <p className="text-gray-600">Student Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Stack Development",
                duration: "3 Months",
                stipend: "₹5000-₹10000/month",
                icon: Code,
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
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
              {
                title: "Data Science & Analytics",
                duration: "3 Months",
                stipend: "₹5000-₹10000/month",
                icon: Database,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                features: [
                  "Python, SQL, Power BI",
                  "Machine Learning Basics",
                  "Real-time Analytics",
                  "Industry Projects"
                ],
                expectedSalary: "₹4-10 LPA",
                scope: [
                  "Growing field with high demand",
                  "Multiple industry applications",
                  "Research opportunities",
                  "Business intelligence roles"
                ]
              },
              {
                title: "Cloud Computing",
                duration: "3 Months",
                stipend: "₹5000-₹10000/month",
                icon: Cloud,
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
                features: [
                  "AWS/Azure Training",
                  "Cloud Architecture",
                  "DevOps Integration",
                  "Security Best Practices"
                ],
                expectedSalary: "₹5-12 LPA",
                scope: [
                  "High demand in enterprise",
                  "Remote work opportunities",
                  "Multiple certification paths",
                  "Growing cloud adoption"
                ]
              },
              {
                title: "Machine Learning",
                duration: "3 Months",
                stipend: "₹5000-₹10000/month",
                icon: Cpu,
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
                features: [
                  "Python for ML",
                  "Deep Learning",
                  "NLP & Computer Vision",
                  "Research Projects"
                ],
                expectedSalary: "₹6-15 LPA",
                scope: [
                  "Cutting-edge technology",
                  "Research opportunities",
                  "Startup potential",
                  "AI integration demand"
                ]
              },
              {
                title: "Digital Marketing",
                duration: "3 Months",
                stipend: "₹5000-₹10000/month",
                icon: Target,
                image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
                features: [
                  "SEO/SEM",
                  "Social Media Marketing",
                  "Content Strategy",
                  "Analytics & ROI"
                ],
                expectedSalary: "₹3-8 LPA",
                scope: [
                  "Essential for all businesses",
                  "Freelancing opportunities",
                  "Agency career path",
                  "Marketing leadership roles"
                ]
              },
              {
                title: "Cybersecurity",
                duration: "3 Months",
                stipend: "₹5000-₹10000/month",
                icon: Shield,
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
                features: [
                  "Network Security",
                  "Ethical Hacking",
                  "Security Protocols",
                  "Incident Response"
                ],
                expectedSalary: "₹5-15 LPA",
                scope: [
                  "Critical enterprise need",
                  "Government sector demand",
                  "Consulting opportunities",
                  "Security leadership roles"
                ]
              }
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
                <div className="relative">
                  <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
                    <program.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{program.title}</h3>
                  <div className="flex items-center mb-2">
                    <Calendar className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">{program.duration}</span>
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">
                    Stipend: {program.stipend}
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Expected Salary:</h4>
                    <p className="text-blue-600 font-semibold">{program.expectedSalary}</p>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Career Scope:</h4>
                    <ul className="space-y-2">
                      {program.scope.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a 
                    href={`https://learntechzo.com/programs/${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition text-center block"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Kumar",
                role: "Full Stack Developer at TCS",
                image: "https://learntechzo.com/wp-content/uploads/2023/10/rahul-testimonial.jpg",
                quote: "LearntechZo's Full Stack program helped me transition from a fresher to a professional developer. The practical approach and mentorship were invaluable."
              },
              {
                name: "Priya Sharma",
                role: "Data Analyst at Infosys",
                image: "https://learntechzo.com/wp-content/uploads/2023/10/priya-testimonial.jpg",
                quote: "The Data Science program at LearntechZo gave me the perfect foundation. The live projects and industry exposure made all the difference."
              },
              {
                name: "Amit Patel",
                role: "Cloud Engineer at Wipro",
                image: "https://learntechzo.com/wp-content/uploads/2023/10/amit-testimonial.jpg",
                quote: "Thanks to LearntechZo's Cloud Computing program, I was able to secure a great position. The hands-on experience was exactly what I needed."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg transform hover:scale-105 transition duration-300">
                <div className="flex items-center mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="https://learntechzo.com/wp-content/uploads/2023/10/cropped-learntechzo-logo-1.png" 
                  alt="LearntechZo Logo" 
                  className="h-8"
                />
              </div>
              <p className="text-gray-400">Empowering careers through quality tech education.</p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-gray-400 hover:text-white transition">Programs</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Success Stories</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Contact</h5>
              <ul className="space-y-2 text-gray-400">
                <li>info@learntechzo.com</li>
                <li>+91 9876543210</li>
                <li>123 Tech Park, Bangalore, Karnataka 560001</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Newsletter</h5>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates and offers.</p>
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-l-full w-full text-gray-900" />
                <button className="bg-blue-600 px-6 rounded-r-full hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 LearntechZo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;