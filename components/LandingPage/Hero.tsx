'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Play, TrendingUp, Target, MessageSquare } from 'lucide-react';
import Link from 'next/link';


const Hero = () => {
      const [email, setEmail] = useState("");
    
      const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email submitted:", email);
        // Handle email submission
      };
  return (
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
                  className="btn-1 "
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Link href="/user/dashboard">
  <Button
    variant="outline"
    size="lg"
    className="btn-2"
  >
    <Play className="w-5 h-5 mr-2" />
    Watch Demo
  </Button>
</Link>
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
                    className="bg-accent hover:bg-accent-hover text-foreground"
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

                <div className="absolute -bottom-4 -right-4 bg-accent text-foreground p-3 rounded-lg shadow-lg">
                  <div className="text-xs opacity-80">Leads Generated</div>
                  <div className="text-lg font-bold">1,247</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero