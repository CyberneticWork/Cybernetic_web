import { CheckCircle } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => {
  const location = useLocation();
  const { name = "there" } = (location.state as { name?: string }) || {};

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thank You, <span className="gradient-text">{name}!</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8">
            We've received your message and will get back to you within 24
            hours. Our team is already reviewing your inquiry.
          </p>

          <div className="glass rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">What happens next?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="space-y-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">1</span>
                </div>
                <h3 className="font-bold text-lg">Initial Review</h3>
                <p className="text-muted-foreground">
                  Our team will review your message and requirements
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">2</span>
                </div>
                <h3 className="font-bold text-lg">Contact</h3>
                <p className="text-muted-foreground">
                  A team member will contact you to discuss details
                </p>
              </div>

              <div className="space-y-4">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="font-bold text-white">3</span>
                </div>
                <h3 className="font-bold text-lg">Proposal</h3>
                <p className="text-muted-foreground">
                  We'll prepare a custom proposal for your project
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              asChild
              className="btn-gradient text-primary-foreground px-8 py-6 rounded-full"
            >
              <Link to="/">Return to Homepage</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="px-8 py-6 rounded-full"
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
