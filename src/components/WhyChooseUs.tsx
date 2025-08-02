import { useState } from 'react';
import { Clock, Code, Cpu, Headphones, Shield, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Cpu,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies to build scalable, future-proof solutions that keep your business ahead of the competition.",
      image: "/images/tech-illustration.svg", // Replace with actual image
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Clock,
      title: "Rapid Development",
      description: "Our agile development process ensures quick turnaround times without compromising on quality or attention to detail.",
      image: "/images/agile-illustration.svg", // Replace with actual image
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to address your concerns and ensure your systems run smoothly around the clock.",
      image: "/images/support-illustration.svg", // Replace with actual image
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "We implement robust security measures to protect your data and ensure compliance with industry regulations.",
      image: "/images/security-illustration.svg", // Replace with actual image
      color: "from-red-500 to-orange-400",
    },
    {
      icon: Code,
      title: "Custom Solutions",
      description: "We develop tailored solutions that address your specific business challenges and align with your strategic objectives.",
      image: "/images/custom-illustration.svg", // Replace with actual image
      color: "from-amber-500 to-yellow-400",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Our solutions are optimized for maximum performance, ensuring fast load times and smooth user experiences.",
      image: "/images/performance-illustration.svg", // Replace with actual image
      color: "from-indigo-500 to-blue-400",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Makes Us <span className="gradient-text">Different</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>

        {/* Interactive Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Feature Image */}
          <div className="lg:col-span-7 order-2 lg:order-1 animate-fade-in-up animation-delay-300">
            <div className="relative">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 rounded-2xl overflow-hidden",
                    activeFeature === index ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}
                >
                  <div className="relative h-full w-full">
                    {/* Placeholder for illustration */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 rounded-2xl`}></div>
                    <div className="glass rounded-2xl p-8 h-full flex items-center justify-center">
                      <img 
                        src={feature.image} 
                        alt={feature.title}
                        className="max-w-full max-h-[400px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Default state when no feature is selected */}
              <div 
                className={cn(
                  "relative transition-opacity duration-500 rounded-2xl overflow-hidden",
                  activeFeature !== null ? "opacity-0 pointer-events-none" : "opacity-100"
                )}
              >
                <div className="glass rounded-2xl p-8 h-[400px] flex items-center justify-center">
                  <img 
                    src="/images/tech-illustration.svg" 
                    alt="Technology Illustration"
                    className="max-w-full max-h-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="lg:col-span-5 order-1 lg:order-2 animate-fade-in-up animation-delay-600">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={cn(
                    "glass rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg",
                    activeFeature === index ? 
                      `ring-2 ring-offset-2 ring-offset-background ring-primary shadow-lg` : 
                      "hover:scale-[1.02]"
                  )}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-900">
          <div className="glass rounded-xl p-8 text-center card-hover">
            <div className="text-4xl font-bold mb-2 gradient-text">98%</div>
            <div className="text-lg font-medium">Client Satisfaction</div>
          </div>
          
          <div className="glass rounded-xl p-8 text-center card-hover">
            <div className="text-4xl font-bold mb-2 gradient-text">50+</div>
            <div className="text-lg font-medium">Projects Completed</div>
          </div>
          
          <div className="glass rounded-xl p-8 text-center card-hover">
            <div className="text-4xl font-bold mb-2 gradient-text">99.9%</div>
            <div className="text-lg font-medium">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;