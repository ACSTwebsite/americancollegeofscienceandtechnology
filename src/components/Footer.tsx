import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">ACST</h3>
            <p className="text-sm opacity-90">
              American College of Science & Technology - Empowering minds, advancing knowledge, shaping futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-accent transition-colors">Programs</Link></li>
              <li><Link to="/admissions" className="hover:text-accent transition-colors">Admissions</Link></li>
              <li><Link to="/research" className="hover:text-accent transition-colors">Research</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/campuses" className="hover:text-accent transition-colors">Campuses</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 University Ave, Boston, MA 02134</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(617) 555-0100</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@acst.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="opacity-90">© {new Date().getFullYear()} American College of Science & Technology. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
