import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      content: "3/228 Viram Khand Gomtinagar\nLucknow Uttar Pradesh\nIndia 226010"
    },
    {
      icon: Phone,
      title: "Contact Number",
      content: "+91 991870 1870"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@cibiz.co.in"
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Monday - Saturday: 9AM - 6PM\nSunday: Closed"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-medium text-sm">Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about our AI solutions? Contact us and our team will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="What's this about?" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your project or inquiry..."
                  rows={6}
                />
              </div>
              
              <Button className="w-full glow-effect interactive" size="lg">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-premium interactive">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{info.title}</h4>
                    <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};