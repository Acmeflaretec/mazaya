import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare, CalendarDays, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop"
            alt="Contact Mazaya Dental Center"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-极3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Have questions or ready to schedule your appointment? Get in touch with our friendly team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Call Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading text-gray-900">Call Us</CardTitle>
                <CardDescription className="text-gray-500">We're here to help during business hours</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4 space-y-3">
                <div>
                  <p className="text-lg font-semibold text-gray-800">+973 17777234</p>
                  <p className="text-sm text-gray-500">Landline</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-800">+973 39118291</p>
                  <p className="text-sm text-gray-500">Mobile</p>
                </div>
                <a href="tel:+97317777234" className="inline-block">
                  <Button variant="outline" className="mt-4 border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading text-gray-900">Email Us</CardTitle>
                <CardDescription className="text-gray-500">We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <p className="text-lg font-semibold text-gray-800">info@mazayadc.com</p>
                <p className="text-sm text-gray-500 mb-4">For general inquiries</p>
                <a href="mailto:info@mazayadc.com" className="inline-block">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Visit Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-heading text-gray-900">Visit Us</CardTitle>
                <CardDescription className="text-gray-500">Our state-of-the-art facility</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <p className="text-lg font-semibold text-gray-800">Unit 6, Bldg. 515</p>
                <p className="text-sm text-gray-500 mb-4">Road 1332, Block 813, Kingdom of Bahrain</p>
                <a href="https://maps.google.com/?q=Unit+6,+Bldg.+515,Road+1332,+Block+813,+Kingdom+of+Bahrain" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 font-heading bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Connect With Us on Social Media
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Stay connected for exclusive updates, dental tips, and special offers
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    platform: "Instagram",
                    icon: <Instagram className="h-10 w-10 text-white" />,
                    url: "https://www.instagram.com/mazaya.edc?igsh=MWV1ODRsb3d2ODlobQ%3D%3D&utm_source=qr",
                    bg: "bg-gradient-to-br from-pink-500 to-purple-600",
                  },
                  {
                    platform: "TikTok",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-white">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z"/>
                      </svg>
                    ),
                    url: "https://www.tiktok.com/@mazayabh?_t=8rOMH90x4iI&_r=1",
                    bg: "bg-gradient-to-br from-black to-gray-900",
                  },
                  {
                    platform: "Snapchat",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-10 w-10 text-white">
                        <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 9.96 5.5 0 9.96-4.46 9.96-9.96 0-5.5-4.46-9.96-9.96-9.96zm0 1.5c2.3 0 4.38.93 5.88 2.43l-1.42 1.42c-1.1-1.1-2.6-1.78-4.25-1.78-1.66 0-3.15.68-4.25 1.78l-1.42-1.42c1.5-1.5 3.58-2.43 5.88-2.43zm-3.6 3.6l1.42 1.42c-.6.6-.97 1.42-.97 2.3 0 .88.37 1.7.97 2.3l-1.42 1.42c-.9-.9-1.45-2.15-1.45-3.5 0-1.36.55-2.6 1.45-3.5zm7.2 0c.9.9 1.45 2.15 1.45 3.5 0 1.36-.55 2.6-1.45 3.5l-1.42-1.42c.6-.6.97-1.42.97-2.3 0-.88-.37-1.7-.97-2.3l1.42-1.42zm-3.6 3.6c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
                      </svg>
                    ),
                    url: "https://snapchat.com/t/LHo1AOSN",
                    bg: "bg-gradient-to-br from-yellow-400 to-yellow-500",
                  },
                  {
                    platform: "Facebook",
                    icon: <Facebook className="h-10 w-10 text-white" />,
                    url: "https://www.facebook.com/profile.php?id=61559196819721",
                    bg: "bg-gradient-to-br from-blue-600 to-blue-700",
                  },
                ].map((social) => (
                  <Link
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    className={`${social.bg} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2`}
                  >
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="mb-4">{social.icon}</div>
                      <span className="text-2xl font-semibold text-white">{social.platform}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-16">
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
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                      <div key={day} className="flex justify-between items-center pb-2 border-b">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">{day}</span>
                        </div>
                        <span>9:00 AM - 11:00 PM</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Add FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services, appointments, and policies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "What is general dentistry?",
                  answer: "General dentistry refers to the routine care and treatment of the teeth, gums, and mouth. Dentists in this field provide services such as cleanings, fillings, extractions, and preventative care.",
                },
                
                { 
                  question: "How often should I visit the dentist?",
                  answer: "It's generally recommended to visit the dentist at least twice a year for routine check-ups and cleanings. However, if you have specific oral health concerns, you might need more frequent visits.",
                },
                {
                  question: "What should I do if I have a toothache?",
                  answer: "If you have a toothache, it's important to contact your dentist as soon as possible to determine the cause. In the meantime, over-the-counter pain relievers and warm saltwater rinses can help alleviate discomfort.",
                },
                
                {
                    question: "How can I prevent cavities?",
                  answer: "Cavities are caused by tooth decay, which occurs when bacteria in the mouth produce acid from sugars. To prevent cavities, brush your teeth twice a day, floss daily, and visit the dentist regularly for cleanings.",
                  },
                {
                  question: "What is a filling, and why would I need one?",
                  answer: "A filling is used to restore a tooth that has been damaged by decay. The dentist removes the decayed portion of the tooth and fills the area with materials like composite resin, silver amalgam, or gold.",
                },
                {
                  question: "What is a root canal, and when is it necessary?",
                  answer: "A root canal is a treatment used to repair and save a tooth that has become infected or badly decayed. It involves removing the infected pulp from inside the tooth, cleaning the area, and sealing it.",
                },
                {
                  question: "What is the best way to whiten my teeth?",
                  answer: "Teeth whitening options include professional treatments provided by your dentist or over-the-counter products like whitening toothpaste and strips. Consulting your dentist will help you choose the safest and most effective option for your teeth.",
                },
                {
                  question: "What is gum disease, and how can I prevent it?",
                  answer: "Gum disease (gingivitis or periodontitis) is an infection of the gums caused by plaque buildup. Brushing, flossing, and regular dental check-ups can help prevent gum disease.",
                },
                {
                  question: "What should I do if I have a broken or chipped tooth?",
                  answer: "If you break or chip a tooth, contact your dentist immediately. They may be able to repair it with bonding, a crown, or other treatments depending on the extent of the damage.",
                },
                {
                  question: "Is it safe to get dental X-rays?",
                  answer: "Dental X-rays are generally safe, and the amount of radiation used is very low. Dentists only take X-rays when necessary for diagnosing or monitoring oral health.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 font-heading">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}