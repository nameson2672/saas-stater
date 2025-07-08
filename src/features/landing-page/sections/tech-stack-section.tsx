"use client"

import Image from 'next/image';
import Link from 'next/link';
import { Cloud,Code, Database, ExternalLink, Globe, Shield, Zap } from 'lucide-react';

import { Container } from '@/components/layout';
import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
import { Card, CardContent } from '@/components/ui';
import { Separator } from '@/components/ui';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

const techStack = {
  "AI & Generation": [
    {
      name: "OpenAI DALL·E",
      description: "State-of-the-art image generation AI",
      logo: "/logos/openai.svg",
      category: "AI Generation",
      website: "https://openai.com/dall-e",
      features: ["High-quality images", "Natural language prompts", "Style consistency"]
    },
    {
      name: "GPT-4",
      description: "Advanced language model for smart prompting",
      logo: "/logos/gpt4.svg",
      category: "AI Language",
      website: "https://openai.com/gpt-4",
      features: ["Prompt optimization", "Content generation", "Natural language understanding"]
    },
    {
      name: "Stable Diffusion",
      description: "Open-source image generation model",
      logo: "/logos/stability.svg",
      category: "AI Generation",
      website: "https://stability.ai",
      features: ["Custom models", "Fast generation", "Cost-effective"]
    }
  ],
  "Frontend & UI": [
    {
      name: "Next.js 14",
      description: "React framework for production applications",
      logo: "/logos/nextjs.svg",
      category: "Framework",
      website: "https://nextjs.org",
      features: ["Server-side rendering", "Static generation", "API routes"]
    },
    {
      name: "Radix UI",
      description: "Accessible component primitives",
      logo: "/logos/radix.svg",
      category: "UI Library",
      website: "https://radix-ui.com",
      features: ["Accessibility-first", "Unstyled components", "Keyboard navigation"]
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS framework",
      logo: "/logos/tailwind.svg",
      category: "Styling",
      website: "https://tailwindcss.com",
      features: ["Utility classes", "Responsive design", "Dark mode support"]
    },
    {
      name: "Framer Motion",
      description: "Motion library for React",
      logo: "/logos/framer.svg",
      category: "Animation",
      website: "https://framer.com/motion",
      features: ["Smooth animations", "Gesture support", "Layout animations"]
    }
  ],
  "Backend & Database": [
    {
      name: "Supabase",
      description: "Open-source Firebase alternative",
      logo: "/logos/supabase.svg",
      category: "Backend",
      website: "https://supabase.com",
      features: ["PostgreSQL database", "Real-time subscriptions", "Authentication"]
    },
    {
      name: "Stripe",
      description: "Payment processing platform",
      logo: "/logos/stripe.svg",
      category: "Payments",
      website: "https://stripe.com",
      features: ["Secure payments", "Subscription billing", "Global coverage"]
    },
    {
      name: "Resend",
      description: "Email API for developers",
      logo: "/logos/resend.svg",
      category: "Email",
      website: "https://resend.com",
      features: ["Transactional emails", "Email templates", "Analytics"]
    }
  ],
  "Infrastructure": [
    {
      name: "Vercel",
      description: "Deployment platform for modern apps",
      logo: "/logos/vercel.svg",
      category: "Hosting",
      website: "https://vercel.com",
      features: ["Edge network", "Automatic scaling", "CI/CD integration"]
    },
    {
      name: "Cloudflare",
      description: "Web infrastructure and security",
      logo: "/logos/cloudflare.svg",
      category: "CDN",
      website: "https://cloudflare.com",
      features: ["Global CDN", "DDoS protection", "Web optimization"]
    },
    {
      name: "AWS S3",
      description: "Object storage service",
      logo: "/logos/aws.svg",
      category: "Storage",
      website: "https://aws.amazon.com/s3",
      features: ["Scalable storage", "High availability", "Security"]
    }
  ]
};

const categoryIcons = {
  "AI & Generation": <Zap className="w-5 h-5" />,
  "Frontend & UI": <Code className="w-5 h-5" />,
  "Backend & Database": <Database className="w-5 h-5" />,
  "Infrastructure": <Cloud className="w-5 h-5" />
};

const categoryColors = {
  "AI & Generation": "bg-purple-600",
  "Frontend & UI": "bg-blue-600",
  "Backend & Database": "bg-green-600",
  "Infrastructure": "bg-orange-600"
};

function TechCard({ tech }: { tech: any }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-200 hover:shadow-lg cursor-pointer group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                  <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-900">
                      {tech.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-white group-hover:text-gray-100">
                      {tech.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {tech.category}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                    {tech.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Link 
                      href={tech.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1"
                    >
                      Learn more <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-xs">
          <div className="space-y-2">
            <p className="font-medium">{tech.name}</p>
            <ul className="text-sm space-y-1">
              {tech.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center gap-1">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function TechStackSection() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="tech-stack-heading">
      <Container>
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Powered By
            </Badge>
            <h2 id="tech-stack-heading" className="text-3xl font-bold text-white mb-4 lg:text-4xl">
              Built with cutting-edge technology
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              BannerCraft AI leverages the latest in AI, web technologies, and cloud infrastructure 
              to deliver fast, reliable, and scalable banner generation.
            </p>
          </header>

          <div className="space-y-12">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${categoryColors[category as keyof typeof categoryColors]}`}>
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category}
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technologies.map((tech, index) => (
                    <TechCard key={index} tech={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Separator className="my-16" />

          <div className="text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="font-semibold text-white">99.9% Uptime</h4>
                <p className="text-gray-400 text-sm">Enterprise-grade reliability</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="font-semibold text-white">Lightning Fast</h4>
                <p className="text-gray-400 text-sm">Sub-30 second generation</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Globe className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="font-semibold text-white">Global CDN</h4>
                <p className="text-gray-400 text-sm">Worldwide coverage</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Code className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-semibold text-white">API First</h4>
                <p className="text-gray-400 text-sm">Programmatic access</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Ready to experience the power?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Join thousands of developers and creators who trust BannerCraft AI 
                for their banner generation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/signup">
                    Start Building
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/api-docs">
                    API Documentation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}