"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

// Define departments
const departments = [
  {
    id: 1,
    name: "Orthodontics",
    description: "Specialized care for teeth alignment and bite correction using braces and aligners.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M17 4c-4-2-8 7-12 1" />
        <path d="M17 9c-4-1-8 7-12 2" />
        <path d="M19 4c0 1.2-.8 2-2 2" />
        <path d="M19 9c0 1.2-.8 2-2 2" />
        <path d="M5 4c0 1.2.8 2 2 2" />
        <path d="M5 9c0 1.2.8 2 2 2" />
        <path d="M12 3v18" />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Pedodontics",
    description: "Comprehensive dental care for children, ensuring healthy smiles from an early age.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 9h.01" />
        <path d="M15 9h.01" />
        <path d="M8 13h8" />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Implantology",
    description: "Advanced tooth replacement solutions with durable and natural-looking dental implants.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 5.5v13" />
        <path d="M5 12h14" />
        <path d="M5.5 5.5c1-2 3-3 6.5-3s5.5 1 6.5 3c1 2 1 4 0 6-1 2-3 3-6.5 3s-5.5-1-6.5-3c-1-2-1-4 0-6Z" />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Prosthodontics",
    description: "Restorative solutions including crowns, bridges, and dentures for complete oral rehabilitation.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Periodontics",
    description: "Expert care for gum health and treatment of periodontal diseases to maintain strong foundations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8Z" />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Endodontics",
    description: "Specialized root canal treatments to save damaged teeth and relieve dental pain.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M16 12c3 2 4 3.5 4 6-2 0-4 0-6-2" />
        <path d="M8 12c-3 2-4 3.5-4 6 2 0 4 0 6-2" />
        <path d="M12 4c-2 1-4 2-4 4 0 3.5 2 4.5 4 8 2-3.5 4-4.5 4-8 0-2-2-3-4-4Z" />
      </svg>
    ),
  },
];

export default function DepartmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1920&auto=format&fit=crop"
            alt="Dental departments"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Our Specialized Departments
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Experience world-class dental care through our specialized departments, each dedicated to specific areas of oral health.
            </p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Specialties</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our specialized departments, each offering expert care in their respective fields of dentistry.
            </p>
          </div>

          {/* Departments Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {departments.map((department) => (
                <motion.div
                  key={department.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="card h-full border-none hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="mb-4 text-primary">{department.icon}</div>
                      <CardTitle className="text-xl font-heading">{department.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{department.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="text-primary hover:text-primary-foreground hover:bg-primary flex items-center">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Ready to Schedule Your Visit?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Our team of dental professionals is ready to provide you with the care you need. Book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Appointment
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}