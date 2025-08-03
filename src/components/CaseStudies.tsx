import { ArrowRight, Trophy, CheckCircle, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const CaseStudies = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Complete case studies data
const caseStudies = [
    {
      title: "HiTech Group of Company",
      subtitle: "Piliyandala-based electronics manufacturer",
      challenge: "HiTech Group of Company, a Piliyandala-based electronics manufacturer, struggled with fragmented operations. Disconnected systems for finance, production, and inventory led to inaccurate stock levels, delayed orders, and inefficient manual processes.",
      solution: "We implemented a custom Unified ERP system. This single platform integrated all business functions—from sales and production to inventory and finance—providing a real-time, holistic view of operations.",
      results: [
        "95% reduction in stock discrepancies, virtually eliminating production delays.",
        "30% increase in administrative efficiency by automating manual tasks.",
        "15% increase in profitability within the first year due to better financial visibility."
      ],
      conclusion: "By unifying their systems, HiTech Group of Company transformed their business, laying a strong foundation for future growth and solidifying their market position.",
      image: "/images/casestudy/5.jpg",
      logo: "/images/clientlog/2.jpg"
    },
    {
      title: "Arunalu Lanka Company",
      subtitle: "Microfinance provider",
      challenge: "Arunalu Lanka Company, a microfinance provider, was managing its loans with a mix of spreadsheets and manual paperwork. This outdated system led to significant challenges: errors in calculations, slow loan processing times, and difficulty in tracking repayments, which ultimately impacted their financial health and customer trust.",
      solution: "We partnered with Arunalu Lanka to implement a tailored Loan Management System. This solution digitized their entire loan lifecycle, from application to collection. It included features for automated credit scoring, real-time tracking of payments, and customizable reports to provide a clear overview of their portfolio.",
      results: [
        "60% reduction in loan processing time.",
        "100% accuracy in financial records through automation.",
        "25% increase in on-time collections with real-time dashboards."
      ],
      conclusion: "By modernizing their operations, Arunalu Lanka Company was able to increase efficiency, mitigate risks, and build a stronger, more reliable service for their clients.",
      image: "/images/casestudy/1.png",
      logo: "/images/clientlog/12.jpg"
    },
    {
      title: "Brightwood International School",
      subtitle: "Educational institution",
      challenge: "Brightwood International School was struggling with a manual, paper-based HR system. Managing payroll, leave, and staff data was time-consuming and prone to errors, creating administrative bottlenecks for their growing school.",
      solution: "We implemented a tailored HR Management System for the education sector. This all-in-one platform digitized and automated key processes, from payroll and leave requests to employee data management.",
      results: [
        "40% reduction in HR administrative time.",
        "Eliminated errors in payroll and reporting through automation.",
        "Improved data accuracy and real-time visibility for better decision-making."
      ],
      conclusion: "By modernizing their HR, Brightwood International School streamlined operations and created a more efficient environment for its staff.",
      image: "/images/casestudy/.jpg",
      logo: "/images/clientlog/.jpg"
    },
    {
      title: "Dazzling Water Company",
      subtitle: "Bottled water producer in Labugolla",
      challenge: "Dazzling Water Company, a bottled water producer in Labugolla, struggled with disconnected processes. Manual tracking of inventory, production, and distribution led to stock shortages and inefficient deliveries.",
      solution: "We implemented a customized ERP system that integrated all operations into a single platform. This solution automated production planning, managed real-time inventory, and optimized delivery routes.",
      results: [
        "20% increase in operational efficiency.",
        "Reduced costs by minimizing waste and optimizing logistics.",
        "Improved decision-making with real-time data on production and sales."
      ],
      conclusion: "By embracing a unified ERP, Dazzling Water Company streamlined its business, enabling them to scale and serve customers more effectively.",
      image: "/images/casestudy/3.jpg",
      logo: "/images/clientlog/5.jpg"
    },
    {
      title: "Jay Sea Food Processing",
      subtitle: "Major seafood processing company",
      challenge: "Jay Sea Food, a major processing company, was struggling with a complex and manual HR and payroll system. Managing shift-based workers, overtime, and a large workforce with fluctuating schedules was time-consuming and prone to errors. This led to administrative delays and payroll disputes.",
      solution: "We implemented a tailored HR and Payroll System designed for the manufacturing sector. This solution automated key functions including time & attendance tracking, payroll calculations, and leave management.",
      results: [
        "80% reduction in time spent on monthly payroll processing.",
        "Eliminated payroll errors, leading to fewer employee disputes.",
        "Improved operational efficiency by centralizing HR data and automating key tasks."
      ],
      conclusion: "By modernizing their HR and payroll, Jay Sea Food streamlined its operations, improved employee satisfaction, and gained the efficiency needed to focus on its core business.",
      image: "/images/casestudy/4.jpg",
      logo: "/images/clientlog/6.jpg"
    },
    {
      title: "Maxcity Plywood Company",
      subtitle: "Leading plywood manufacturer",
      challenge: "Maxcity Plywood, a leading plywood manufacturer, was hampered by fragmented systems. Manual processes for inventory, order management, and production scheduling led to stock inconsistencies, delayed orders, and a lack of real-time visibility into their supply chain.",
      solution: "We implemented a custom ERP system tailored for the manufacturing sector. This unified platform integrated all key business functions, from raw material procurement and production to sales and inventory management. The system provided real-time tracking of materials, automated order processing, and optimized production schedules.",
      results: [
        "95% accuracy rate in inventory, virtually eliminating material shortages and production delays.",
        "Automated order and production workflows reduced administrative time by 30%.",
        "Management gained a complete, real-time view of the entire operation."
      ],
      conclusion: "By adopting our ERP solution, Maxcity Plywood streamlined its operations, boosted efficiency, and solidified its position as a reliable supplier in the market.",
image: "/images/casestudy/6.jpg",
      logo: "/images/clientlog/4.jpg"
    },
    {
      title: "Subasinghe Hardware",
      subtitle: "Supplier of construction and home improvement goods",
      challenge: "Subasinghe Hardware, a busy supplier of construction and home improvement goods, was using a manual billing and inventory system. This led to long queues, billing errors, and inaccurate stock counts, which resulted in lost sales and frustrated customers.",
      solution: "We deployed a modern Point of Sale (POS) system to digitize and streamline their retail operations. The new system included a fast and easy-to-use checkout interface, integrated barcode scanning, and real-time inventory tracking.",
      results: [
        "Checkout times were reduced by 50%, eliminating long customer queues.",
        "The automated system virtually eliminated billing errors, boosting customer trust.",
        "Management could now see accurate stock levels instantly, preventing shortages and overstocking."
      ],
      conclusion: "By upgrading to our POS system, Subasinghe Hardware modernized its business, providing a better shopping experience for customers and gaining valuable control over its inventory.",
      image: "/images/placeholder.svg",
      logo: "/images/placeholder.svg"
    }
  ];

  const openModal = (index: number) => {
    setSelectedCaseStudy(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Use the first case study as the featured one
  const featuredCaseStudy = {
    ...caseStudies[0],
    metrics: [
      { value: "95%", label: "Reduction in errors" },
      { value: "30%", label: "Efficiency gain" },
      { value: "15%", label: "Profit increase" }
    ]
  };

  // Use the remaining case studies as additional ones
  const additionalCaseStudies = caseStudies.slice(1).map(study => ({
    ...study,
    category: "Success Story"
  }));

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden bg-background text-foreground">
      {/* Theme toggle button */}
      {/* <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed bottom-6 right-6 z-50 rounded-full p-3 bg-background border border-muted shadow-lg hover:bg-accent transition-colors"
      >
        {theme === 'dark' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </button> */}

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary opacity-5 dark:opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-secondary opacity-5 dark:opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-background/80 dark:bg-background/90 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-muted">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Featured Case Study</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Success</span> Stories
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable results.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="bg-background/80 dark:bg-background/90 backdrop-blur-md rounded-2xl overflow-hidden mb-16 border border-muted animate-fade-in-up animation-delay-200">
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
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-2">{featuredCaseStudy.title}</h3>
              <p className="text-muted-foreground mb-4">{featuredCaseStudy.subtitle}</p>
              
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {featuredCaseStudy.challenge}
              </p>
              
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {featuredCaseStudy.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <Button 
                className="self-start group"
                onClick={() => openModal(0)}
              >
                See Full Case Study
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-400">
          {additionalCaseStudies.map((study, index) => (
            <div 
              key={index} 
              className="bg-background/80 dark:bg-background/90 backdrop-blur-md rounded-xl overflow-hidden group border border-muted h-[300px] relative cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/30"
              onClick={() => openModal(index + 1)}
            >
              <img 
                src={study.image} 
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col justify-end p-6">
                <div className="text-sm text-primary mb-2">{study.category}</div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{study.title}</h3>
                <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{study.subtitle}</p>
                <div className="mt-4 flex items-center text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  <span>View Case Study</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Implementation */}
        {isModalOpen && selectedCaseStudy !== null && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen p-4">
              {/* Background overlay */}
              <div 
                className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
                onClick={closeModal}
              ></div>

              {/* Modal container */}
              <div 
                className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl transform transition-all bg-background border border-muted"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-50 rounded-full p-2 bg-background/90 hover:bg-background transition-colors shadow-lg border border-muted"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className="relative h-[400px] lg:h-[550px] overflow-hidden">
                    <img
                      src={caseStudies[selectedCaseStudy].image}
                      alt={caseStudies[selectedCaseStudy].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                      <img
                        src={caseStudies[selectedCaseStudy].logo}
                        alt="Client logo"
                        className="h-16 w-auto max-w-[200px]"
                      />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className="p-8 lg:p-10 h-[400px] lg:h-[550px] overflow-y-auto">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-2">
                      {caseStudies[selectedCaseStudy].title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {caseStudies[selectedCaseStudy].subtitle}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-primary">The Challenge</h4>
                        <p className="text-muted-foreground">
                          {caseStudies[selectedCaseStudy].challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-primary">The Solution</h4>
                        <p className="text-muted-foreground">
                          {caseStudies[selectedCaseStudy].solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-3 text-primary">The Results</h4>
                        <ul className="space-y-3">
                          {caseStudies[selectedCaseStudy].results.map((result, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                              <span className="text-muted-foreground">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-primary/10 p-5 rounded-lg">
                        <h4 className="text-xl font-semibold mb-2 text-primary">Conclusion</h4>
                        <p className="text-muted-foreground">
                          {caseStudies[selectedCaseStudy].conclusion}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;