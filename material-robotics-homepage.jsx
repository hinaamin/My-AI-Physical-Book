import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Carousel data
  const carouselItems = [
    { id: 1, title: "Humanoid Robot Simulation", description: "Advanced physics simulation of humanoid robots", icon: "🤖" },
    { id: 2, title: "Digital Twin Environment", description: "Real-time digital twin of robotic systems", icon: "🌐" },
    { id: 3, title: "AI-Powered Navigation", description: "Autonomous navigation and path planning", icon: "🧭" },
    { id: 4, title: "Physical AI Models", description: "Deep learning models for physical interaction", icon: "🧠" },
    { id: 5, title: "Robotic Control Systems", description: "Advanced control algorithms for robotics", icon: "⚙️" },
    { id: 6, title: "Computer Vision", description: "AI-powered visual perception systems", icon: "👁️" },
    { id: 7, title: "Reinforcement Learning", description: "Training robots through interaction", icon: "🎯" }
  ];

  // Curriculum modules
  const curriculumModules = [
    {
      title: "Introduction to Physical AI",
      description: "Fundamentals of AI in physical systems",
      icon: "🤖",
      duration: "2 weeks"
    },
    {
      title: "Humanoid Kinematics",
      description: "Understanding robot movement and mechanics",
      icon: "🦾",
      duration: "3 weeks"
    },
    {
      title: "Sensor Integration",
      description: "Working with sensors and perception systems",
      icon: "📡",
      duration: "2 weeks"
    },
    {
      title: "Control Systems",
      description: "Advanced control algorithms for robotics",
      icon: "⚙️",
      duration: "3 weeks"
    },
    {
      title: "AI Decision Making",
      description: "Machine learning for robotic autonomy",
      icon: "🧠",
      duration: "4 weeks"
    },
    {
      title: "Simulation & Testing",
      description: "Virtual environments for robot development",
      icon: "🎮",
      duration: "2 weeks"
    }
  ];

  // Features
  const features = [
    { icon: "🎓", title: "Expert-Led Courses", description: "Learn from industry professionals" },
    { icon: "💻", title: "Hands-On Projects", description: "Real-world robotics applications" },
    { icon: "🔄", title: "Continuous Updates", description: "Latest in robotics technology" },
    { icon: "👥", title: "Community Support", description: "Connect with fellow learners" }
  ];

  // Animate elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">🤖</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <span className="text-xl font-semibold">PhysicalAI Robotics</span>
                <div className="text-xs text-gray-500">AI-Powered Learning</div>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#curriculum" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Curriculum</a>
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
              <a href="#framework" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Framework</a>
              <a href="#showcase" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Showcase</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="https://github.com" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
                <span>🐙</span>
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a href="https://docs.example.com" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
                <span>📖</span>
                <span className="hidden sm:inline">Docs</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div
              id="hero"
              data-animate
              className={`transform transition-all duration-1000 ${
                isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Learn <span className="text-blue-600">Physical AI</span> &
                <br />
                <span className="text-purple-600">Humanoid Robotics</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Master the future of robotics with cutting-edge Physical AI techniques,
                humanoid robot development, and AI-powered automation systems.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold
                              transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Learning
              </button>
            </div>

            {/* Animated Robotics Visual */}
            <div
              id="visual"
              data-animate
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible.visual ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative mx-auto w-full max-w-4xl h-64 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                <div className="relative z-10 text-center">
                  <div className="flex justify-center space-x-8 mb-6">
                    <div className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🤖</div>
                    <div className="text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🧠</div>
                    <div className="text-6xl animate-bounce" style={{ animationDelay: '1s' }}>🦾</div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    {[...Array(7)].map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            id="curriculum-title"
            data-animate
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible['curriculum-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Learning Modules</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum designed for both beginners and advanced learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {curriculumModules.map((module, index) => (
              <div
                key={index}
                id={`module-${index}`}
                data-animate
                className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible[`module-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{module.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600 mb-4">{module.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600 font-medium">{module.duration}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                data-animate
                className={`text-center p-6 rounded-xl bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible[`feature-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Framework & Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            id="framework-title"
            data-animate
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible['framework-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">AI Framework & Technologies</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge AI technologies and robotics frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              { name: "TensorFlow", icon: "🧠", color: "from-orange-400 to-red-500" },
              { name: "PyTorch", icon: "🔥", color: "from-orange-500 to-yellow-500" },
              { name: "ROS", icon: "🤖", color: "from-blue-400 to-blue-600" },
              { name: "OpenAI", icon: "⚡", color: "from-green-400 to-emerald-500" },
              { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500" },
              { name: "Unity", icon: "🎮", color: "from-purple-400 to-pink-500" },
              { name: "Gazebo", icon: "🔧", color: "from-gray-400 to-gray-600" },
              { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-500" },
              { name: "Keras", icon: "🧠", color: "from-red-400 to-pink-500" },
              { name: "NumPy", icon: "📊", color: "from-blue-500 to-teal-500" },
              { name: "Pandas", icon: "🐼", color: "from-yellow-400 to-orange-500" },
              { name: "Scikit", icon: "🔬", color: "from-green-400 to-teal-500" }
            ].map((tech, index) => (
              <div
                key={index}
                id={`tech-${index}`}
                data-animate
                className={`text-center transform transition-all duration-500 hover:scale-110 ${
                  isVisible[`tech-${index}`] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-white text-2xl shadow-lg`}>
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Showcase */}
      <section id="showcase" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div
            id="showcase-title"
            data-animate
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible['showcase-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Robotics Showcase</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore cutting-edge robotics simulations and AI-powered systems
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {carouselItems.map((item) => (
                  <div key={item.id} className="w-full flex-shrink-0 p-8">
                    <div className="text-center">
                      <div className="text-6xl mb-6">{item.icon}</div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselItems.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build the Future of Robotics?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of learners mastering Physical AI and Humanoid Robotics
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700
                          text-white px-8 py-4 rounded-full font-semibold transition-all duration-300
                          transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-semibold">PhysicalAI Robotics</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Docs</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Community</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PhysicalAI Robotics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;