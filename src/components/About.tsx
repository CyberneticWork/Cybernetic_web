import { Users, Award, Globe, Heart } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Users,
      number: "50+",
      label: "Expert Team Members",
      description: "Skilled professionals across various technologies"
    },
    {
      icon: Award,
      number: "500+",
      label: "Successful Projects",
      description: "Delivered with excellence and on time"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Countries Served",
      description: "Global reach with local expertise"
    },
    {
      icon: Heart,
      number: "99%",
      label: "Client Satisfaction",
      description: "Measured through continuous feedback"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">About Cybernetic Technologies Pvt Ltd</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Leading <span className="gradient-text">Innovation</span> in 
              Technology Solutions
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Since our founding, TechSolutions Pro has been at the forefront of technological 
                innovation, helping businesses transform their operations and achieve unprecedented growth 
                through cutting-edge digital solutions.
              </p>

              <p>
                Our team of expert developers, designers, and consultants brings decades of combined 
                experience in delivering enterprise-grade solutions that scale with your business needs. 
                We believe in building lasting partnerships with our clients.
              </p>

              <p>
                Founded in 2021, Cybernetic Technologies Pvt Ltd is committed to becoming a global leader in providing innovative and cost-effective IT solutions. We focus on driving efficiency, enhancing user experiences, and fostering sustainable growth for our clients by delivering tailored technology services. Our key strengths include expertise in integrating multi-vendor technologies, proven experience in IT transformation, comprehensive IT lifecycle services, and uncompromised commitment to service quality. We provide end-to-end IT solutions covering data storage, virtualization, networking, and security. Our goal is to be a trusted long-term partner, helping businesses thrive in the digital age.
                </p>
            </div>

            {/* Values */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="font-semibold">Innovation-Driven Development</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="font-semibold">Client-Centric Approach</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-semibold">Transparent Communication</span>
              </div>
            </div>
          </div>

          {/* Achievements Side */}
          <div className="animate-fade-in-up animation-delay-400">
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 text-center card-hover"
                  style={{ animationDelay: `${(index + 4) * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>
                  
                  <div className="font-semibold mb-2">
                    {achievement.label}
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Mission Statement */}
            <div className="glass rounded-2xl p-8 mt-8">
              <h3 className="text-xl font-bold mb-4 gradient-text">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses worldwide with innovative technology solutions that drive 
                digital transformation, enhance operational efficiency, and create sustainable 
                competitive advantages in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;