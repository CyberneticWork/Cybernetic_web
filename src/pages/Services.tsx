"use client";

import {
  ArrowRight,
  Code,
  Cloud,
  Shield,
  Smartphone,
  Database,
  Zap,
  Users,
  Globe,
  ShoppingCart,
  Share2,
  Book,
  CreditCard,
  Briefcase,
  Layers,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const { theme } = useTheme();

  const services = [
    {
      icon: Code,
      title: "Application Development",
      description:
        "We build high-performance, scalable, and user-centric applications for Windows, Web, and Mobile (iOS/Android).",
      features: [
        "Windows Application Development",
        "Web Application Development",
        "Mobile Application Development (iOS & Android)",
        "Cross-platform Solutions",
      ],
      whyChooseUs: [
        "Tailored Solutions for unique business needs",
        "Experienced Team across industries",
        "Cutting-Edge Technologies",
        "Agile Development Methodology",
        "Scalability & Performance focus",
        "Ongoing Support & Maintenance",
      ],
    },
    {
      icon: Users,
      title: "IT Consultation",
      description:
        "Our expert team provides strategic insights and actionable plans to navigate complex technological challenges.",
      features: [
        "IT Strategy & Roadmap Development",
        "Digital Transformation Advisory",
        "Technology Assessment & Optimization",
        "Cloud Strategy & Migration",
        "Cybersecurity & Risk Management",
        "Software Selection & Implementation",
      ],
      whyChooseUs: [
        "Vendor-Neutral Advice",
        "Experienced Consultants",
        "Actionable Insights",
        "Future-Proofing Your Business",
        "ROI-Driven Approach",
      ],
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Web Development",
      description:
        "We craft robust, secure, and visually compelling e-commerce sites and web applications that convert visitors into customers.",
      features: [
        "Custom E-commerce Store Development",
        "Platform-Based Solutions (Shopify, WooCommerce, Magento)",
        "Responsive Design for All Devices",
        "Secure Payment Gateway Integration",
        "Product Management & Catalog Solutions",
        "SEO Friendly Architecture",
      ],
      whyChooseUs: [
        "Strategic Partnership approach",
        "User-Centric Design",
        "Security First priority",
        "Post-Launch Support",
        "Local and Global Expertise",
      ],
    },
    {
      icon: Share2,
      title: "Digital Marketing",
      description:
        "We empower businesses to enhance visibility, attract qualified leads, and increase sales through strategic, data-driven digital campaigns.",
      features: [
        "Digital Strategy Development",
        "Digital Marketing Channel Setup & Configuration",
        "Ad Campaign Content Creation",
        "Paid Advertising (PPC)",
        "Conversion Tracking & Performance Analytics",
      ],
      whyChooseUs: [
        "Strategic & Data-Driven approach",
        "Creative Excellence",
        "Platform Expertise",
        "Measurable Results",
        "Local Market Insight (Sri Lanka)",
        "Integrated Approach",
      ],
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security measures to protect your digital assets and ensure compliance with industry regulations.",
      features: [
        "Security Audits",
        "Threat Detection",
        "Data Encryption",
        "Compliance Management",
      ],
    },
    {
      icon: Database,
      title: "Data Analytics & AI",
      description:
        "Turn your data into actionable insights with advanced analytics and machine learning.",
      features: [
        "Business Intelligence",
        "Machine Learning",
        "Data Visualization",
        "Predictive Analytics",
      ],
    },
  ];

  const systems = [
    {
      icon: Book,
      title: "Student Management System",
      description:
        "Streamlines administrative tasks and improves communication for educational institutions.",
      impact: "Reduced administrative time by 40%",
    },
    {
      icon: Globe,
      title: "Learning Management System",
      description:
        "Manages, delivers, and tracks educational courses and training programs.",
      impact: "Improved learning outcomes by 35%",
    },
    {
      icon: CreditCard,
      title: "Loan Management System",
      description:
        "Developed for leading financial institutions to streamline loan processing.",
      impact: "Improved team efficiency by 25%",
    },
    {
      icon: Briefcase,
      title: "HR Management System",
      description:
        "Streamlines HR processes from recruitment to payroll management.",
      impact: "Boosted HR efficiency by 40%",
    },
    {
      icon: Layers,
      title: "ERP Systems",
      description:
        "Comprehensive Enterprise Resource Planning solutions for businesses.",
      impact: "Improved team efficiency by up to 30%",
    },
    {
      icon: Monitor,
      title: "POS System",
      description:
        "Custom Point of Sale systems for retail and hospitality businesses.",
      impact: "Increased team efficiency by 40%",
    },
    {
      icon: Code,
      title: "Custom Software",
      description:
        "Bespoke solutions tailored to unique business requirements.",
      impact: "Solved specific operational challenges",
    },
    {
      icon: Users,
      title: "CRM System",
      description:
        "Manages customer relationships and improves sales processes.",
      impact: "Increased customer retention by 25%",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <div
            className={`inline-flex items-center gap-2 ${
              theme === "dark" ? "bg-background/90" : "bg-background/80"
            } backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-muted`}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Professional Services</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Technology
            </span>{" "}
            Services
            <br />
            That{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Scale
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From custom software development to digital transformation, we
            provide comprehensive technology services that drive innovation and
            business growth.
          </p>

          <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full hover:opacity-90 transition-opacity">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              At Cybernetic Technologies Pvt Ltd, we offer comprehensive and
              innovative solutions to drive your business forward.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${
                  theme === "dark" ? "bg-background/90" : "bg-background/80"
                } backdrop-blur-md rounded-2xl p-8 border border-muted hover:border-primary/30 transition-all group`}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Systems Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Systems
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in developing tailored, high-performance software
              solutions to solve complex problems.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {systems.map((system, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${
                  theme === "dark" ? "bg-background/90" : "bg-background/80"
                } backdrop-blur-md rounded-2xl p-6 border border-muted hover:border-primary/30 transition-all`}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                  <system.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{system.title}</h3>
                <p className="text-muted-foreground mb-3">
                  {system.description}
                </p>
                {system.impact && (
                  <div className="text-sm text-primary font-medium">
                    Impact: {system.impact}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Cybernetic
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver excellence through proven methodologies and
              cutting-edge expertise
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {services
              .filter((service) => service.whyChooseUs)
              .map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${
                    theme === "dark" ? "bg-background/90" : "bg-background/80"
                  } backdrop-blur-md rounded-2xl p-6 border border-muted`}
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.whyChooseUs
                      .slice(0, 3)
                      .map((reason, reasonIndex) => (
                        <li
                          key={reasonIndex}
                          className="flex items-start text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2"></div>
                          <span className="text-muted-foreground">
                            {reason}
                          </span>
                        </li>
                      ))}
                  </ul>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-muted/50 relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project
              delivery
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs and goals",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating detailed project roadmap",
              },
              {
                step: "03",
                title: "Development",
                description: "Building with best practices",
              },
              {
                step: "04",
                title: "Delivery",
                description: "Launch and ongoing support",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
