"use client"

import { Container } from '@/components/layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui';
import { StructuredData } from '@/shared/components';

const faqData = [
  {
    question: "What is BannerCraft AI?",
    answer: "BannerCraft AI is an AI-powered Twitter banner generator that uses DALL·E technology to create stunning, professional social media graphics in seconds. Simply describe your vision, and our AI will generate beautiful banners tailored to your brand."
  },
  {
    question: "How does the AI banner generation work?",
    answer: "Our platform integrates with OpenAI's DALL·E API to generate high-quality banners based on your text prompts. You provide a description of what you want, and our AI creates unique, professional-looking banners that match your specifications."
  },
  {
    question: "What banner formats are supported?",
    answer: "We support standard Twitter banner dimensions (1500x500 pixels) and other social media formats. All banners are optimized for social media platforms and provided in high-resolution formats suitable for both web and print use."
  },
  {
    question: "Can I customize the generated banners?",
    answer: "Yes! While our AI creates the initial design, you can request variations, adjust colors, modify text, and fine-tune elements to match your brand identity. Our iterative generation process helps you achieve the perfect result."
  },
  {
    question: "What's included in the free plan?",
    answer: "The free plan includes 3 banner generations per month, standard resolution downloads, and access to our basic AI prompts. It's perfect for trying out the service and creating a few banners for personal use."
  },
  {
    question: "Are there any usage restrictions?",
    answer: "Generated banners are yours to use commercially. We follow OpenAI's usage policies for DALL·E, which means no illegal, harmful, or misleading content. All banners must comply with social media platform guidelines."
  },
  {
    question: "How long does it take to generate a banner?",
    answer: "Most banners are generated within 10-30 seconds. Processing time may vary based on complexity and current system load. We'll show you a progress indicator during generation."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not completely satisfied with the service, contact our support team for a full refund within 30 days of purchase."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take data security seriously. All user data is encrypted in transit and at rest. We don't store your generated banners permanently and don't share your prompts or images with third parties."
  },
  {
    question: "Do you offer team or enterprise plans?",
    answer: "Yes! We offer team plans with shared credits, brand guidelines, and collaboration features. Enterprise plans include custom AI training, priority support, and advanced analytics. Contact us for custom pricing."
  }
];

// Generate FAQ structured data
const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="faq-heading">
      <Container>
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl font-bold text-white mb-4 lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Everything you need to know about BannerCraft AI. Can&apos;t find the answer you&apos;re looking for? 
              <a href="/support" className="text-blue-400 hover:text-blue-300 ml-1 underline">
                Contact our support team
              </a>
            </p>
          </header>
          
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-gray-800"
              >
                <AccordionTrigger className="text-left text-white hover:text-gray-300 py-6 text-lg font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pb-6 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
      
      <StructuredData 
        type="Article" 
        data={{ 
          structuredData: faqStructuredData 
        }} 
      />
    </section>
  );
}