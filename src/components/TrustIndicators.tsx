import { Shield, Award, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const TrustIndicators = () => {
  // Sample client logos - replace with actual client logos
  const clientLogos = [
    { name: "Client 1", logo: "/images/clientlog/1.jpg" },
    { name: "Client 2", logo: "/images/clientlog/2.jpg" },
    { name: "Client 3", logo: "/images/clientlog/3.jpg" },
    { name: "Client 4", logo: "/images/clientlog/4.jpg" },
    { name: "Client 5", logo: "/images/clientlog/5.jpg" },
    { name: "Client 6", logo: "/images/clientlog/6.jpg" },
    { name: "Client 7", logo: "/images/clientlog/7.jpg" },
    { name: "Client 8", logo: "/images/clientlog/8.jpg" },
    { name: "Client 9", logo: "/images/clientlog/9.jpg" },
    { name: "Client 10", logo: "/images/clientlog/10.jpg" },
    { name: "Client 11", logo: "/images/clientlog/11.jpg" },
    { name: "Client 12", logo: "/images/clientlog/12.jpg" },
  ];

  // Sample badges/certifications - replace with actual badges
  

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Trust Statement */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Trusted Excellence</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold">
            Trusted by <span className="gradient-text">50+ Businesses</span> Across Sri Lanka
          </h2>
        </div>

        {/* Client Logos Marquee */}
        <div className="relative mb-12 overflow-hidden">
          <div className="flex space-x-5 animate-marquee">
            {[...clientLogos, ...clientLogos].map((client, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 h-20 w-32 glass rounded-lg flex items-center justify-center p-4 opacity-80 hover:opacity-100 transition-opacity"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Ratings and Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-300">
          {/* Google Rating */}
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center card-hover">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <div className="text-2xl font-bold mb-1">4.9/5.0</div>
            <div className="text-sm text-muted-foreground">Based on 45+ Google Reviews</div>
          </div>

          {/* Projects Completed */}
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center card-hover">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-2xl font-bold mb-1">50+ Projects</div>
            <div className="text-sm text-muted-foreground">Successfully Completed</div>
          </div>

          {/* Years in Business */}
          <div className="glass rounded-xl p-6 flex flex-col items-center text-center card-hover">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="text-2xl font-bold mb-1">Since 2021</div>
            <div className="text-sm text-muted-foreground">Delivering Excellence</div>
          </div>
        </div>

        {/* Certification Badges */}
      
      </div>

      {/* Add this CSS to your index.css or create a new animation in your existing CSS */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .bg-grid-white {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
      `}</style>
    </section>
  );
};

export default TrustIndicators;