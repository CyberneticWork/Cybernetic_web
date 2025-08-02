import { Building2, Factory, ShoppingBag, Truck, Stethoscope, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Industries = () => {
  const industries = [
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Streamline production processes, inventory management, and supply chain operations with custom ERP solutions.",
      link: "/industries/manufacturing",
    },
    {
      icon: ShoppingBag,
      name: "Retail",
      description: "Enhance customer experiences and optimize inventory with integrated point-of-sale and e-commerce solutions.",
      link: "/industries/retail",
    },
    {
      icon: Truck,
      name: "Logistics",
      description: "Track shipments, optimize routes, and manage warehouses with our specialized logistics software.",
      link: "/industries/logistics",
    },
    {
      icon: Stethoscope,
      name: "Healthcare",
      description: "Improve patient care and streamline administrative tasks with secure, compliant healthcare systems.",
      link: "/industries/healthcare",
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Enhance learning experiences and administrative efficiency with custom educational technology solutions.",
      link: "/industries/education",
    },
    {
      icon: Building2,
      name: "Finance",
      description: "Secure, compliant financial systems that streamline operations and enhance customer service.",
      link: "/industries/finance",
    },
  ];

  return (
    <section id="industries" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Industries We Serve</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Specialized</span> Solutions for Every Industry
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver tailored technology solutions that address the unique challenges of your industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 card-hover group animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <industry.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {industry.description}
              </p>
              
              <a 
                href={industry.link} 
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <h3 className="text-2xl font-bold mb-6">Don't see your industry?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our solutions can be customized for any business sector. Contact us to discuss your specific requirements.
          </p>
          <Button 
            className="btn-gradient text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full hover:scale-105 transition-transform"
            asChild
          >
            <a href="/contact">
              Find Your Industry Solution
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Industries;