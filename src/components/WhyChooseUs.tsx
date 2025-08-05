import { useState } from 'react';
import { Clock, Code, Cpu, Headphones, Shield, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhyChooseUs = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Cpu,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies to build scalable, future-proof solutions that keep your business ahead of the competition.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Clock,
      title: "Rapid Development",
      description: "Our agile development process ensures quick turnaround times without compromising on quality or attention to detail.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to address your concerns and ensure your systems run smoothly around the clock.",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "We implement robust security measures to protect your data and ensure compliance with industry regulations.",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: Code,
      title: "Custom Solutions",
      description: "We develop tailored solutions that address your specific business challenges and align with your strategic objectives.",
      color: "from-amber-500 to-yellow-400",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Our solutions are optimized for maximum performance, ensuring fast load times and smooth user experiences.",
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

        {/* Feature List - now taking full width since we removed the visualization */}
        <div className="animate-fade-in-up animation-delay-600">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={cn(
                  "glass rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg h-full",
                  activeFeature === index ? 
                    `ring-2 ring-offset-2 ring-offset-background ring-primary shadow-lg` : 
                    "hover:scale-[1.02]"
                )}
                onClick={() => setActiveFeature(index)}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div className="flex flex-col items-start gap-4 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
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