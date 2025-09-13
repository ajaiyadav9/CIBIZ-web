export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/src/assets/cibiz-logo.png" 
                alt="Colosseum Global Integrated Business LLP" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Colosseum Global Integrated Business LLP</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Pioneering the next generation of artificial intelligence solutions. 
              Transforming businesses with cutting-edge AI technology.
            </p>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>3/228 Viram Khand Gomtinagar</p>
              <p>Lucknow Uttar Pradesh, India 226010</p>
              <p>Phone: +91 991870 1870</p>
              <p>Email: info@cibiz.co.in</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">ArthVishrad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Drishti</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Smart Paper</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Attendance 360</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Samvaad</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">ShareNxt</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Colosseum Global Integrated Business LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};