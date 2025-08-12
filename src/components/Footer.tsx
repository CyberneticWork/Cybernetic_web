import {
  Heart,
  Mail,
  Globe,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

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
              <span className="text-xl font-bold gradient-text">
                Cybernetic Technologies Pvt Ltd
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cybernetic Technologies Pvt Ltd - Leading software solution
              company providing innovative and cost-effective IT solutions
              worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Globe className="w-4 h-4" />
                <a
                  href="https://www.cybernetic.lk"
                  className="text-sm hover:underline"
                >
                  www.cybernetic.lk
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:info@cybernetic.lk"
                  className="text-sm hover:underline"
                >
                  info@cybernetic.lk
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">
                  No 1180, Rajamalwatta road
                  <br />
                  Battaramulla Sri Lanka
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100091272932741"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all card-hover"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/cybernetic-software-solutions/posts/?feedView=all"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all card-hover"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/cybernetics_software_solution/"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-pink-500 hover:bg-pink-500/10 transition-all card-hover"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" />
                </svg>
              </a>
              <a
                href="https://x.com/a_cybernetics"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10 transition-all card-hover"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.67 1.64.95c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.91 3.54 4.32-.37.1-.76.16-1.16.16-.28 0-.55-.03-.82-.08.55 1.72 2.15 2.97 4.05 3A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.41-.02-.61A9.22 9.22 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@cybernetics_software"
                className="w-10 h-10 glass rounded-xl flex items-center justify-center text-muted-foreground hover:text-black hover:bg-black/10 transition-all card-hover"
                aria-label="TikTok"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19a7 7 0 100-14 7 7 0 000 14zm6-7a6 6 0 11-12 0 6 6 0 0112 0zm2-7v2a4 4 0 01-4 4H7a4 4 0 01-4-4V5a4 4 0 014-4h6a4 4 0 014 4z" />
                </svg>
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
              © 2025 Cybernetic Technologies Pvt Ltd. All rights reserved.
            </div>
            {/* Legal Links */}
            <div className="flex gap-4 text-sm">
              <a
                href="/privacy-policy"
                className="hover:underline text-muted-foreground"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="hover:underline text-muted-foreground"
              >
                Terms of Service
              </a>
              <a
                href="/refund-policy"
                className="hover:underline text-muted-foreground"
              >
                Refund Policy
              </a>
            </div>
            
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-4 h-4 mr-2" />
          Back to Top
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
