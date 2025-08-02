import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BottomCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-30">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto glass rounded-3xl p-12 shadow-xl animate-fade-in-up">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Let's discuss how our technology solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-gradient text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-transform"
                asChild
              >
                <a href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="px-8 py-6 text-lg font-semibold rounded-full hover:bg-accent/10 transition-colors border-2"
                asChild
              >
                <a href="/contact">
                  <MessageSquare className="mr-2 w-5 h-5" />
                  Schedule a Consultation
                </a>
              </Button>
            </div>
          </div>
          
          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@cybernetic.lk" className="text-primary hover:underline">info@cybernetic.lk</a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href="tel:+94123456789" className="text-primary hover:underline">+94 12 345 6789</a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add this CSS to your index.css or create a new animation in your existing CSS */}
      <style>{`
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default BottomCTA;