import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare, CalendarDays } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1920&auto=format&fit=crop"
            alt="Contact DentalCare Clinic"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
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
            {/* Contact Cards */}
            <Card className="border-none shadow-md">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">Call Us</CardTitle>
                <CardDescription>We're available during business hours</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <p className="text-lg font-medium">(123) 456-7890</p>
                <p className="text-muted-foreground">For appointments and inquiries</p>
                <Button variant="outline" className="mt-4">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">Email Us</CardTitle>
                <CardDescription>We'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <p className="text-lg font-medium">info@dentalcare-clinic.com</p>
                <p className="text-muted-foreground">For general inquiries</p>
                <Button variant="outline" className="mt-4">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader className="text-center pb-2">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-heading">Visit Us</CardTitle>
                <CardDescription>Our modern dental facility</CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <p className="text-lg font-medium">123 Dental Street</p>
                <p className="text-muted-foreground">Medical District, City, 12345</p>
                <Button variant="outline" className="mt-4">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 font-heading">Business Hours</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We offer flexible hours to accommodate your busy schedule. Walk-ins are welcome, but appointments are recommended.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">Monday - Friday</span>
                        </div>
                        <span>8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">Saturday</span>
                        </div>
                        <span>9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-primary mr-2" />
                          <span className="font-medium">Sunday</span>
                        </div>
                        <span>Closed</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-medium mb-3 font-heading">Special Hours</h3>
                      <p className="text-muted-foreground mb-3">
                        We offer extended hours by appointment for emergency dental care.
                      </p>
                      <div className="flex items-center text-primary">
                        <Phone className="h-5 w-5 mr-2" />
                        <span className="font-medium">(123) 456-7890</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have a question or need more information? Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MessageSquare className="h-6 w-6 text-primary mr-4 shrink-0" />
                  <div>
                    <h3 className="font-medium">General Inquiries</h3>
                    <p className="text-muted-foreground">Questions about our services, insurance, or policies</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CalendarDays className="h-6 w-6 text-primary mr-4 shrink-0" />
                  <div>
                    <h3 className="font-medium">Appointments</h3>
                    <p className="text-muted-foreground">Schedule, reschedule, or cancel your dental appointment</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary mr-4 shrink-0" />
                  <div>
                    <h3 className="font-medium">Directions</h3>
                    <p className="text-muted-foreground">Find our location and parking information</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name*
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address*
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject*
                      </label>
                      <select
                        id="subject"
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="appointment">Appointment Request</option>
                        <option value="inquiry">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="How can we help you?"
                        required
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <input
                        id="privacy"
                        type="checkbox"
                        className="mt-1 mr-2"
                        required
                      />
                      <label htmlFor="privacy" className="text-sm text-muted-foreground">
                        I agree to the <Link href="#" className="text-primary hover:underline">Privacy Policy</Link> and consent to having my data processed.
                      </label>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
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

      {/* FAQ Section */}
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
                  question: "Do you accept insurance?",
                  answer: "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage before your appointment.",
                },
                {
                  question: "What should I do in case of a dental emergency?",
                  answer: "Call our emergency line at (123) 456-7890 immediately. We offer same-day emergency appointments whenever possible.",
                },
                {
                  question: "How often should I visit the dentist?",
                  answer: "We recommend visiting the dentist every six months for regular checkups and cleanings, though some patients may need more frequent visits based on their oral health needs.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept cash, credit cards (Visa, MasterCard, American Express), debit cards, and offer financing options through CareCredit for eligible patients.",
                },
                {
                  question: "Do you treat children?",
                  answer: "Yes, we provide dental care for patients of all ages, including children. Our pediatric dentistry services are designed to make dental visits comfortable and positive for young patients.",
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