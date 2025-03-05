import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, MapPin, Phone, Mail, ArrowRight, Star, CheckCircle2, Award, Users, Globe, Stethoscope, Gift, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1920&auto=format&fit=crop"
            alt="Modern dental clinic"
            fill
            priority
            className="object-cover brightness-[0.85]"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="container relative z-10 h-full flex items-center">
          <div className="max-w-2xl lg:max-w-4xl space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight font-heading">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                Welcome to Mazaya
              </span><br />
              <span className="text-white">Dental Center</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-2xl leading-relaxed">
              Experience fully digital dental care with our One-Day Dentistry service. Get your crowns, bridges, and restorations in a single visit at our state-of-the-art facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-primary/30 transition-all">
                <Phone className="mr-2 h-5 w-5" />
                Book Appointment
              </Button>  

              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/50 hover:border-white bg-white/10 text-white px-8 py-6 text-lg font-medium backdrop-blur-sm transition-all"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 z-10">
          <div className="container flex justify-center">
            <div className="w-10 h-16 border-2 border-white/50 rounded-full flex items-center justify-center p-1 animate-bounce">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
          <div className="absolute inset-0 bg-[url('/images/dental-pattern.svg')] bg-[length:80px_80px] md:bg-[length:120px_120px] opacity-10" />
        </div>
        
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 font-heading text-primary">
              Our Dental Services
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive dental care services to meet all your oral health needs in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Orthodontics",
                description: "Specialized care for teeth alignment and bite correction using braces and aligners.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <path d="M17 4c-4-2-8 7-12 1" />
                      <path d="M17 9c-4-1-8 7-12 2" />
                      <path d="M19 4c0 1.2-.8 2-2 2" />
                      <path d="M19 9c0 1.2-.8 2-2 2" />
                      <path d="M5 4c0 1.2.8 2 2 2" />
                      <path d="M5 9c0 1.2.8 2 2 2" />
                      <path d="M12 3v18" />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Pedodontics",
                description: "Comprehensive dental care for children, ensuring healthy smiles from an early age.",
                icon: (
                  <div className="relative w-12 h-12 sm:w极16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 极24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9 9h.01" />
                      <path d="M15 9h.01" />
                      <path d="M8 13h8" />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Implantology",
                description: "Advanced tooth replacement solutions with durable and natural-looking dental implants.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <path d="M12 5.5v13" />
                      <path d="M5 12h14" />
                      <path d="M5.5 5.5c1-2 3-3 6.5-3s5.5 1 6.5 3c1 2 1 4 0 6-1 2-极3 3-6.5 3s-5.5-1-6.5-3c-1-2-1-4 0-6Z" />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Prosthodontics",
                description: "Restorative treatments including crowns, bridges, and dentures for optimal oral function.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <path d="M12 2a10 10 0 1 0 10 10H2A10 10 0 0 0 12 2Z" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <path d="M9 9h.01" />
                      <path d="M15 9极h.01" />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Periodontics",
                description: "Specialized care for gum health and treatment of periodontal diseases.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <path d="M12 2a10 10 0 1 0 10 10H2A10 10 0 0 0 12 2Z" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <path d="M9 9h.01" />
                      <path d="M15 9h.01" />
                    </svg>
                  </div>
                ),
              },
              {
                title: "Endodontics",
                description: "Expert root canal treatments to save and preserve damaged teeth.",
                icon: (
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl sm:rounded-2xl transform rotate-45" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 sm:w-10 sm:h-10 text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <path d="M12 2a10 10 0 1 0 10 10H2A10 10 0 0 0 12 2Z" />
                      <path d="M12 5.5v13" />
                      <path d="M5 12h14" />
                      <path d="M5.5 5.5c1-2 3-3 6.5-3s5.5 1 6.5 3c1 2 1 4 0 6-1 2-3 3-6.5 3s-5.5-1-6.5-3c-1-2-1-4 0-6Z" />
                    </svg>
                  </div>
                ),
              },
            ].map((service, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-white border border-gray-100 rounded-2xl sm:rounded-3xl shadow-sm sm:shadow-lg shadow-primary/5 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl" />
                <div className="relative p-6 sm:p-8">
                  <div className="mb-4 sm:mb-6">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading mb-3 sm:mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">{service.description}</p>
                  <Link href="/departments" className="inline-flex items-center text-primary font-medium group-hover:underline text-sm sm:text-base">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:mt-16">
            <Button asChild className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
              <Link href="/departments">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Add Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dental-pattern.svg')] bg-[length:80px_80px] md:bg-[length:120px_120px] opacity-5" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
              Why Choose Mazaya Dental Center?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience excellence in dental care with our unique combination of expertise, technology, and patient comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-primary" />,
                title: "One-Day Dentistry",
                description: "Get your crowns, bridges, and restorations in a single visit with our advanced digital technology."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "International Expertise",
                description: "Access world-class dental care from renowned specialists from the UK, Luxembourg, and beyond."
              },
              {
                icon: <Globe className="h-8 w-8 text-primary" />,
                title: "Dental Tourism Pioneer",
                description: "First center in Bahrain focusing on dental health tourism, making quality care accessible to all."
              },
              {
                icon: <Stethoscope className="h-8 w-8 text-primary" />,
                title: "Comprehensive Care",
                description: "Full range of dental specialties under one roof for seamless, coordinated treatment."
              },
              {
                icon: <Gift className="h-8 w-8 text-primary" />,
                title: "Premium Amenities",
                description: "Enjoy our VIP lounge and coffee shop while experiencing luxury dental care."
              },
              {
                icon: <CreditCard className="h-8 w-8 text-primary" />,
                title: "Flexible Payment Options",
                description: "Multiple insurance affiliations and in-house financing plans available."
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Insurance Partners Section */}
      {/* <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Insurance Partners</h2>
            <p className="text-lg text-muted-foreground">
              We work with major insurance providers to make quality dental care accessible.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl flex items-center justify-center">
                <p className="text-gray-400">[Insurance Logo]</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Add Special Offers Section */}
      {/* <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
              Special Offers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Take advantage of our current promotional packages and discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "New Patient Special",
                description: "Comprehensive exam, cleaning, and X-rays package",
                price: "49",
                features: ["Complete Oral Examination", "Professional Cleaning", "Digital X-rays", "Treatment Plan Consultation"]
              },
              {
                title: "Smile Makeover",
                description: "Transform your smile with our cosmetic package",
                price: "999",
                features: ["Teeth Whitening", "Dental Veneers Consultation", "Digital Smile Design", "Treatment Plan"]
              },
              {
                title: "Family Package",
                description: "Special discount for families of 4 or more",
                price: "199",
                features: ["Family Dental Check-up", "Children's Dental Education", "Preventive Care Plan", "20% Off Additional Services"]
              }
            ].map((offer, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-primary/5 pb-8">
                  <CardTitle className="text-2xl font-bold">{offer.title}</CardTitle>
                  <CardDescription>{offer.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">${offer.price}</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {offer.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Book Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image Section */}
            <div className="relative group">
              <div className="relative rounded-3xl overflow-hidden  transform transition-all duration-700 hover:scale-105 bg-gradient-to-br from-primary/10 to-white">
                <AspectRatio ratio={4/3}>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src="/MAZAYA logo Transparent 01.png"
                        alt="Mazaya Dental Logo"
                        fill
                        className="object-contain transition-all duration-500 hover:scale-110"
                        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                      />
                    </div>
                  </div>
                </AspectRatio>
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent" />
                <div className="absolute inset-0 border-2 border-white/10 rounded-3xl pointer-events-none" />
              </div>
              
              {/* Floating Rating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 hidden md:block transform transition-all hover:scale-105">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-2xl font-bold font-heading text-gray-900">4.9</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Patient Rating</p>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                The Mazaya Difference
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                As the pioneer in dental health tourism in Bahrain, we bring world-renowned dentists from the UK, Luxembourg, and beyond, offering exceptional dental care with unmatched convenience and comfort.
              </p>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                    title: "VIP Lounge",
                    description: "Luxurious environment for comfortable consultations"
                  },
                  {
                    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                    title: "Coffee Shop",
                    description: "Enjoy beverages while you wait"
                  },
                  {
                    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                    title: "Insurance Coverage",
                    description: "Affiliated with major local & international providers"
                  },
                  {
                    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                    title: "Flexible Financing",
                    description: "In-house payment plans available"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Animated Button */}
              <Button asChild className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/30">
                <Link href="/about" className="flex items-center gap-2">
                  Learn About Mazaya
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white via-white/95 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dental-pattern.svg')] bg-[length:80px_80px] md:bg-[length:120px_120px] opacity-5" />
        <div className="container relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading text-primary">
              Patient Experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the transformative journeys of our valued patients and their exceptional experiences at our clinic.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm rounded-full p-1">
                <TabsTrigger 
                  value="all" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2 rounded-full transition-all"
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="general" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2 rounded-full transition-all"
                >
                  General
                </TabsTrigger>
                <TabsTrigger 
                  value="cosmetic" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2 rounded-full transition-all"
                >
                  Cosmetic
                </TabsTrigger>
                <TabsTrigger 
                  value="orthodontics" 
                  className="data-[state=active]:bg-primary data-[state=active]:text-white px-6 py-2 rounded-full transition-all"
                >
                  Orthodontics
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    service: "Teeth Whitening",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
                    content: "The teeth whitening treatment exceeded my expectations. My smile has never looked better, and the staff made me feel comfortable throughout the entire process.",
                    rating: 5,
                  },
                  {
                    name: "Michael Chen",
                    service: "Dental Implants",
                    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop",
                    content: "After losing a tooth, I was worried about how the implant would look and feel. The team at DentalCare was amazing, and my new implant looks completely natural.",
                    rating: 5,
                  },
                  {
                    name: "Emily Rodriguez",
                    service: "Orthodontics",
                    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=200&auto=format&fit=crop",
                    content: "I completed my orthodontic treatment here and couldn't be happier with the results. The clear aligners were convenient, and the staff was always helpful.",
                    rating: 4,
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-xl font-semibold">{testimonial.name}</CardTitle>
                          <CardDescription className="text-primary">{testimonial.service}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                          ))}
                          {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-gray-300" />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({testimonial.rating}/5)</span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="general" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                        <Image
                          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
                          alt="Robert Wilson"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold">Robert Wilson</CardTitle>
                        <CardDescription className="text-primary">Regular Checkup</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      "I've been coming to DentalCare for my regular checkups for years. The hygienists are gentle and thorough, and Dr. Miller always takes time to answer all my questions."
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">(5/5)</span>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="cosmetic" className="space-y-0">
              {/* Cosmetic dentistry testimonials would go here */}
            </TabsContent>
            
            <TabsContent value="orthodontics" className="space-y-0">
              {/* Orthodontics testimonials would go here */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/dental-pattern.svg')] bg-[length:80px_80px] md:bg-[length:120px_120px] opacity-5" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-heading bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Connect With Mazaya
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience world-class dental care at Mazaya. Our dedicated team is here to provide personalized treatment and exceptional service for all your dental needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">
                    Flat No,6,7,8,9,10, Building No. 515, Road 1332, Block 813, Isa Town, Kingdom of Bahrain
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+973 17 555 555</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@mazayadc.com</p>
                  </div>
                </div>
                
                <div className="flex items-start bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-gray-600">Open 7 days a week</p>
                    <p className="text-gray-600">9:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button variant="outline" className="px-8 py-6 text-lg font-semibold rounded-full border-primary hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </div>
            </div>
            
            <div>
              <Card className="border-none shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-white p-8">
                  <CardTitle className="text-3xl font-heading">Send Us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    We'll respond within 24 hours to discuss your dental needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="(202) 555-1234"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Community Commitment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We actively conduct charity drives in association with various NGOs and corporate partners, reinforcing our commitment to improving dental health awareness and accessibility for all.
            </p>
          </div>
          <div className="flex justify-center">
            <Button asChild className="px-8 py-6 text-lg font-semibold rounded-full bg-primary hover:bg-primary/90">
              <Link href="/about">Learn More About Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="h-[400px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1580234295259!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* Calendly Integration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Schedule Your Appointment</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose a convenient time for your visit using our online scheduling system.
            </p>
          </div>
          
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-muted-foreground">
              [Calendly integration widget would be placed here]
            </p>
            <Button className="mt-4">
              Book Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Update Business Hours Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-heading">Business Hours</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're open 7 days a week to serve your dental needs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-primary mr-2" />
                      <span className="font-medium">Monday - Sunday</span>
                    </div>
                    <span>9:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add Community Commitment Section before Calendly */}
     
    </>
  );
}