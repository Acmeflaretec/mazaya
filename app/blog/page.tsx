"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Clock, ArrowRight } from "lucide-react";

// Define blog categories
const categories = [
  { id: "all", name: "All Posts" },
  { id: "dental-tips", name: "Dental Tips" },
  { id: "oral-health", name: "Oral Health" },
  { id: "treatments", name: "Treatments" },
  { id: "technology", name: "Technology" },
];

// Define blog posts
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Maintaining Healthy Teeth and Gums",
    excerpt: "Discover the essential daily habits that can help you maintain optimal oral health and prevent common dental problems.",
    category: "dental-tips",
    date: "April 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Understanding the Benefits of Regular Dental Checkups",
    excerpt: "Regular dental visits are crucial for preventing serious issues. Learn why you shouldn't skip your biannual appointments.",
    category: "oral-health",
    date: "April 10, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "The Evolution of Dental Implants: What You Need to Know",
    excerpt: "Dental implant technology has advanced significantly. Explore the latest innovations and what they mean for patients.",
    category: "treatments",
    date: "April 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1579083578954-4105c0f3c8ca?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "How to Choose the Right Toothbrush and Toothpaste",
    excerpt: "With so many options available, selecting the right dental products can be overwhelming. Here's a guide to help you decide.",
    category: "dental-tips",
    date: "March 28, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1559589311-5f3ebe9d6f15?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "The Connection Between Oral Health and Overall Wellness",
    excerpt: "Research shows strong links between oral health and systemic conditions. Learn how your mouth affects your body.",
    category: "oral-health",
    date: "March 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Teeth Whitening: Professional vs. At-Home Options",
    excerpt: "Comparing the effectiveness, safety, and cost of professional whitening treatments and over-the-counter products.",
    category: "treatments",
    date: "March 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581585095852-97958afb5b6f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Digital Dentistry: How Technology is Transforming Dental Care",
    excerpt: "From 3D printing to AI diagnostics, explore how digital innovations are revolutionizing the dental industry.",
    category: "technology",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516731415730-0c29727a3fe4?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Managing Dental Anxiety: Tips for a Stress-Free Visit",
    excerpt: "Dental anxiety affects millions. Discover effective strategies to overcome fear and make dental visits more comfortable.",
    category: "dental-tips",
    date: "March 5, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa8ed?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    title: "The Impact of Diet on Your Dental Health",
    excerpt: "What you eat significantly affects your teeth and gums. Learn which foods promote oral health and which to avoid.",
    category: "oral-health",
    date: "February 28, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    title: "Invisalign vs. Traditional Braces: Making the Right Choice",
    excerpt: "Comparing the benefits, limitations, and costs of clear aligners and conventional braces for teeth straightening.",
    category: "treatments",
    date: "February 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    title: "Laser Dentistry: Applications and Advantages",
    excerpt: "How laser technology is making dental procedures more precise, less invasive, and more comfortable for patients.",
    category: "technology",
    date: "February 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1620775997990-1a0cf30b3901?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    title: "Pediatric Dental Care: Setting the Foundation for Lifelong Oral Health",
    excerpt: "When to start dental visits for children and how to establish good oral hygiene habits from an early age.",
    category: "dental-tips",
    date: "February 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1588776814546-daab30f310ce?q=80&w=800&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1920&auto=format&fit=crop"
            alt="Dental blog"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading">
              Dental Health Blog
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Stay informed with the latest insights, tips, and news about dental health and treatments from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          {/* Category Filters */}
          <Tabs 
            defaultValue="all" 
            value={activeCategory}
            onValueChange={handleCategoryChange}
            className="w-full mb-12"
          >
            <div className="flex justify-center">
              <TabsList className="bg-muted/50 p-1 overflow-x-auto max-w-full flex-wrap justify-center">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="px-4 py-2"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>

          {/* Blog Posts Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="card h-full border-none overflow-hidden">
                  <div className="relative">
                    <AspectRatio ratio={16/9}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </AspectRatio>
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                      {categories.find(cat => cat.id === post.category)?.name}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-heading line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="text-primary hover:text-primary-foreground hover:bg-primary flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  Previous
                </Button>
                
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index}
                    variant={currentPage === index + 1 ? "default" : "outline"}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Stay updated with our latest articles, dental tips, and special offers delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}