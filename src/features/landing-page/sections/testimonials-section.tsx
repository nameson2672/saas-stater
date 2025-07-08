"use client"

import { Quote,Star } from 'lucide-react';

import { Container } from '@/components/layout';
import { StructuredData } from '@/shared/components';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui';
import { Badge } from '@/components/ui';
import { Card, CardContent } from '@/components/ui';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc",
    avatar: "/avatars/sarah.jpg",
    rating: 5,
    content: "BannerCraft AI has revolutionized our social media strategy. We can now create professional Twitter banners in minutes instead of hours. The AI-generated designs are consistently high-quality and on-brand.",
    verified: true
  },
  {
    name: "Mike Chen",
    role: "Founder",
    company: "GrowthHack Co",
    avatar: "/avatars/mike.jpg",
    rating: 5,
    content: "As a startup founder, I need to move fast without compromising quality. BannerCraft AI delivers exactly that. The DALL·E integration produces stunning results that rival expensive design agencies.",
    verified: true
  },
  {
    name: "Emma Rodriguez",
    role: "Creative Director",
    company: "Brand Studio",
    avatar: "/avatars/emma.jpg",
    rating: 5,
    content: "The customization options are incredible. I can maintain brand consistency while exploring creative directions I never would have thought of. It's like having a junior designer with unlimited creativity.",
    verified: true
  },
  {
    name: "David Park",
    role: "Social Media Manager",
    company: "E-commerce Plus",
    avatar: "/avatars/david.jpg",
    rating: 5,
    content: "Managing multiple brand accounts used to be overwhelming. BannerCraft AI's team features and template library have streamlined our entire workflow. ROI has been exceptional.",
    verified: true
  },
  {
    name: "Lisa Thompson",
    role: "Content Creator",
    company: "Independent",
    avatar: "/avatars/lisa.jpg",
    rating: 5,
    content: "The free plan got me started, and I upgraded within a week. The quality and speed of generation is unmatched. My engagement rates have increased significantly since using these banners.",
    verified: true
  },
  {
    name: "Alex Kumar",
    role: "Agency Owner",
    company: "Digital Wave Agency",
    avatar: "/avatars/alex.jpg",
    rating: 5,
    content: "We serve 50+ clients and BannerCraft AI has become essential to our service offering. The enterprise features and API access have allowed us to scale efficiently while maintaining quality.",
    verified: true
  }
];

// Generate review structured data
const reviewStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "BannerCraft AI",
  "description": "AI-powered Twitter banner generator with DALL·E integration",
  "brand": {
    "@type": "Brand",
    "name": "BannerCraft AI"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": testimonials.length,
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": testimonials.map(testimonial => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": testimonial.name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": testimonial.content,
    "datePublished": new Date().toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "BannerCraft AI"
    }
  }))
};

function TestimonialCard({ testimonial, index }: { testimonial: any, index: number }) {
  return (
    <Card className="bg-gray-900 border-gray-800 h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={testimonial.avatar} alt={`${testimonial.name} avatar`} />
            <AvatarFallback>
              {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-white">{testimonial.name}</h3>
              {testimonial.verified && (
                <Badge variant="secondary" className="text-xs">
                  Verified
                </Badge>
              )}
            </div>
            <p className="text-sm text-gray-400">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        
        <div className="relative">
          <Quote className="w-6 h-6 text-gray-600 absolute -top-2 -left-2" />
          <blockquote className="text-gray-300 italic leading-relaxed pl-4">
            &ldquo;{testimonial.content}&rdquo;
          </blockquote>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-950" aria-labelledby="testimonials-heading">
      <Container>
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Customer Stories
            </Badge>
            <h2 id="testimonials-heading" className="text-3xl font-bold text-white mb-4 lg:text-4xl">
              Trusted by creators worldwide
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              See how BannerCraft AI is helping thousands of creators, marketers, and businesses 
              create stunning banners and grow their social media presence.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index} 
                testimonial={testimonial} 
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-4 p-6 bg-gray-900 rounded-lg border border-gray-800">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 4).map((testimonial, index) => (
                  <Avatar key={index} className="w-10 h-10 border-2 border-gray-900">
                    <AvatarImage src={testimonial.avatar} alt={`${testimonial.name} avatar`} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-white font-semibold ml-2">5.0</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Based on {testimonials.length}+ reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <StructuredData 
        type="Article" 
        data={{ 
          structuredData: reviewStructuredData 
        }} 
      />
    </section>
  );
}