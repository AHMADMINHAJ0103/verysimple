import { Link } from "react-router-dom";

export default function Mixed() {
  // ✅ Inline dataset replacing external import
  const techData = [
    {
      id: 1,
      title: "The Rise of Artificial Intelligence in Modern Tech",
      category: "Artificial Intelligence",
      description:
        "Artificial intelligence has transformed the way we approach everyday tasks. From personal assistants to data-driven decision-making systems, AI continues to redefine efficiency and innovation across industries.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      author: "John Doe",
      time: "2 min read",
    },
    {
      id: 2,
      title: "5G Networks and the Future of Connectivity",
      category: "Networking",
      description:
        "The rollout of 5G networks is revolutionizing global communication. With faster speeds, reduced latency, and enhanced connectivity, 5G enables the rise of smart cities and IoT applications.",
      image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc6",
      author: "Jane Smith",
      time: "3 min read",
    },
    {
      id: 3,
      title: "The Power of Cloud Computing in 2025",
      category: "Cloud",
      description:
        "Cloud computing continues to dominate IT infrastructure with its flexibility, scalability, and cost-efficiency. Enterprises are shifting to hybrid and multi-cloud strategies to balance performance and security.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      author: "Michael Chen",
      time: "4 min read",
    },
    {
      id: 4,
      title: "Cybersecurity in a Hyperconnected World",
      category: "Security",
      description:
        "As digital transformation accelerates, cybersecurity has become a top priority for businesses. Emerging threats demand advanced security frameworks and AI-based defense systems.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      author: "Sara Patel",
      time: "5 min read",
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier",
      category: "Quantum Tech",
      description:
        "Quantum computing promises unprecedented computational power by leveraging qubits. Though early, it could revolutionize industries like cryptography and pharmaceuticals.",
      image: "https://images.unsplash.com/photo-1618828665683-7c1d6b9a5b6b",
      author: "Liam Anderson",
      time: "6 min read",
    },
    {
      id: 6,
      title: "The Future of Augmented Reality",
      category: "AR/VR",
      description:
        "Augmented reality is bridging the gap between the physical and digital worlds, powering immersive experiences in education, retail, and entertainment.",
      image: "https://images.unsplash.com/photo-1581091870622-8c3a5b6f8b22",
      author: "Emily Zhang",
      time: "3 min read",
    },
    {
      id: 7,
      title: "Green Tech Innovations for a Sustainable Future",
      category: "Sustainability",
      description:
        "Green technology is reshaping how industries minimize waste and carbon emissions. From clean energy to circular economy models, eco-innovation is accelerating.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      author: "Ravi Kumar",
      time: "4 min read",
    },
    {
      id: 8,
      title: "The Role of Blockchain Beyond Cryptocurrency",
      category: "Blockchain",
      description:
        "Blockchain technology extends far beyond cryptocurrencies. It’s driving transparency, security, and decentralization in sectors like supply chain and healthcare.",
      image: "https://images.unsplash.com/photo-1621508665197-7f3b0a2b2c4c",
      author: "Olivia Brown",
      time: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 bg-gradient-to-r from-[#9B2A22] to-[#2F0D0A] w-full px-6 pb-10">
      <div className="w-full max-w-6xl text-left">
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-10 border-red-500 pb-2 ">
          All
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[40px] max-w-[1500px] w-full">
        {techData.map((article) => (
          <Link
            key={article.id}
            to={`/individual/${article.id}`}
            state={{ article }}
            className="group block bg-[#EBEAEA] rounded-2xl shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative p-3 overflow-hidden rounded-2xl">
              <div className="relative bg-white rounded-2xl overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-60 object-cover transform transition-transform duration-700 group-hover:scale-105 rounded-2xl"
                />
              </div>

              <span className="absolute top-3 left-3 text-white text-xs px-3 py-1 bg-black/40 rounded">
                {article.category}
              </span>

              <h3 className="absolute top-10 left-6 w-[180px] text-md font-semibold mt-1 text-white text-left">
                {article.title}
              </h3>
            </div>

            <div className="p-4">
              <div className="mt-3 text-sm text-gray-600">
                <p className="font-semibold text-xl text-[#8B0D0D]">
                  {article.author}
                </p>
                <p>{article.time}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
