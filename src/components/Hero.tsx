import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="AI Technology Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 hero-bg"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-medium text-sm">Next Generation AI Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Powering Business{" "}
            <span className="gradient-text">Intelligence</span>{" "}
            with Advanced AI
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Powering Business Intelligence with Advanced AI solutions for Education & Exams. 
            Delivering Verifiable Outcomes & Credible insights that Build Trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products">
              <Button size="lg" className="glow-effect interactive px-8 py-4 text-lg">
                Explore Products
              </Button>
            </a>
            <a href="#contact">
              <Button variant="outline" size="lg" className="interactive px-8 py-4 text-lg">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-2">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};