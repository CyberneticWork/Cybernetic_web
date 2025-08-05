import { Users, Award, Globe, Heart, Target, Eye, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    title: "Student Management System",
    icon: <Users className="w-8 h-8 text-primary" />,
    content: `A Student Management System is a specialized software solution designed to streamline and automate administrative tasks within educational institutions. This system acts as a central hub for managing student data, including enrollment, attendance, grades, and communication. By digitizing these processes, it reduces the administrative burden on staff, allowing them to focus more on student engagement and academic success. It also provides a centralized platform for communicating with students and parents, ensuring everyone stays informed.`
  },
  {
    title: "Learning Management System (LMS)",
    icon: <Globe className="w-8 h-8 text-primary" />,
    content: `A Learning Management System (LMS) is a powerful platform that revolutionizes the way educational content is delivered, managed, and tracked. Whether for traditional classrooms or corporate training, an LMS provides a centralized online environment for creating, distributing, and monitoring courses. It can host various types of content, such as videos, quizzes, and documents, and offers tools for grading, feedback, and progress tracking. This makes learning more accessible and flexible, empowering both educators and learners.`
  },
  {
    title: "Loan Management System",
    icon: <Award className="w-8 h-8 text-primary" />,
    content: `A Loan Management System is a robust software solution developed to automate and manage the entire loan lifecycle for financial institutions. From application and approval to disbursement and repayment tracking, this system streamlines the complex process of lending. By centralizing all loan-related data and automating key tasks, it significantly improves efficiency, reduces errors, and ensures compliance with financial regulations. It provides a comprehensive overview of the loan portfolio, helping institutions make better, data-driven decisions.`
  },
  {
    title: "Human Resource Management System (HRMS)",
    icon: <Heart className="w-8 h-8 text-primary" />,
    content: `A Human Resource Management System (HRMS) is a comprehensive software solution designed to streamline and automate essential HR processes. This system centralizes employee data, from recruitment and onboarding to payroll and performance management. By automating repetitive tasks, an HRMS frees up HR professionals to focus on strategic initiatives like employee development and engagement. It provides a single source of truth for all HR-related information, boosting overall team efficiency and ensuring compliance.`
  },
  {
    title: "ERP Systems",
    icon: <Target className="w-8 h-8 text-primary" />,
    content: `Enterprise Resource Planning (ERP) systems are comprehensive software solutions that integrate and manage all core business processes, such as finance, human resources, manufacturing, supply chain, services, and procurement. By providing a single, unified view of the entire organization, ERP systems eliminate data silos and improve communication between departments. This integration leads to greater efficiency, better decision-making, and enhanced productivity across the board.`
  },
  {
    title: "POS System",
    icon: <Eye className="w-8 h-8 text-primary" />,
    content: `A Point of Sale (POS) system is a critical component for any business that sells products or services. It is the central hub where transactions are processed and managed. Modern POS systems go beyond simple cash registers, offering features like inventory management, sales reporting, customer relationship management, and employee tracking. A well-designed custom POS system can significantly increase a team's efficiency by automating tasks, reducing errors, and providing valuable insights into business operations.`
  },
  {
    title: "Custom Software Development",
    icon: <Lightbulb className="w-8 h-8 text-primary" />,
    content: `Custom software development is the process of designing, creating, and deploying software applications that are specifically tailored to meet the unique needs of a particular business or organization. Unlike off-the-shelf solutions, custom software is built from the ground up to address specific challenges and workflows. This approach ensures that the software perfectly aligns with business processes, maximizing efficiency, scalability, and competitive advantage. It's a strategic investment for businesses looking for a solution that fits their needs precisely.`
  },
  {
    title: "CRM System",
    icon: <Users className="w-8 h-8 text-primary" />,
    content: `A Customer Relationship Management (CRM) system is a powerful tool for managing all aspects of customer interactions. It centralizes and organizes customer data, including contact information, purchase history, and communication logs. By providing a 360-degree view of each customer, a CRM system helps businesses improve sales, enhance customer service, and build stronger, more meaningful relationships. It automates key tasks, tracks customer interactions, and provides insights that drive better business decisions and foster long-term loyalty.`
  }
];

const Blog = () => {
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
        
        .animated-bg-overlay {
          background: radial-gradient(circle at 20% 80%, rgba(139, 69, 255, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 0, 107, 0.08) 0%, transparent 50%);
        }
      `}</style>
      
      <Header />
      <section className="py-20 relative overflow-hidden bg-background">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-secondary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 animated-bg-overlay"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6 mx-auto">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Our Insights</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Latest <span className="gradient-text">Blog</span> Posts
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our insights and expertise on various software solutions and technologies.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animation-delay-200">
            {blogPosts.map((post, idx) => (
              <article 
                key={idx} 
                className="glass rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-primary/10 hover:border-primary/30 bg-background/50 backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {post.icon}
                  </div>
                  <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {post.content}
                </p>
                
              </article>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up animation-delay-400">
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;