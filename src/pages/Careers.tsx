import { Briefcase, Users, Award, TrendingUp, Heart, Coffee, Gamepad2, GraduationCap, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const CareersPage = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO policy"
    },
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      description: "Professional development budget, conference attendance, and mentorship programs"
    },
    {
      icon: Gamepad2,
      title: "Fun & Recreation",
      description: "Game rooms, team events, company retreats, and celebration of achievements"
    }
  ];

  const openPositions = [
    {
      title: "Digital Marketing Agent",
      department: "Marketing",
      location: "Remote / Sri Lanka",
      type: "Full-time",
      experience: "2+ years",
      description: "Join our team as a Digital Marketing Agent to elevate our online presence through creative social media campaigns, website management, and customer engagement.",
      imageUrl: "/images/jobpost/digitel.jpg",
      requirements: [
        "Social Media Marketing: Crafting engaging Facebook posts and compelling video ads",
        "Website Management: Maintaining and updating our company website",
        "Customer Handling: Excellent communication skills for customer inquiries",
        "English Language Proficiency: Strong written and verbal English skills"
      ],
      contact: {
        email: "info@cybernetic.lk",
        phone: "070 250 5007"
      }
    }
  ];

  const companyValues = [
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in everything we deliver"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies"
    },
    {
      icon: Heart,
      title: "Impact",
      description: "We create technology that makes a meaningful difference"
    }
  ];

  const [expandedPosition, setExpandedPosition] = React.useState(null);

  const handleApply = (positionTitle) => {
    const subject = `Application for ${positionTitle} Position`;
    const mailtoLink = `mailto:info@cybernetic.lk?subject=${encodeURIComponent(subject)}&body=Please attach your CV and include a brief introduction about yourself.`;
    window.location.href = mailtoLink;
  };

  const toggleExpandPosition = (index) => {
    setExpandedPosition(expandedPosition === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Join Our Team</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Build Your <span className="gradient-text">Career</span>
            <br />
            With <span className="gradient-text">Purpose</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Join a team of passionate innovators who are transforming businesses 
            through cutting-edge technology solutions. Grow your career while making a real impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-gradient text-primary-foreground px-8 py-4 rounded-full"
              onClick={() => {
                const element = document.getElementById('open-positions');
                element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Open Positions
            </Button>
            <Button variant="outline" className="glass border-primary/30 hover:border-primary px-8 py-4 rounded-full">
              Learn About Culture
            </Button>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our culture and drive our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center card-hover animate-fade-in-up"
                   style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Work <span className="gradient-text">With Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We invest in our people because they are our greatest asset
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="glass rounded-2xl p-8 card-hover animate-fade-in-up"
                   style={{ animationDelay: `${index * 150}ms` }}>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your perfect role and start your journey with us
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="glass rounded-2xl overflow-hidden card-hover animate-fade-in-up"
                   style={{ animationDelay: `${index * 100}ms` }}>
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold">{position.title}</h3>
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {position.department}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {position.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-bold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                          {position.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Location:</span>
                          <span className="text-muted-foreground">{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Type:</span>
                          <span className="text-muted-foreground">{position.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-medium">Experience:</span>
                          <span className="text-muted-foreground">{position.experience}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:ml-6 flex flex-col gap-3">
                      <Button 
                        className="btn-gradient text-primary-foreground px-6 py-3 rounded-full w-full lg:w-auto"
                        onClick={() => handleApply(position.title)}
                      >
                        Apply Now
                      </Button>
                      {position.imageUrl && (
                        <Button 
                          variant="outline" 
                          className="glass border-primary/30 hover:border-primary px-6 py-3 rounded-full w-full lg:w-auto"
                          onClick={() => toggleExpandPosition(index)}
                        >
                          {expandedPosition === index ? 'Hide Job Post' : 'View Job Post'}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {expandedPosition === index && position.imageUrl && (
                  <div className="p-4 bg-background/50 border-t border-border/50">
                    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
                      <img
                        src={position.imageUrl}
                        alt={`${position.title} job post`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Application CTA */}
          <div className="text-center mt-16">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Don't See a Perfect Match?
              </h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for exceptional talent. Send your CV to info@cybernetic.lk 
                and tell us how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="font-medium">{openPositions[0]?.contact?.email || 'info@cybernetic.lk'}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium">Phone:</span>
                  <span className="text-muted-foreground">{openPositions[0]?.contact?.phone || '070 250 5007'}</span>
                </div>
              </div>
              <Button 
                className="btn-gradient text-primary-foreground px-8 py-4 rounded-full"
                onClick={() => {
                  window.location.href = "mailto:info@cybernetic.lk?subject=General Application&body=Please attach your CV and include a brief introduction about yourself.";
                }}
              >
                Send General Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;