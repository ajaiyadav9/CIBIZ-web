import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Code, Database, Zap } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience <span className="gradient-text">AI Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Try our cutting-edge AI solutions in action. See how our technology transforms 
            business operations with real-time demonstrations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="interactive hover:shadow-lg transition-shadow">
            <CardHeader>
              <Play className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Live Demo</CardTitle>
              <CardDescription>
                Interactive demos of our AI products in real-time
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="interactive hover:shadow-lg transition-shadow">
            <CardHeader>
              <Code className="w-10 h-10 text-primary mb-4" />
              <CardTitle>API Access</CardTitle>
              <CardDescription>
                Test our APIs with your own data and use cases
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="interactive hover:shadow-lg transition-shadow">
            <CardHeader>
              <Database className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Sample Data</CardTitle>
              <CardDescription>
                Explore pre-loaded datasets and scenarios
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="interactive hover:shadow-lg transition-shadow">
            <CardHeader>
              <Zap className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>
                Get started in minutes with guided tutorials
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" className="glow-effect interactive px-8 py-4 text-lg">
            Launch Demo Environment
          </Button>
        </div>
      </div>
    </section>
  );
};
