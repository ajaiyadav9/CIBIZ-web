import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Eye, 
  FileText, 
  Users, 
  MessageSquare, 
  TrendingUp,
  QrCode,
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const ExperiencePage = () => {
  const products = [
    {
      id: "arthvisharad",
      title: "Arthvisharad",
      tagline: "Advanced Examination Analytics",
      description: "Deep insights into post-examination data, helping educational institutions improve assessment quality and student outcomes with AI-powered analysis.",
      icon: Search,
      features: ["Deep data analytics", "Assessment quality metrics", "Student performance insights", "Institutional reporting"],
      benefits: ["Improve pass rates by 25%", "Reduce manual analysis time by 80%", "Real-time performance tracking"],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: "drishti",
      title: "Drishti",
      tagline: "Smart Face Recognition",
      description: "Secure entry and exit management with advanced facial recognition technology, ensuring only authorized personnel access your facilities.",
      icon: Eye,
      features: ["Advanced face recognition", "Secure access control", "Real-time monitoring", "Integration capabilities"],
      benefits: ["99.9% recognition accuracy", "Sub-second verification", "Anti-spoofing protection"],
      gradient: "from-violet-500 to-purple-600"
    },
    {
      id: "smart-paper",
      title: "Smart Paper",
      tagline: "Multilingual Question Generator",
      description: "Create comprehensive assessments in multiple languages with ease using AI-powered question paper generation.",
      icon: FileText,
      features: ["Multi-language support", "Automated generation", "Customizable templates", "Quality assurance"],
      benefits: ["Support for 20+ languages", "Generate papers in minutes", "Difficulty level balancing"],
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: "attendance-360",
      title: "Attendance 360",
      tagline: "Face Recognition Attendance",
      description: "Automate attendance tracking with high accuracy facial recognition, eliminating manual processes and buddy punching.",
      icon: Users,
      features: ["Facial recognition accuracy", "Automated tracking", "Anti-spoofing technology", "Comprehensive reporting"],
      benefits: ["Eliminate buddy punching", "Real-time attendance data", "Seamless payroll integration"],
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: "samvaad",
      title: "Samvaad",
      tagline: "Intelligent Chatbot",
      description: "Enhance customer service with instant multilingual responses, available 24/7 with natural language understanding.",
      icon: MessageSquare,
      features: ["Multi-language chat", "24/7 availability", "Natural language processing", "Integration ready"],
      benefits: ["Handle 1000+ queries simultaneously", "Reduce response time by 90%", "Improve customer satisfaction"],
      gradient: "from-pink-500 to-rose-600"
    },
    {
      id: "samadhanika",
      title: "Samadhanika",
      tagline: "AI Complaint Management",
      description: "Complete complaint management with Email, Chatbot, QR-based web support. Handles handwritten text, video, and audio attachments.",
      icon: TrendingUp,
      features: ["Email & Chatbot support", "QR based Web interface", "Handwritten text recognition", "Video & Audio attachments"],
      benefits: ["Faster complaint resolution", "Multi-channel support", "AI-powered categorization"],
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      id: "anuvadika",
      title: "Anuvadika",
      tagline: "AI Translation & Transcription",
      description: "Seamless multilingual communication with high-accuracy AI-powered translation and real-time transcription.",
      icon: MessageSquare,
      features: ["Multi-language translation", "Real-time transcription", "Voice-to-text conversion", "Document translation"],
      benefits: ["Support for 50+ languages", "98% translation accuracy", "Real-time processing"],
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      id: "abhigyan",
      title: "Abhigyan",
      tagline: "Offline QR Identification",
      description: "Offline QR-based solution for quick and reliable person identification with secure storage of image, text, and contact details.",
      icon: QrCode,
      features: ["Offline QR identification", "Image & text storage", "ID number management", "Contact details integration"],
      benefits: ["Works without internet", "Instant verification", "Secure data storage"],
      gradient: "from-slate-500 to-gray-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Experience Our AI Solutions
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">CIBiz Experience</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Explore and experience our suite of AI-powered products designed to transform 
              your business operations with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#products">
                <Button size="lg" className="glow-effect interactive px-8 py-4 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  Start Exploring
                </Button>
              </Link>
              <Link to="/#contact">
                <Button variant="outline" size="lg" className="interactive px-8 py-4 text-lg">
                  Request Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Product Suite</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Click on any product to experience its capabilities firsthand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <ProductDemoCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 hero-bg"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch with our team to schedule a personalized demo and discover 
              how our AI solutions can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button size="lg" className="glow-effect interactive px-8 py-4 text-lg">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/">
                <Button variant="outline" size="lg" className="interactive px-8 py-4 text-lg">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

interface ProductDemoCardProps {
  product: {
    id: string;
    title: string;
    tagline: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    features: string[];
    benefits: string[];
    gradient: string;
  };
  index: number;
}

const ProductDemoCard = ({ product, index }: ProductDemoCardProps) => {
  const Icon = product.icon;
  
  const handleDemoClick = () => {
    // Temporarily redirect to home page until actual demo links are provided
    window.location.href = "/";
  };

  return (
    <Card 
      className="card-premium interactive group h-full overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            AI Powered
          </Badge>
        </div>
        
        <CardTitle className="text-2xl font-bold mb-1">{product.title}</CardTitle>
        <p className="text-primary font-medium text-sm">{product.tagline}</p>
        <CardDescription className="text-base text-muted-foreground leading-relaxed mt-3">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-6">
        {/* Features */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
          <div className="grid grid-cols-2 gap-2">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Benefits</h4>
          <div className="space-y-2">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button 
            onClick={handleDemoClick}
            className="flex-1 interactive group-hover:bg-primary group-hover:text-primary-foreground"
          >
            <Play className="w-4 h-4 mr-2" />
            Try Demo
          </Button>
          <Button 
            variant="outline" 
            onClick={handleDemoClick}
            className="interactive"
          >
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperiencePage;
