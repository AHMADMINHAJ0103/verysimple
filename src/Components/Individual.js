import React from "react";
import { useLocation, useParams, Link, useNavigate } from "react-router-dom";

export default function Individual() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Inline data (no external import)
  const techData = [
    {
      id: 1,
      title: "The Rise of Artificial Intelligence in Modern Tech",
      category: "Artificial Intelligence",
      description:
        "Artificial intelligence has transformed the way we approach everyday tasks. From personal assistants to data-driven decision-making systems, AI continues to redefine efficiency and innovation across industries.\n\nIn 2025, AI-driven automation is not just a luxury — it’s a necessity. Industries such as healthcare, finance, and manufacturing are leveraging machine learning to improve predictions, reduce errors, and enhance user experiences.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      author: "John Doe",
      time: "2 min read",
    },
    {
      id: 2,
      title: "5G Networks and the Future of Connectivity",
      category: "Networking",
      description:
        "The rollout of 5G networks is revolutionizing global communication. With faster speeds, reduced latency, and enhanced connectivity, 5G enables the rise of smart cities and IoT applications.\n\nAs countries race to expand coverage, the world is on the brink of a hyperconnected era where real-time data powers everything from autonomous cars to remote surgeries.",
      image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc6",
      author: "Jane Smith",
      time: "3 min read",
    },
    {
      id: 3,
      title: "The Power of Cloud Computing in 2025",
      category: "Cloud",
      description:
        "Cloud computing continues to dominate IT infrastructure with its flexibility, scalability, and cost-efficiency.\n\nModern enterprises now adopt hybrid and multi-cloud environments to balance performance and security, ensuring constant uptime and global accessibility.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      author: "Michael Chen",
      time: "4 min read",
    },
    {
      id: 4,
      title: "Cybersecurity in a Hyperconnected World",
      category: "Security",
      description:
        "As digital transformation accelerates, cybersecurity has become a top priority for businesses.\n\nEmerging threats demand advanced security frameworks, zero-trust models, and AI-based defense systems to protect user data in a hyperconnected world.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      author: "Sara Patel",
      time: "5 min read",
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier",
      category: "Quantum Tech",
      description:
        "Quantum computing promises unprecedented computational power by leveraging qubits. Though early, it could revolutionize industries like cryptography, pharmaceuticals, and materials science.\n\nResearchers are exploring algorithms that outperform classical systems, signaling a paradigm shift in computation.",
      image: "https://images.unsplash.com/photo-1618828665683-7c1d6b9a5b6b",
      author: "Liam Anderson",
      time: "6 min read",
    },
    {
      id: 6,
      title: "The Future of Augmented Reality",
      category: "AR/VR",
      description:
        "Augmented reality (AR) is bridging the gap between the physical and digital worlds.\n\nFrom immersive educational experiences to advanced retail applications, AR is reshaping how we interact with information and our surroundings.",
      image: "https://images.unsplash.com/photo-1581091870622-8c3a5b6f8b22",
      author: "Emily Zhang",
      time: "3 min read",
    },
    {
      id: 7,
      title: "Green Tech Innovations for a Sustainable Future",
      category: "Sustainability",
      description:
        "Green technology is reshaping how industries minimize waste and carbon emissions.\n\nFrom clean energy to circular economy models, sustainability-focused innovations are paving the way for a more responsible and regenerative planet.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      author: "Ravi Kumar",
      time: "4 min read",
    },
    {
      id: 8,
      title: "The Role of Blockchain Beyond Cryptocurrency",
      category: "Blockchain",
      description:
        "Blockchain technology extends far beyond cryptocurrencies.\n\nIt’s now driving transparency, traceability, and decentralization in industries such as supply chain, healthcare, and digital identity management.",
      image: "https://images.unsplash.com/photo-1621508665197-7f3b0a2b2c4c",
      author: "Olivia Brown",
      time: "5 min read",
    },
  ];

  // ✅ Use passed state if available; otherwise, match by id
  const article =
    location.state?.article || techData.find((a) => String(a.id) === String(id));

  if (!article) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 text-center text-white bg-gray-900">
        <p className="text-lg sm:text-xl md:text-2xl">Article not found.</p>
        <div className="mt-4">
          <Link
            to="/"
            className="text-blue-400 underline hover:text-blue-600 transition"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8 font-display">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6">
          {article.title}
        </h1>

        <div className="text-center mb-6">
          <p className="text-blue-300 text-lg sm:text-xl">{article.author}</p>
          <p className="text-gray-400 text-sm">{article.time}</p>
        </div>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line text-gray-200">
          {article.description}
        </p>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white py-2 px-6 sm:px-8 rounded-lg hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}
