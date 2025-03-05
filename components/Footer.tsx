import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Mazaya Dental Center</h3>
            <p className="mb-4 text-gray-200">
              Providing exceptional dental care with a patient-centered approach. Our mission is to create healthy, beautiful smiles that last a lifetime.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-foreground transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-foreground transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-foreground transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Departments
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link href="/departments" className="text-gray-200 hover:text-white transition-colors duration-300">
                  Dental Implants
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-foreground shrink-0 mt-0.5" />
                <span>Flat No,6,7,8,9,10, Building No. 515, Road 1332, Block 813, Isa Town, Kingdom of Bahrain</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-foreground" />
                <span>+973 39224333</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-foreground" />
                <span>info@mazayadc.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-primary-foreground shrink-0 mt-0.5" />
                <div>
                  <p>Monday - Sunday: 9:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Mazaya Dental Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}