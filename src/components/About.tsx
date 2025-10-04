import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const stats = [
    { number: "6+", label: "AI Products", icon: "🤖" },
    { number: "5+", label: "Happy Clients", icon: "😊" },
    { number: "98%", label: "Satisfaction", icon: "⭐" },
    { number: "24/7", label: "Support", icon: "🛟" }
  ];

  const features = [
    {
      title: "State-of-the-art AI algorithms",
      description: "Trained on diverse datasets for maximum accuracy and performance"
    },
    {
      title: "Custom integration capabilities",
      description: "Seamlessly integrate with your existing business systems"
    },
    {
      title: "Continuous updates",
      description: "Regular improvements to ensure optimal performance"
    },
    {
      title: "Dedicated technical support",
      description: "Expert assistance and implementation guidance"
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-block px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary font-medium text-sm">About Colosseum Global Integrated Business LLP</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pioneering the Next Generation of{" "}
              <span className="gradient-text">AI Solutions</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Colosseum Global Integrated Business LLP, we're pioneering the next generation of artificial 
              intelligence solutions. Our mission is to empower organizations with advanced AI tools 
              that transform raw data into actionable intelligence.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With a team of expert data scientists and engineers, we develop cutting-edge AI products 
              tailored to solve specific business challenges across education, security, attendance 
              management, customer service, and financial markets.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-premium text-center p-8">
                <CardContent className="p-0">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};