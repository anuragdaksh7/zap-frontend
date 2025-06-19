"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Zap,
  Target,
  Shield,
  Users,
  BarChart3,
  Play,
  Check,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Handle email submission
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cta" />,
      title: "Smart Email Throttling",
      description:
        "AI-powered delivery optimization prevents spam flags while maximizing inbox placement rates.",
    },
    {
      icon: <Target className="w-8 h-8 text-cta" />,
      title: "LinkedIn Enrichment",
      description:
        "Automatically enrich prospects with LinkedIn data for hyper-personalized outreach campaigns.",
    },
    {
      icon: <Shield className="w-8 h-8 text-cta" />,
      title: "Unsubscribe Logic",
      description:
        "Built-in compliance tools handle unsubscribes automatically to maintain sender reputation.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Import Your Leads",
      description:
        "Upload your prospect list or connect your CRM to sync contacts automatically.",
    },
    {
      number: "02",
      title: "Personalize at Scale",
      description:
        "AI crafts personalized messages using LinkedIn data and custom variables.",
    },
    {
      number: "03",
      title: "Track & Optimize",
      description:
        "Monitor open rates, replies, and conversions with real-time analytics.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Growth Manager at TechStart",
      content:
        "ZapMail increased our email response rates by 340% in just 2 months. The AI personalization is incredible.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Freelance Marketing Consultant",
      content:
        "Finally, an email tool that doesn't get me flagged as spam. My deliverability went from 60% to 94%.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Agency Owner",
      content:
        "The LinkedIn enrichment feature saves me 10+ hours per week. ROI was positive within the first month.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "How does ZapMail prevent emails from going to spam?",
      answer:
        "Our AI analyzes sending patterns, content, and recipient engagement to optimize delivery timing and throttling. We also provide built-in spam testing and reputation monitoring.",
    },
    {
      question: "Can I integrate ZapMail with my existing CRM?",
      answer:
        "Yes! ZapMail integrates with popular CRMs like HubSpot, Salesforce, Pipedrive, and more. You can also import/export data via CSV.",
    },
    {
      question: "What's included in the free trial?",
      answer:
        "The 14-day free trial includes access to all features: 1,000 email sends, LinkedIn enrichment, AI personalization, and analytics dashboard.",
    },
    {
      question: "How accurate is the LinkedIn enrichment?",
      answer:
        "Our LinkedIn enrichment has a 92% accuracy rate, providing verified professional data including job titles, company info, and recent activity.",
    },
    {
      question: "Is there a setup fee or long-term contract?",
      answer:
        "No setup fees and no long-term contracts. Start with our free trial and upgrade to monthly or annual plans with flexible cancellation.",
    },
  ];

  return (
    <div className="min-h-screen bg-background 	font-work-sans">
      {/* Header/Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cta rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">ZapMail</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-primary hover:text-cta transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-primary hover:text-cta transition-colors"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-primary hover:text-cta transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-primary hover:text-cta transition-colors"
              >
                FAQ
              </a>
            </nav>
            <Button className="bg-cta hover:bg-ctaHover text-foreground">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Text Content */}
            <div className="flex-1 lg:pr-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span className="text-primary">AI-Powered</span>{" "}
                <span className="text-cta">Email That Never Hits Spam</span>
              </h1>
              <p className="text-xl 	text-muted-foreground mb-8 leading-relaxed">
                Send personalized emails at scale, track engagement, and
                automate lead generation without getting flagged. Built for
                startups, freelancers, and agencies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-cta hover:bg-ctaHover text-foreground px-8 py-4 text-lg"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-cta text-cta hover:bg-cta hover:text-foreground px-8 py-4 text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              {/* Email Capture Form */}
              <form onSubmit={handleEmailSubmit} className="max-w-md">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email for early access"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-accent hover:opacity-90 text-foreground"
                  >
                    Get Access
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Side - Interactive Design */}
            <div className="flex-1 lg:pl-8">
              <div className="relative">
                {/* Main Dashboard Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-warning rounded-full"></div>
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between px-4 py-3 bg-background rounded-md">
                      <div className="flex items-center gap-3">
                        <MessageSquare className="w-5 h-5 text-cta" />
                        <span className="text-sm font-medium text-primary">
                          Campaign: Tech Leads Q4
                        </span>
                      </div>
                      <span className="text-sm text-chart-2 font-medium">
                        94% Delivered
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-3 bg-background rounded-md">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-cta" />
                        <span className="text-sm font-medium text-primary">
                          Open Rate
                        </span>
                      </div>
                      <span className="text-sm text-chart-2 font-medium">
                        68%
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-4 py-3 bg-background rounded-md">
                      <div className="flex items-center gap-3">
                        <Target className="w-5 h-5 text-cta" />
                        <span className="text-sm font-medium text-primary">
                          Reply Rate
                        </span>
                      </div>
                      <span className="text-sm text-chart-2 font-medium">
                        23%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <div className="absolute -top-4 -left-4 bg-cta text-white p-3 rounded-lg shadow-lg animate-pulse">
                  <div className="text-xs opacity-80">Active Campaigns</div>
                  <div className="text-lg font-bold">12</div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-accent 	text-foreground p-3 rounded-lg shadow-lg">
                  <div className="text-xs opacity-80">Leads Generated</div>
                  <div className="text-lg font-bold">1,247</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Powerful Features That Drive Results
            </h2>
            <p className="text-xl 	text-muted-foreground max-w-2xl mx-auto">
              Everything you need to scale your email outreach without the spam
              flags
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow border-2 hover:border-accent"
              >
                <CardContent className="text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="	text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl 	text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cta text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="	text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Trusted by Growing Teams
            </h2>
            <p className="text-xl 	text-muted-foreground max-w-2xl mx-auto">
              See how ZapMail is helping businesses scale their outreach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-warning fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm 	text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl 	text-muted-foreground">
              Everything you need to know about ZapMail
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left hover:bg-muted transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-primary">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-cta" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cta" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="	text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Scale Your Email Outreach?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of businesses using ZapMail to grow their revenue
            through smarter email automation
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              className="bg-cta hover:bg-ctaHover text-foreground px-8 py-4 text-lg"
            >
              Start Your Free Trial
            </Button>
            <p className="text-sm opacity-75">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Updated Footer */}
      <footer className="bg-background py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-cta rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <span className="text-xl font-bold text-primary">ZapMail</span>
              </div>
              <p className="	text-muted-foreground mb-4 max-w-md">
                AI-powered email automation that helps startups and sales teams
                scale their outreach without getting flagged.
              </p>
              <a
                href="mailto:hello@zapmail.ai"
                className="text-primary font-medium hover:text-cta transition-colors"
              >
                hello@zapmail.ai
              </a>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-primary font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="	text-muted-foreground hover:text-cta transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="	text-muted-foreground hover:text-cta transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="	text-muted-foreground hover:text-cta transition-colors"
                  >
                    Demo
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="	text-muted-foreground hover:text-cta transition-colors"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-primary font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="	text-muted-foreground hover:text-cta transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="	text-muted-foreground hover:text-cta transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="	text-muted-foreground hover:text-cta transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="	text-muted-foreground hover:text-cta transition-colors"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center">
            <p className="	text-muted-foreground">
              © 2025 ZapMail. All rights reserved. Built for founders, by
              founders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
