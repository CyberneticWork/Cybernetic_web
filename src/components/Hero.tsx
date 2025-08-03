import React, { useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Simple particle system
    function createParticles() {
      const particleContainer = document.getElementById('particles');
      if (!particleContainer) return;
      
      const colors = ['#8b45ff', '#ff006b', '#00d9ff', '#ff3366'];
      
      function addParticle() {
        const particle = document.createElement('div');
        particle.className = 'floating-particle';
        
        // Random size and position
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.opacity = '0.6';
        
        // Animation
        particle.style.animation = `floatUp ${Math.random() * 15 + 20}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particleContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        }, 40000);
      }
      
      // Initial particles
      for (let i = 0; i < 15; i++) {
        setTimeout(() => addParticle(), i * 2000);
      }
      
      // Continuously add particles
      const interval = setInterval(addParticle, 3000);
      
      return () => clearInterval(interval);
    }
    
    // Mouse movement effect
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const orbs = document.querySelectorAll('.floating-orb');
      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.3;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    const cleanup = createParticles();
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100vh) translateX(-10px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) translateX(10px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes orbFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(15px);
          }
          66% {
            transform: translateY(15px) translateX(-10px);
          }
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
        
        .animated-bg-overlay {
          background: radial-gradient(circle at 20% 80%, rgba(139, 69, 255, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 0, 107, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(0, 217, 255, 0.04) 0%, transparent 50%);
        }
        
        .grid-overlay {
          background-image: 
            linear-gradient(rgba(139, 69, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 69, 255, 0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridMove 25s infinite linear;
        }
        
        .floating-orb {
          border-radius: 50%;
          filter: blur(2px);
          animation: orbFloat 18s infinite ease-in-out;
          pointer-events: none;
        }
        
        .floating-orb-1 {
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(139, 69, 255, 0.15), transparent);
          top: 15%;
          left: 8%;
          animation-delay: -6s;
        }
        
        .floating-orb-2 {
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(255, 0, 107, 0.12), transparent);
          top: 65%;
          right: 15%;
          animation-delay: -12s;
        }
        
        .floating-orb-3 {
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(0, 217, 255, 0.08), transparent);
          top: 35%;
          right: 25%;
          animation-delay: -3s;
        }
        
        @media (max-width: 768px) {
          .floating-orb {
            display: none;
          }
        }
      `}</style>
      
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16 bg-gradient-to-b from-background to-background/90"
      >
        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {/* Base gradient overlay */}
          <div className="absolute inset-0 animated-bg-overlay"></div>
          
          {/* Animated grid */}
          <div className="absolute inset-0 grid-overlay opacity-30"></div>
          
          {/* Floating orbs */}
          <div className="absolute floating-orb floating-orb-1"></div>
          <div className="absolute floating-orb floating-orb-2"></div>
          <div className="absolute floating-orb floating-orb-3"></div>
          
          {/* Original gradient orbs (enhanced) */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary opacity-15 rounded-full blur-3xl animate-bounce-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary opacity-15 rounded-full blur-3xl animate-bounce-slow animation-delay-400"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent opacity-8 rounded-full blur-3xl animate-bounce-slow animation-delay-600"></div>
          
          {/* Particle container */}
          <div id="particles" className="absolute inset-0 overflow-hidden pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 animate-fade-in-up backdrop-blur-md bg-background/20 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">
                Cybernetic Technologies Pvt Ltd – Premium IT Solutions
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
                className="btn-gradient text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl"
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
                className="glass border-primary/30 hover:border-primary px-8 py-6 text-lg rounded-full backdrop-blur-md bg-background/10"
              >
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-fade-in-up animation-delay-600">
              <div className="glass rounded-lg p-6 card-hover backdrop-blur-md bg-background/20 border border-primary/10">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass rounded-lg p-6 card-hover backdrop-blur-md bg-background/20 border border-primary/10">
                <div className="text-3xl font-bold gradient-text mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="glass rounded-lg p-6 card-hover backdrop-blur-md bg-background/20 border border-primary/10">
                <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-muted-foreground">Expert Support</div>
              </div>
              <div className="glass rounded-lg p-6 card-hover backdrop-blur-md bg-background/20 border border-primary/10">
                <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                <div className="text-muted-foreground">Team Experts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;