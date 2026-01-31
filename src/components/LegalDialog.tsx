import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "privacy" | "terms";
}

export const LegalDialog = ({ open, onOpenChange, type }: LegalDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-gradient-to-br from-background via-background to-secondary/20 border-primary/20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        <DialogHeader className="relative z-10">
          <DialogTitle className="text-2xl font-bold gradient-text">
            {type === "privacy" ? "Privacy Policy" : "Terms of Service"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[70vh] pr-4 relative z-10">
          {type === "privacy" ? <PrivacyContent /> : <TermsContent />}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

const PrivacyContent = () => (
  <div className="space-y-6 text-foreground/90">
    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">1. Introduction</h2>
      <p className="leading-relaxed">
        Colosseum Global Integrated Business Network LLP ("CIBIZ", "we", "our", or "us") is committed to protecting the privacy of visitors and users of our website and digital platforms. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
      </p>
      <p className="mt-2 leading-relaxed">
        By accessing or using our website, you agree to the terms of this Privacy Policy.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">2. Information We Collect</h2>
      <p className="mb-3">We may collect the following types of information:</p>
      
      <h3 className="font-medium mb-2">Personal Information</h3>
      <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
        <li>Name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Organization details</li>
        <li>Any information you voluntarily provide through forms, emails, or enquiries</li>
      </ul>
      
      <h3 className="font-medium mb-2">Technical and Usage Information</h3>
      <ul className="list-disc list-inside space-y-1 ml-4 mb-4">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device information</li>
        <li>Pages visited and time spent</li>
        <li>Referring URLs</li>
      </ul>
      
      <h3 className="font-medium mb-2">Cookies and Tracking Data</h3>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Basic analytics and session data to improve user experience</li>
      </ul>
      
      <p className="mt-3 text-muted-foreground">
        We do not knowingly collect sensitive personal data unless explicitly required for a specific engagement and agreed upon contractually.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">3. How We Use Your Information</h2>
      <p className="mb-3">We use the collected information to:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Respond to your enquiries and requests</li>
        <li>Provide and improve our products and services</li>
        <li>Communicate updates, proposals, or relevant information</li>
        <li>Maintain security and prevent misuse</li>
        <li>Perform analytics and performance monitoring</li>
        <li>Comply with legal and regulatory requirements</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">4. Data Sharing and Disclosure</h2>
      <p className="font-medium mb-2">We do not sell your personal data.</p>
      <p>We may share information only in specific cases as required by law or with your consent.</p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">5. Data Security</h2>
      <p className="leading-relaxed">
        We implement reasonable administrative, technical, and organizational safeguards to protect your data from unauthorized access, disclosure, alteration, or destruction.
      </p>
      <p className="mt-2 leading-relaxed text-muted-foreground">
        While we strive to protect your information, no internet transmission or storage system can be guaranteed 100% secure. Users share information at their own discretion.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">6. Cookies</h2>
      <p className="mb-3">Our website may use cookies or similar technologies to:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Maintain basic session functionality</li>
        <li>Understand usage patterns</li>
        <li>Improve performance and usability</li>
      </ul>
      <p className="mt-3 text-muted-foreground">
        You can control or disable cookies through your browser settings. Disabling cookies may affect certain site features.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">7. Contact for Privacy Matters</h2>
      <p className="mb-2">For any privacy-related queries or requests, you may contact:</p>
      <p className="font-medium">Email: director@cibiz.co.in</p>
      <div className="mt-2">
        <p className="font-medium">Address:</p>
        <p>Colosseum Global Integrated Business Network LLP</p>
        <p>3/228, Viram Khand-3, Gomtinagar</p>
        <p>Lucknow – 226010, Uttar Pradesh, India</p>
      </div>
    </section>
  </div>
);

const TermsContent = () => (
  <div className="space-y-6 text-foreground/90">
    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">1. Use of Website</h2>
      <p className="leading-relaxed mb-3">
        This website is provided for general information about our company, solutions, and services.
      </p>
      <p className="leading-relaxed mb-3">
        You agree to use the website only for lawful purposes and in a manner that does not infringe the rights or restrict the use of the website by others.
      </p>
      <p className="mb-2 font-medium">You must not:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Attempt unauthorized access to any system or data</li>
        <li>Introduce malicious code or attempt disruption</li>
        <li>Use the content for unlawful or misleading purposes</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">2. Intellectual Property</h2>
      <p className="leading-relaxed mb-3">
        All content on this website, including text, graphics, logos, software, designs, and documents, is the property of CIBIZ or its licensors and is protected by applicable intellectual property laws.
      </p>
      <p className="leading-relaxed">
        You may view or download content only for informational, non-commercial use. Any reproduction, modification, distribution, or commercial use without written permission is prohibited.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">3. User Obligations</h2>
      <p className="mb-3">By using this website, you agree to:</p>
      <ul className="list-disc list-inside space-y-1 ml-4">
        <li>Provide accurate information when submitting forms or enquiries</li>
        <li>Not misuse the website or its content</li>
        <li>Respect applicable laws and regulations</li>
        <li>Not represent any association or endorsement without authorization</li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">4. Limitation of Liability</h2>
      <p className="leading-relaxed mb-3">
        The website and its content are provided on an "as is" and "as available" basis.
      </p>
      <p className="leading-relaxed">
        CIBIZ makes no warranties regarding completeness, accuracy, or uninterrupted availability. To the maximum extent permitted by law, CIBIZ shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use the website.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">5. External Links</h2>
      <p className="leading-relaxed">
        The website may contain links to third-party sites. We are not responsible for the content, privacy practices, or availability of such external websites.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">6. Changes to Content or Terms</h2>
      <p className="leading-relaxed">
        We may update these Terms of Service or website content at any time without prior notice. Continued use of the website constitutes acceptance of the updated terms.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">7. Governing Law and Jurisdiction</h2>
      <p className="leading-relaxed">
        These Terms shall be governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts at Lucknow, Uttar Pradesh, India.
      </p>
    </section>

    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">8. Contact Details</h2>
      <p className="mb-2">For any questions regarding these Terms:</p>
      <p className="font-medium">Email: director@cibiz.co.in</p>
      <div className="mt-2">
        <p className="font-medium">Address:</p>
        <p>Colosseum Global Integrated Business Network LLP</p>
        <p>3/228, Viram Khand-3, Gomtinagar</p>
        <p>Lucknow – 226010, Uttar Pradesh, India</p>
      </div>
    </section>
  </div>
);
