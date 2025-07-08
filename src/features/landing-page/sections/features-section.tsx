"use client"

import Image from 'next/image';
import Link from 'next/link';
import { 
  Brain,
  Clock,
  Download,
  Globe,
  Palette, 
  Rocket,
  Settings,
  Shield, 
  Sparkles, 
  Star,
  Users, 
  Zap} from 'lucide-react';

import { Container } from '@/components/layout';
import { Badge } from '@/components/ui';
import { Button } from '@/components/ui';
import { Separator } from '@/components/ui';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui';

const featuresData = {
  "ai-powered": {
    title: "AI-Powered Generation",
    description: "Leverage cutting-edge AI technology to create stunning banners",
    icon: <Brain className="w-6 h-6" />,
    features: [
      {
        icon: <Sparkles className="w-5 h-5" />,
        title: "DALL·E Integration",
        description: "Powered by OpenAI's DALL·E for photorealistic banner generation"
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Lightning Fast",
        description: "Generate professional banners in under 30 seconds"
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: "Smart Prompting",
        description: "Advanced prompt engineering for optimal results"
      },
      {
        icon: <Clock className="w-5 h-5" />,
        title: "Batch Processing",
        description: "Generate multiple variations simultaneously"
      }
    ],
    cta: {
      primary: "Try AI Generation",
      secondary: "View Examples"
    }
  },
  "customization": {
    title: "Advanced Customization",
    description: "Fine-tune every aspect of your banner design",
    icon: <Palette className="w-6 h-6" />,
    features: [
      {
        icon: <Palette className="w-5 h-5" />,
        title: "Brand Colors",
        description: "Apply your brand colors and maintain consistency"
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: "Style Controls",
        description: "Adjust typography, spacing, and layout elements"
      },
      {
        icon: <Download className="w-5 h-5" />,
        title: "Multiple Formats",
        description: "Export in various sizes and formats (PNG, JPG, SVG)"
      },
      {
        icon: <Star className="w-5 h-5" />,
        title: "Template Library",
        description: "Choose from hundreds of professional templates"
      }
    ],
    cta: {
      primary: "Explore Customization",
      secondary: "Browse Templates"
    }
  },
  "collaboration": {
    title: "Team Collaboration",
    description: "Work seamlessly with your team on banner projects",
    icon: <Users className="w-6 h-6" />,
    features: [
      {
        icon: <Users className="w-5 h-5" />,
        title: "Team Workspaces",
        description: "Shared spaces for team projects and assets"
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Real-time Sync",
        description: "Collaborate in real-time with team members"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Permission Controls",
        description: "Granular permissions for different team roles"
      },
      {
        icon: <Rocket className="w-5 h-5" />,
        title: "Version History",
        description: "Track changes and revert to previous versions"
      }
    ],
    cta: {
      primary: "Start Collaborating",
      secondary: "Team Features"
    }
  },
  "enterprise": {
    title: "Enterprise Ready",
    description: "Scale your banner creation with enterprise features",
    icon: <Shield className="w-6 h-6" />,
    features: [
      {
        icon: <Shield className="w-5 h-5" />,
        title: "SSO Integration",
        description: "Single sign-on with your existing identity provider"
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: "API Access",
        description: "Programmatic access to banner generation"
      },
      {
        icon: <Globe className="w-5 h-5" />,
        title: "Custom Branding",
        description: "White-label the platform with your branding"
      },
      {
        icon: <Rocket className="w-5 h-5" />,
        title: "Priority Support",
        description: "24/7 dedicated support for enterprise customers"
      }
    ],
    cta: {
      primary: "Contact Sales",
      secondary: "Enterprise Guide"
    }
  }
};

export function FeaturesSection() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="features-heading">
      <Container>
        <div className="max-w-6xl mx-auto">
          <header className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Powerful Features
            </Badge>
            <h2 id="features-heading" className="text-3xl font-bold text-white mb-4 lg:text-4xl">
              Everything you need to create stunning banners
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              From AI-powered generation to enterprise-grade collaboration, 
              BannerCraft AI provides all the tools you need to scale your visual content creation.
            </p>
          </header>

          <Tabs defaultValue="ai-powered" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-gray-900 border border-gray-800">
              {Object.entries(featuresData).map(([key, feature]) => (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="flex flex-col items-center gap-2 py-4 px-6 text-sm data-[state=active]:bg-gray-800 data-[state=active]:text-white"
                >
                  {feature.icon}
                  <span className="font-medium">{feature.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(featuresData).map(([key, feature]) => (
              <TabsContent key={key} value={key} className="mt-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-600 rounded-lg">
                          {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-lg">
                        {feature.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      {feature.features.map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-gray-900 rounded-lg border border-gray-800">
                          <div className="p-1 bg-blue-600 rounded">
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white mb-1">
                              {item.title}
                            </h4>
                            <p className="text-gray-400 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild className="flex-1">
                        <Link href="/signup">
                          {feature.cta.primary}
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1">
                        <Link href="/features">
                          {feature.cta.secondary}
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 flex items-center justify-center">
                      <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-yellow-900" />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Separator className="my-16" />

          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to transform your banner creation?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators, marketers, and businesses who are already creating 
              stunning banners with BannerCraft AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/signup">
                  Start Creating Banners
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/demo">
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}