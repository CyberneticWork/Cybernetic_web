import { ArrowRight, Trophy, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const CaseStudies = () => {
  // Sample case study data - replace with actual case studies
  const featuredCaseStudy = {
    title: "Darzzing Water - Digital Transformation",
    description: "Revolutionized operations with a custom ERP system that streamlined inventory management, order processing, and delivery logistics.",
    image: "/images/placeholder.svg", // Replace with actual project image
    logo: "/images/placeholder.svg", // Replace with actual client logo
    metrics: [
      { label: "Faster Delivery", value: "30%" },
      { label: "Uptime", value: "99.9%" },
      { label: "Cost Reduction", value: "25%" },
    ],
    link: "/case-studies/darzzing-water", // Create this page later
  };

  // Additional case studies for the grid below
  const additionalCaseStudies = [
    {
      title: "E-commerce Platform",
      category: "Retail",
      image: "/images/placeholder.svg", // Replace with actual project image
      link: "/case-studies/ecommerce-platform", // Create this page later
    },
    {
      title: "Healthcare Management System",
      category: "Healthcare",
      image: "/images/placeholder.svg", // Replace with actual project image
      link: "/case-studies/healthcare-system", // Create this page later
    },
    {
      title: "Logistics Tracking Solution",
      category: "Transportation",
      image: "/images/placeholder.svg", // Replace with actual project image
      link: "/case-studies/logistics-tracking", // Create this page later
    },
  ];

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Featured Case Study</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Success</span> Stories
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="glass rounded-2xl overflow-hidden mb-16 animate-fade-in-up animation-delay-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-[300px] lg:h-full overflow-hidden group">
              <img 
                src={featuredCaseStudy.image} 
                alt={featuredCaseStudy.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6 lg:hidden">
                <img 
                  src={featuredCaseStudy.logo} 
                  alt="Client logo"
                  className="h-12 w-auto"
                />
              </div>
            </div>
            
            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col">
              <div className="hidden lg:block mb-6">
                <img 
                  src={featuredCaseStudy.logo} 
                  alt="Client logo"
                  className="h-12 w-auto"
                />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredCaseStudy.title}</h3>
              
              <p className="text-muted-foreground mb-8 flex-grow">
                {featuredCaseStudy.description}
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {featuredCaseStudy.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-1">{metric.value}</div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <Button 
                className="self-start group"
                asChild
              >
                <a href={featuredCaseStudy.link}>
                  See Full Case Study
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
          {additionalCaseStudies.map((study, index) => (
            <a 
              key={index} 
              href={study.link}
              className="glass rounded-xl overflow-hidden group card-hover h-[250px] relative"
              style={{ animationDelay: `${(index + 5) * 100}ms` }}
            >
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col justify-end p-6">
                <div className="text-sm text-primary mb-2">{study.category}</div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{study.title}</h3>
                <div className="mt-2 flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All Case Studies Button */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
          <Button 
            variant="outline" 
            className="glass border-primary/30 hover:border-primary px-8 py-6 text-lg rounded-full"
            asChild
          >
            <a href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;