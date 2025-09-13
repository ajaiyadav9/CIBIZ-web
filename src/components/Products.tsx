import { ProductCard } from "./ProductCard";
import { 
  Search, 
  Eye, 
  FileText, 
  Users, 
  MessageSquare, 
  TrendingUp 
} from "lucide-react";

export const Products = () => {
  const products = [
    {
      title: "ArthVishrad",
      description: "Advanced examination data analysis tool that provides deep insights into post-examination data, helping educational institutions improve assessment quality and student outcomes.",
      icon: Search,
      features: [
        "Deep data analytics",
        "Assessment quality metrics",
        "Student performance insights",
        "Institutional reporting"
      ]
    },
    {
      title: "Drishti",
      description: "Smart face recognition software designed for secure entry and exit management, ensuring only authorized personnel can access your facilities.",
      icon: Eye,
      features: [
        "Advanced face recognition",
        "Secure access control",
        "Real-time monitoring",
        "Integration capabilities"
      ]
    },
    {
      title: "Smart Paper",
      description: "Multilingual question paper generator that enables educational institutions to create comprehensive assessments in multiple languages with ease.",
      icon: FileText,
      features: [
        "Multi-language support",
        "Automated generation",
        "Customizable templates",
        "Quality assurance"
      ]
    },
    {
      title: "Attendance 360",
      description: "Face recognition-based attendance system that automates attendance tracking with high accuracy, eliminating manual processes and buddy punching.",
      icon: Users,
      features: [
        "Facial recognition accuracy",
        "Automated tracking",
        "Anti-spoofing technology",
        "Comprehensive reporting"
      ]
    },
    {
      title: "Samvaad",
      description: "Intelligent chatbot solution that enhances customer service by providing instant responses to queries in multiple languages, available 24/7.",
      icon: MessageSquare,
      features: [
        "Multi-language chat",
        "24/7 availability",
        "Natural language processing",
        "Integration ready"
      ]
    },
    {
      title: "ShareNxt",
      description: "Advanced share market prediction tool powered by Large Language Models and Natural Language Processing to help investors make informed decisions.",
      icon: TrendingUp,
      features: [
        "LLM-powered predictions",
        "Market trend analysis",
        "Risk assessment",
        "Investment insights"
      ]
    }
  ];

  return (
    <section id="products" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-medium text-sm">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI-Powered <span className="gradient-text">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our suite of artificial intelligence solutions designed to transform 
            your business operations and decision-making processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};