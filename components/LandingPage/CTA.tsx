import { Button } from "../ui/button";

const CTA = () => {
  return (
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
  )
}

export default CTA