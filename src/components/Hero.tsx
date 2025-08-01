import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16 bg-gradient-to-b from-background to-background/90"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary opacity-20 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary opacity-20 rounded-full blur-3xl animate-bounce-slow animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl animate-bounce-slow animation-delay-600"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              Cybernetic Technologies Pvt Ltd – Premium IT Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="gradient-text">Empower</span> Your Business
            <br />
            With <span className="gradient-text">Cybernetic Innovation</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Empowering enterprises with innovative, cost-effective IT solutions,
            expert consultation, and 24/7 support to drive growth and digital
            transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button
              onClick={scrollToContact}
              className="btn-gradient text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="glass border-primary/30 hover:border-primary px-8 py-6 text-lg rounded-full"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up animation-delay-600">
            <div className="glass rounded-lg p-6 card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="glass rounded-lg p-6 card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="glass rounded-lg p-6 card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Expert Support</div>
            </div>
            <div className="glass rounded-lg p-6 card-hover">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Team Experts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
