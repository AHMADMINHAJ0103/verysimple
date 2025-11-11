import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Slider() {
  // ✅ Directly include techData here
  const techData = [
    {
      id: 1,
      title: "The Rise of Artificial Intelligence in Modern Tech",
      description:
        "Artificial intelligence has transformed the way we approach everyday tasks. From personal assistants to data-driven decision-making systems, AI continues to redefine efficiency and innovation across industries. Startups and enterprises alike are investing heavily in machine learning algorithms to enhance automation, creativity, and performance in the digital age.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      author: "John Doe",
    },
    {
      id: 2,
      title: "5G Networks and the Future of Connectivity",
      description:
        "The rollout of 5G networks is revolutionizing global communication. With faster speeds, reduced latency, and enhanced connectivity, 5G enables the rise of smart cities, autonomous vehicles, and seamless IoT integration. Businesses and developers are preparing for a new era where instant connectivity powers real-time applications and immersive experiences.",
      image: "https://images.unsplash.com/photo-1554475901-4538ddfbccc6",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "The Power of Cloud Computing in 2025",
      description:
        "Cloud computing continues to dominate IT infrastructure with its flexibility, scalability, and cost-efficiency. Enterprises are shifting to hybrid and multi-cloud strategies to balance performance and security. As demand for remote work and digital collaboration grows, cloud-based solutions are shaping how organizations operate and innovate in a data-driven world.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      author: "Michael Chen",
    },
    {
      id: 4,
      title: "Cybersecurity in a Hyperconnected World",
      description:
        "As digital transformation accelerates, cybersecurity has become a top priority for businesses and individuals. Emerging threats, from ransomware to phishing, demand advanced security frameworks and AI-based defense systems. Continuous education and proactive strategies are vital to safeguarding data, privacy, and trust in the interconnected digital ecosystem.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      author: "Sara Patel",
    },
    {
      id: 5,
      title: "Quantum Computing: The Next Frontier",
      description:
        "Quantum computing promises unprecedented computational power by leveraging quantum bits, or qubits. Though still in its infancy, this technology has the potential to revolutionize industries such as cryptography, pharmaceuticals, and materials science. Tech giants and research labs are racing to achieve quantum supremacy and unlock new realms of problem-solving.",
      image: "https://images.unsplash.com/photo-1618828665683-7c1d6b9a5b6b",
      author: "Liam Anderson",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === techData.length - 1 ? 0 : prev + 1));
  };

 useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev === techData.length - 1 ? 0 : prev + 1));
  }, 7000);

  return () => clearInterval(interval);
}, [techData.length]);


  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      {techData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Two-column layout */}
          <div className="flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-16 gap-10">
            {/* Left side: Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-[90%] h-[400px] object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Right side: Text + Button */}
            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start">
              <h1 className="text-2xl md:text-3xl font-semibold text-[#2b0d0d] mb-4 w-[90%]">
                {slide.title}
              </h1>

              {/* ✅ Description (50 words only + Read More link) */}
              <p className="text-lg text-gray-700 mb-4 w-[90%] leading-relaxed">
                {slide.description
                  ?.trim()
                  .replace(/\s+/g, " ")
                  .split(" ")
                  .slice(0, 50)
                  .join(" ")}
                {slide.description.split(" ").length > 50 && (
                  <>
                    ...{" "}
                    <Link
                      to={`/individual/${slide.id}`}
                      state={{ article: slide }}
                      className="text-[#2b0d0d] font-semibold underline hover:text-[#451515] transition"
                    >
                      Read More
                    </Link>
                  </>
                )}
              </p>

              <p className="text-lg text-gray-600 mb-6">{slide.author}</p>

              <div className="flex items-center gap-4">
                <button
                  onClick={nextSlide}
                  className="bg-[#2b0d0d] p-3 rounded-full hover:bg-[#451515] transition transform hover:translate-x-1"
                >
                  <ArrowRight className="text-white w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
