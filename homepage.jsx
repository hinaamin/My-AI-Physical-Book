import React from 'react';

export default function HomePage() {
  const pillars = [
    {
      title: "Co-Learning Philosophy",
      description: "Human and AI learning together synergistically for mutual growth"
    },
    {
      title: "Dual Language Mastery",
      description: "Python and TypeScript mastery for full-stack AI-native applications"
    },
    {
      title: "Spec-Driven Development",
      description: "Specifications as living blueprints that drive code generation"
    },
    {
      title: "Agentic AI Systems",
      description: "Building autonomous AI agents that reason and collaborate"
    },
    {
      title: "Production Architecture",
      description: "Cloud-native systems designed for real-world deployment"
    },
    {
      title: "Open Source",
      description: "Community-driven development and transparency"
    }
  ];

  const topics = [
    { name: "AI Assisted Coding", icon: "🛠️", logo: "AI" },
    { name: "Spec-to-Code", icon: "📝", logo: "📄" },
    { name: "Agentic Systems", icon: "🤖", logo: "AGT" },
    { name: "OpenAI Agents SDK", icon: "🧠", logo: "OAI" },
    { name: "Google ADK", icon: "🔍", logo: "GGL" },
    { name: "Cloud Deployment", icon: "☁️", logo: "CLOUD" },
    { name: "Docker & K8s", icon: "🐳", logo: "K8S" },
    { name: "Agent Orchestration", icon: "🔄", logo: "SYNC" },
    { name: "Natural Language Interfaces", icon: "💬", logo: "NL" },
    { name: "Enterprise AI", icon: "🏢", logo: "ENT" },
    { name: "AI Reasoning", icon: "🤔", logo: "REASON" },
    { name: "Intelligent Collaborations", icon: "🤝", logo: "COLAB" }
  ];

  const features = [
    "Co-learning with AI philosophy",
    "Specs as living blueprints",
    "Production-first learning approach",
    "Architecture-first intelligent systems",
    "Python & TypeScript dual mastery",
    "OpenAI Agents SDK integration",
    "Google ADK compatibility",
    "Cloud-native deployment ready",
    "From AI tools to AI-native systems",
    "Organizational AI maturity framework",
    "Real enterprise system development",
    "Human-AI collaborative coding"
  ];

  const techStack = [
    "Python", "TypeScript", "OpenAI", "Google ADK",
    "Docker", "Kubernetes", "Dapr", "Ray",
    "Next.js", "FastAPI", "LangGraph", "Agents SDK"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI-Native Software Development
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
          Co-learning with AI from Assisted to Driven to Native —
          From Programming Basics to Enterprise Agentic AI Systems
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            📘 Explore the Book
          </button>
          <button className="border border-blue-400 hover:bg-blue-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
            🚀 Start Learning
          </button>
        </div>
        <div className="mt-8 text-gray-400 max-w-2xl mx-auto">
          <p className="text-sm md:text-base">
            46 chapters covering the complete journey from AI tools to intelligent systems
          </p>
        </div>
      </section>

      {/* Core Framework */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">AI-Native Development Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3 text-blue-400">{pillar.title}</h3>
                <p className="text-gray-300">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">AI-Native Development Topics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topics.map((topic, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700 text-center hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-2xl mb-2">{topic.icon}</div>
                <div className="text-xs text-yellow-400 mb-1">{topic.logo}</div>
                <p className="text-xs sm:text-sm font-medium">{topic.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Key Learning Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-slate-800/30 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300"
              >
                <span className="text-green-400 text-xl mt-0.5">✓</span>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Learning Progression</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="w-64 h-80 mx-auto bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-xl font-bold">AI-Native Development</h3>
                  <p className="text-sm opacity-80 mt-2">From Basics to Enterprise</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Programming Basics & AI Tools",
                "Spec-Driven Development",
                "AI-Assisted Coding",
                "Agentic AI Systems",
                "Production Architecture",
                "Enterprise AI Deployment"
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Powered By</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300 text-center min-w-max"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Build the Future with AI-Native Software
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Start Learning
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300">
            Read the Book
          </button>
          <button className="border border-green-400 hover:bg-green-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
            Join Community
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800 text-center text-gray-400">
        <p>© 2025 AI-Native Software Development. Open Source & Community Driven.</p>
      </footer>
    </div>
  );
}