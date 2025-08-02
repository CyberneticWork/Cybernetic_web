import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Cybernetic Technologies transformed our business operations with their custom ERP solution. Their team's expertise and dedication to our project was exceptional.",
      author: "Sarah Johnson",
      position: "CTO, TechVision Ltd",
      rating: 5,
      image: "/images/placeholder.svg", // Replace with actual client image
      logo: "/images/placeholder.svg", // Replace with actual company logo
    },
    {
      id: 2,
      quote: "The mobile application developed by Cybernetic has increased our customer engagement by 40%. Their attention to detail and user experience design is outstanding.",
      author: "Michael Chen",
      position: "CEO, Innovate Retail",
      rating: 5,
      image: "/images/placeholder.svg", // Replace with actual client image
      logo: "/images/placeholder.svg", // Replace with actual company logo
    },
    {
      id: 3,
      quote: "Working with Cybernetic on our cloud infrastructure migration was seamless. Their team provided expert guidance and support throughout the entire process.",
      author: "Priya Sharma",
      position: "IT Director, Global Finance",
      rating: 5,
      image: "/images/placeholder.svg", // Replace with actual client image
      logo: "/images/placeholder.svg", // Replace with actual company logo
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-secondary opacity-5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Client Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses we've helped transform with our technology solutions.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-5xl mx-auto relative">
          <div className="relative h-[400px] md:h-[350px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 flex flex-col glass rounded-2xl p-8 transition-all duration-500 ease-in-out",
                  activeIndex === index 
                    ? "opacity-100 translate-x-0 scale-100 z-10" 
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full scale-95 z-0" 
                      : "opacity-0 translate-x-full scale-95 z-0"
                )}
              >
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
                    {testimonial.quote}
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.image} alt={testimonial.author} className="w-14 h-14 rounded-full object-cover border-2 border-primary shadow-md" />
                    <div>
                      <div className="font-semibold text-lg">{testimonial.author}</div>
                      <div className="text-muted-foreground text-sm">{testimonial.position}</div>
                    </div>
                    <img src={testimonial.logo} alt={testimonial.position} className="w-12 h-12 object-contain ml-auto" />
                  </div>
                </div>
              </div>
            ))}
            {/* Carousel Controls */}
            <div className="absolute left-0 right-0 bottom-4 flex justify-between px-8 z-20">
              <Button variant="ghost" size="icon" onClick={prevTestimonial} disabled={isAnimating} aria-label="Previous testimonial">
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" onClick={nextTestimonial} disabled={isAnimating} aria-label="Next testimonial">
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;