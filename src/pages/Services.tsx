import { ArrowRight, Code, Cloud, Shield, Smartphone, Database, Zap, Users, Globe, ShoppingCart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LiveChat from '@/components/LiveChat';

const ServicesPage = () => {
  const services = [
    {
      icon: Code,
      title: "Application Development",
      description: "Comprehensive application development services designed to bring your ideas to life, delivering high-performance, scalable, and user-centric solutions across all major platforms.",
      features: [
        "Windows Application Development",
        "Web Application Development", 
        "Mobile Application Development (iOS & Android)",
        "Cross-platform Solutions"
      ],
      // price: "Starting from $15,000",
      whyChooseUs: [
        "Tailored Solutions for unique business needs",
        "Experienced Team across industries",
        "Cutting-Edge Technologies",
        "Agile Development Methodology",
        "Scalability & Performance focus",
        "Ongoing Support & Maintenance"
      ]
    },
    {
      icon: Users,
      title: "IT Consultation",
      description: "Expert IT consultation services providing businesses with strategic insights and actionable plans to navigate complex technological challenges and harness IT infrastructure potential.",
      features: [
        "IT Strategy & Roadmap Development",
        "Digital Transformation Advisory",
        "Technology Assessment & Optimization",
        "Cloud Strategy & Migration",
        "Cybersecurity & Risk Management",
        "Software Selection & Implementation"
      ],
     
      whyChooseUs: [
        "Vendor-Neutral Advice",
        "Experienced Consultants",
        "Actionable Insights",
        "Future-Proofing Your Business",
        "ROI-Driven Approach"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description: "Robust, secure, and visually compelling online stores that convert browsers into buyers, combining cutting-edge technology with strategic design.",
      features: [
        "Custom E-commerce Store Development",
        "Platform-Based Solutions (Shopify, WooCommerce, Magento)",
        "Responsive Design for All Devices",
        "Secure Payment Gateway Integration",
        "Product Management & Catalog Solutions",
        "SEO Friendly Architecture"
      ],
    
      whyChooseUs: [
        "Strategic Partnership approach",
        "User-Centric Design",
        "Security First priority",
        "Post-Launch Support",
        "Local and Global Expertise"
      ]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Strategic social media marketing services to amplify your brand's voice and connect directly with customers through data-driven campaigns.",
      features: [
        "Strategic Campaign Development",
        "Content Creation & Management",
        "Platform Optimization",
        "Performance Analytics",
        "Local Market Targeting",
        "Integrated Marketing Approach"
      ],

      whyChooseUs: [
        "Strategic & Data-Driven approach",
        "Creative Excellence",
        "Platform Expertise",
        "Measurable Results",
        "Local Market Insight (Sri Lanka)",
        "Integrated Approach"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security measures to protect your digital assets and ensure compliance with industry regulations.",
      features: ["Security Audits", "Threat Detection", "Data Encryption", "Compliance Management"],
   
    },
    {
      icon: Database,
      title: "Data Analytics & AI",
      description: "Turn your data into actionable insights with advanced analytics and machine learning.",
      features: ["Business Intelligence", "Machine Learning", "Data Visualization", "Predictive Analytics"],

    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Professional Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Technology</span> Services
            <br />
            That <span className="gradient-text">Scale</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From custom software development to digital transformation, we provide comprehensive 
            technology services that drive innovation and business growth.
          </p>

          <Button className="btn-gradient text-primary-foreground px-8 py-4 rounded-full">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="glass rounded-2xl p-8 card-hover group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* <div className="text-lg font-bold text-primary mb-4">
                  {service.price}
                </div> */}

                {/* <Button 
                  variant="ghost" 
                  className="group-hover:bg-primary group-hover:text-primary-foreground transition-all w-full"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">Cybernetic</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver excellence through proven methodologies and cutting-edge expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.filter(service => service.whyChooseUs).map((service, index) => (
              <div key={index} className="glass rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2">
                  {service.whyChooseUs.slice(0, 3).map((reason, reasonIndex) => (
                    <li key={reasonIndex} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2"></div>
                      <span className="text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap" },
              { step: "03", title: "Development", description: "Building with best practices" },
              { step: "04", title: "Delivery", description: "Launch and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <LiveChat />
    </div>
  );
};

export default ServicesPage;