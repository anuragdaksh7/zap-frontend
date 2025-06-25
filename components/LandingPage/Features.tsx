'use client';

import { Card, CardContent } from '@/components/ui/card';
import { features } from "./data";


const Features = () => {
  return (
    <section id="features" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  Powerful Features That Drive Results
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
  )
}

export default Features