import { 
  Code, 
  Cloud, 
  Shield, 
  Smartphone, 
  Database, 
  Zap,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies to meet your specific business requirements.",
      features: ["Full-Stack Development", "API Integration", "Modern Frameworks", "Scalable Architecture"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud solutions that grow with your business and ensure maximum uptime.",
      features: ["AWS/Azure/GCP", "Auto-scaling", "Load Balancing", "Disaster Recovery"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security measures to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Threat Detection", "Data Encryption", "Compliance Management"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "Progressive Web Apps"]
    },
    {
      icon: Database,
      title: "Data Analytics & AI",
      description: "Turn your data into actionable insights with advanced analytics and machine learning.",
      features: ["Business Intelligence", "Machine Learning", "Data Visualization", "Predictive Analytics"]
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Strategic guidance to modernize your business processes and embrace digital innovation.",
      features: ["Process Automation", "Legacy System Migration", "Digital Strategy", "Change Management"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-secondary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Comprehensive</span> Technology Solutions
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom software development to digital transformation, we provide end-to-end 
            technology services that drive innovation and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass rounded-2xl p-8 card-hover group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button 
                variant="ghost" 
                className="group-hover:bg-primary group-hover:text-primary-foreground transition-all w-full"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our technology solutions can help you achieve your goals.
            </p>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gradient text-primary-foreground px-8 py-3 rounded-full"
            >
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;