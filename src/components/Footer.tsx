import { Heart, Mail, Globe, MapPin, Phone, Facebook, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20 relative bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">Cybernetic Software Solutions</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cybernetic Software Solutions - Leading software solution company providing innovative and cost-effective IT solutions worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-4 h-4" />
                <a href="https://www.cybernetic.com" className="text-sm hover:underline">
                  www.cybernetic.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@cybernetic.lk" className="text-sm hover:underline">
                  info@cybernetic.lk
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">
                  136/2 Sahilathalarama Rd,<br />
                  Piliyandala 10300, Sri Lanka
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all card-hover"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all card-hover"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-green-500 hover:bg-green-500/10 transition-all card-hover"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              Connect with us on social media for updates and insights.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm">
              © 2025 Cybernetic Software Solutions. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;