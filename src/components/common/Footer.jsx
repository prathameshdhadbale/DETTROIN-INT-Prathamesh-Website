import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';
import { schoolLogoLight } from '../../data/images';
import { navLinks, socialLinks, contactInfo } from '../../data/navigation';

const quickLinks = navLinks.filter(
  (link) => !link.children && link.path !== '/blog'
);

const academicLinks = navLinks.find((l) => l.label === 'Academics')?.children || [];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img
                src={schoolLogoLight}
                alt="Excellence International School logo"
                className="h-12 w-auto"
              />
              <div>
                <span className="text-lg font-bold font-heading leading-tight block">
                  Excellence
                </span>
                <span className="text-xs text-teal-light font-medium tracking-wide">
                  International School
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Excellence International School is committed to providing a
              nurturing and stimulating learning environment where every child
              can discover their potential and grow into confident, responsible
              individuals.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={16} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Links */}
          <div>
            <h3 className="text-base font-semibold mb-5 font-heading">
              Our Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/admissions"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  Admissions Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Academics */}
          <div>
            <h3 className="text-base font-semibold mb-5 font-heading">
              Our Academics
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/academics"
                  className="text-sm text-white/70 hover:text-gold transition-colors"
                >
                  View Academic Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-base font-semibold mb-5 font-heading">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-gold shrink-0 mt-0.5"
                />
                <span className="text-sm text-white/70 leading-relaxed">
                  {contactInfo.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email1}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <Mail size={16} className="text-gold shrink-0" />
                  {contactInfo.email1}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email2}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <Mail size={16} className="text-gold shrink-0" />
                  {contactInfo.email2}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>
            &copy; {new Date().getFullYear()} Excellence International School. All
            rights reserved.
          </p>
          <p>
            Built by{' '}
            <span className="text-gold font-medium">Prathamesh Dhadbale</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
