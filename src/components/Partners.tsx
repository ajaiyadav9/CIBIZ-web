import { Card, CardContent } from "@/components/ui/card";

export const Partners = () => {
  const partners = [
    {
      name: "Yotta",
      logo: "/partners/yotta.png",
      alt: "Yotta Data Center"
    },
    {
      name: "Gemini",
      logo: "/partners/gemini.jpg",
      alt: "Google Gemini AI"
    },
    {
      name: "OpenAI",
      logo: "/partners/openai.png",
      alt: "OpenAI"
    },
    {
      name: "AWS",
      logo: "/partners/aws.jpg",
      alt: "Amazon Web Services"
    },
    {
      name: "Eaton Power",
      logo: "/partners/eaton.png",
      alt: "Eaton Power"
    }
  ];

  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 mb-6 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-primary font-medium text-sm">Our Companion</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Authorized <span className="gradient-text">Partner</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are proud to be authorized partners with leading technology companies, 
            enabling us to deliver world-class AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <Card key={index} className="card-premium w-full max-w-[200px] interactive hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-center justify-center h-32">
                <img 
                  src={partner.logo} 
                  alt={partner.alt}
                  className="max-h-20 max-w-full object-contain"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
