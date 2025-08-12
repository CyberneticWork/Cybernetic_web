import {
  Users,
  Award,
  Globe,
  Heart,
  Target,
  Eye,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import LiveChat from '@/components/LiveChat';

const AboutPage = () => {
  const [teamImages, setTeamImages] = useState({});

  const achievements = [
    {
      icon: Users,
      number: "10+",
      label: "Expert Team Members",
      description: "Skilled professionals across various technologies",
    },
    {
      icon: Award,
      number: "50+",
      label: "Successful Projects",
      description: "Delivered with excellence and on time",
    },
    {
      icon: Globe,
      number: "10+",
      label: "Countries Served",
      description: "Global reach with local expertise",
    },
    {
      icon: Heart,
      number: "98%",
      label: "Client Satisfaction",
      description: "Measured through continuous feedback",
    },
  ];

  // Add image path for each team member (place images in public/images/)
  const teamMembers = [
    {
      name: "Y. IMESHA RANGANA",
      role: "Managing Director",
      experience: "",
      image: "/images/imesha.jpg",
    },

    {
      name: "THULAKSHI RUCHINI",
      role: "Project Manager",
      experience: "Bachelor (Hons) in IT",
      image: "/images/Ruchini - PM.png",
    },
    {
      name: "SHALITHA MADHUWANTHA",
      role: "System & Security Engineer",
      experience: "Bachelor (Hons) in ICT",
      image: "/images/shalith.jpg",
    },
    {
      name: "ESHAN DANANJAYA",
      role: "Team Leader & Software Engineer",
      experience: "BSc in Information Technology",
      image: "/images/eshan.jpg",
    },
    {
      name: "UDARI PIYUMIKA",
      role: "Team Leader and Software Engineer",
      experience: "BSc in Computer Science",
      image: "/images/Udari - SE.jpg",
    },

    {
      name: "JANITHA SANDARUWAN",
      role: "Software Engineer",
      experience: "BSc in Information Technology",
      image: "/images/Janitha.jpg",
    },

    {
      name: "THUSHARA GUNAWARDHANE",
      role: "Software Engineer",
      experience: "BSc in Information Technology",
      image: "/images/thushara.jpg",
    },

    {
      name: "ISURU BANDARA",
      role: "Software Engineer",
      experience: "BSc in Information Technology",
      image: "/images/Isuru-SE.png",
    },

    {
      name: "BHANUKA SHAMEN",
      role: "Software Engineer",
      experience: "BSc in Computer Science",
      image: "/images/Bhanuka-SE.jpg",
    },
    {
      name: "S JUDE",
      role: "ML Engineer",
      experience: "BSc in Computer Science",
      image: "/images/Jude - ML Engineer.jpg",
    },

    {
      name: "PAWANI MADHUBHASHINI",
      role: "QA Engineer",
      experience: "Bachelor of ICT",
      image: "/images/Pawani Madhubashini.jpg",
    },
    {
      name: "PUBUDU RUWAN",
      role: "Digital Marketing Executive",
      experience: "BBA (Hons) in Marketing",
      image: "/images/LinkedIn_Profile_Photo.png",
    },
    {
      name: "SADISHA GAMAGE",
      role: "Multimedia Designer",
      experience: "",
      image: "/images/sadisha.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">
              About Cybernetic Technologies Pvt Ltd
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Leading <span className="gradient-text">Innovation</span>
            <br />
            Since <span className="gradient-text">2021</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to becoming a global leader in providing innovative
            and cost-effective IT solutions, driving efficiency and enhancing
            user experiences for sustainable growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2021, Cybernetic Technologies Pvt Ltd is committed
                  to becoming a global leader in providing innovative and
                  cost-effective IT solutions. We focus on driving efficiency,
                  enhancing user experiences, and fostering sustainable growth
                  for our clients by delivering tailored technology services.
                </p>

                <p>
                  Our key strengths include expertise in integrating
                  multi-vendor technologies, proven experience in IT
                  transformation, comprehensive IT lifecycle services from
                  consulting to deployment, and an uncompromised commitment to
                  service quality.
                </p>

                <p>
                  We provide end-to-end IT solutions covering data storage,
                  virtualization, networking, and security. Our goal is to be a
                  trusted long-term partner, helping businesses thrive in the
                  digital age.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up animation-delay-400">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 text-center card-hover"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>

                  <div className="text-3xl font-bold gradient-text mb-2">
                    {achievement.number}
                  </div>

                  <div className="font-semibold mb-2">{achievement.label}</div>

                  <div className="text-sm text-muted-foreground">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Mission",
                description:
                  "Our mission is to exceed clients' expectations by going beyond software to provide the best software solutions that transform data into knowledge, enabling them to solve their problems.",
              },
              {
                icon: Eye,
                title: "Vision",
                description:
                  "Our Vision is to be a leading software solution company in the IT sector and progress in our current position in the market. We know that customer's growth is our growth, so we commit to helping our customers achieve their business goals.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We believe in working with accuracy and the best quality. We want to be known as a reliable, innovative, and user-friendly software service provider in the IT industry.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team comprises highly skilled and experienced software
              professionals dedicated to delivering innovative and effective
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div className="relative mb-4">
                  {teamImages[member.name] ? (
                    <img
                      src={teamImages[member.name]}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  ) : member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                  ) : (
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-10 h-10 text-primary-foreground" />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">
                  {member.experience}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Our Expertise
            </h3>
            <p className="text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
              We are adept at capturing precise software requirements and
              translating them into robust and scalable systems. Our expertise
              spans the entire software development lifecycle, from initial
              conceptualization and design through to development, rigorous
              testing, and seamless deployment. Beyond implementation, we
              provide comprehensive ongoing technical support, including
              assistance with issues, timely bug fixes, and continuous system
              maintenance, ensuring our clients' long-term success.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
