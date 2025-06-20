import { Zap, Shield, Target } from "lucide-react";

export const features = [
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

export const steps = [
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

export const testimonials = [
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

export const faqs = [
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