import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Award, Users, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=1920&auto=format&fit=crop"
            alt="About DentalCare Clinic"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              About DentalCare Clinic
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Providing exceptional dental care with a patient-centered approach since 2010. Our mission is to create healthy, beautiful smiles that last a lifetime.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2010 by Dr. Sarah Johnson, DentalCare Clinic began with a simple vision: to provide dental care that combines clinical excellence with genuine compassion.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a small practice with just two treatment rooms has grown into a comprehensive dental center with state-of-the-art facilities and a team of specialists covering all aspects of dentistry.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Despite our growth, we've maintained our founding principles: personalized care, cutting-edge treatments, and creating a comfortable environment where patients feel at ease.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">15+</p>
                  <p className="text-muted-foreground">Years of Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">10,000+</p>
                  <p className="text-muted-foreground">Happy Patients</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">20+</p>
                  <p className="text-muted-foreground">Dental Specialists</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-2">12</p>
                  <p className="text-muted-foreground">Treatment Rooms</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden">
                <AspectRatio ratio={4/3}>
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                    alt="Dental clinic history"
                    fill
                    className="object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do at DentalCare Clinic, from how we treat our patients to how we perform our procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for clinical excellence in every procedure, using the latest techniques and technologies.",
                icon: <Award className="h-12 w-12 text-primary" />,
              },
              {
                title: "Compassion",
                description: "We treat each patient with empathy and understanding, recognizing their unique needs and concerns.",
                icon: <Heart className="h-12 w-12 text-primary" />,
              },
              {
                title: "Integrity",
                description: "We maintain the highest ethical standards, providing honest recommendations and transparent pricing.",
                icon: <CheckCircle2 className="h-12 w-12 text-primary" />,
              },
              {
                title: "Teamwork",
                description: "Our specialists collaborate to provide comprehensive care that addresses all aspects of your oral health.",
                icon: <Users className="h-12 w-12 text-primary" />,
              },
            ].map((value, index) => (
              <Card key={index} className="text-center p-6 border-none shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team of experienced dental professionals is dedicated to providing you with the highest quality care in a comfortable environment.
            </p>
          </div>

          <Tabs defaultValue="dentists" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList>
                <TabsTrigger value="dentists">Dentists</TabsTrigger>
                <TabsTrigger value="specialists">Specialists</TabsTrigger>
                <TabsTrigger value="staff">Support Staff</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="dentists" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Dr. Sarah Johnson",
                    role: "Founder & General Dentist",
                    bio: "With over 20 years of experience, Dr. Johnson founded DentalCare Clinic with a vision to provide exceptional dental care in a comfortable environment.",
                    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop",
                  },
                  {
                    name: "Dr. Michael Chen",
                    role: "General Dentist",
                    bio: "Dr. Chen specializes in preventive care and restorative dentistry, with a particular focus on minimally invasive techniques.",
                    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400&auto=format&fit=crop",
                  },
                  {
                    name: "Dr. Emily Rodriguez",
                    role: "General Dentist",
                    bio: "Dr. Rodriguez is passionate about patient education and helping patients maintain optimal oral health through preventive care.",
                    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=400&auto=format&fit=crop",
                  },
                ].map((member, index) => (
                  <Card key={index} className="border-none shadow-md overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1 font-heading">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="specialists" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Dr. Robert Wilson",
                    role: "Orthodontist",
                    bio: "Dr. Wilson is a board-certified orthodontist specializing in both traditional braces and clear aligner therapy for patients of all ages.",
                    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop",
                  },
                  {
                    name: "Dr. Lisa Park",
                    role: "Periodontist",
                    bio: "Dr. Park specializes in the prevention, diagnosis, and treatment of periodontal disease and dental implant placement.",
                    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=400&auto=format&fit=crop",
                  },
                  {
                    name: "Dr. James Taylor",
                    role: "Endodontist",
                    bio: "Dr. Taylor is an endodontic specialist focused on root canal therapy and treating dental pain with the latest techniques.",
                    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=400&auto=format&fit=crop",
                  },
                ].map((member, index) => (
                  <Card key={index} className="border-none shadow-md overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1 font-heading">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="staff" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: "Jennifer Adams",
                    role: "Dental Hygienist",
                    bio: "Jennifer has been with our practice for over 10 years, providing thorough cleanings and helping patients improve their home care routines.",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
                  },
                  {
                    name: "David Martinez",
                    role: "Office Manager",
                    bio: "David ensures our practice runs smoothly, handling scheduling, insurance coordination, and making sure patients have a seamless experience.",
                    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
                  },
                  {
                    name: "Sophia Lee",
                    role: "Dental Assistant",
                    bio: "Sophia assists our dentists during procedures, prepares patients for treatment, and helps ensure their comfort throughout their visit.",
                    image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=400&auto=format&fit=crop",
                  },
                ].map((member, index) => (
                  <Card key={index} className="border-none shadow-md overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-1 font-heading">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Our Facility Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Our Modern Facility</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We've created a state-of-the-art dental facility designed with your comfort and care in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Reception Area",
                image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop",
              },
              {
                title: "Treatment Rooms",
                image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=600&auto=format&fit=crop",
              },
              {
                title: "Advanced Technology",
                image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=600&auto=format&fit=crop",
              },
              {
                title: "Sterilization Center",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=600&auto=format&fit=crop",
              },
              {
                title: "Consultation Room",
                image: "https://images.unsplash.com/photo-1579083578954-4105c0f3c8ca?q=80&w=600&auto=format&fit=crop",
              },
              {
                title: "Kids' Play Area",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
              },
            ].map((facility, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <AspectRatio ratio={4/3}>
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white font-heading">{facility.title}</h3>
                  </div>
                </AspectRatio>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Ready to Experience the DentalCare Difference?</h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Schedule your appointment today and discover why thousands of patients trust us with their dental health.
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