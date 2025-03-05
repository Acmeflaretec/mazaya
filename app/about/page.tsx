import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Award, Users, Heart, Coffee, Globe, ShieldCheck, CreditCard, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1920&auto=format&fit=crop"
            alt="Mazaya Dental Center"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Welcome to Mazaya Dental Center
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Experience fully digital dental care with our One-Day Dentistry service. Get your crowns, bridges, and restorations in a single visit at our state-of-the-art facility.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Our Unique Approach</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Mazaya Dental Center, we pride ourselves on being a fully digital dental practice that caters to all specialties in dentistry. Our state-of-the-art facility utilizes advanced technology to ensure the highest standards of care and efficiency.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our unique One-Day Dentistry service enables patients to receive their crowns, bridges, and other restorations in a single visit, maximizing convenience and minimizing wait times.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">7</p>
                  <p className="text-muted-foreground">Days a Week</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">14</p>
                  <p className="text-muted-foreground">Hours Daily</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">1</p>
                  <p className="text-muted-foreground">Day Dentistry</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">50+</p>
                  <p className="text-muted-foreground">Insurance Plans</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <Image
                    src="/MAZAYA logo Transparent 01.png"
                    alt="Mazaya Dental Center"
                    fill
                    className="object-contain"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Unique Features</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover what makes Mazaya Dental Center the preferred choice for comprehensive dental care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "VIP Lounge",
                description: "Luxurious environment for comfortable consultations and relaxation"
              },
              {
                icon: <Coffee className="h-8 w-8 text-primary" />,
                title: "Coffee Shop",
                description: "Enjoy premium beverages while you wait for your appointment"
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "Dental Tourism",
                description: "World-renowned dentists from the UK, Luxembourg, and beyond"
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-primary" />,
                title: "Insurance Coverage",
                description: "Affiliated with all major local and international insurance providers"
              },
              {
                icon: <CreditCard className="h-8 w-8 text-primary" />,
                title: "Flexible Financing",
                description: "In-house payment plans for convenient financial management"
              },
              {
                icon: <Clock className="h-8 w-8 text-primary" />,
                title: "Extended Hours",
                description: "Open 7 days a week from 9 AM to 11 PM for your convenience"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center p-6 border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Commitment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Community Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe in giving back and improving dental health awareness for all
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Charity Drives",
                description: "Regular dental health initiatives in partnership with NGOs",
                image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Corporate Partnerships",
                description: "Collaborating with businesses to improve employee dental health",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop"
              },
              {
                title: "Health Awareness",
                description: "Educational programs to promote better oral health practices",
                image: "https://images.unsplash.com/photo-1523050854058-8df9012c7f0c?q=80&w=600&auto=format&fit=crop"
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1 font-heading">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-极3xl md:text-4xl font-bold mb-6 font-heading">Experience the Mazaya Difference</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              We're open 7 days a week from 9:00 AM to 11:00 PM. Schedule your appointment today and discover why thousands of patients trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}