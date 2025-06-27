export interface Template {
  id: string;
  name: string;
  subject: string;
  body: string;
  campaignsUsed: number;
  createdDate: string;
}

// Shared mock template data
export const mockTemplateData: Record<string, Template> = {
 "1": {
    id: "1",
    name: "Welcome Email",
    subject: "Welcome to our platform!",
    body: `Dear {{name}},

Welcome to our amazing platform! We're thrilled to have you on board.

Here's what you can expect:
• Access to exclusive features
• 24/7 customer support
• Regular updates and improvements

Get started by exploring your dashboard and don't hesitate to reach out if you need any help.

Best regards,
The Team`,
    campaignsUsed: 5,
    createdDate: "2024-01-15"
  },
  "2": {
    id: "2",
    name: "Product Launch",
    subject: "Exciting new product launch!",
    body: `Hi {{name}},

We're excited to announce the launch of our newest product!

This game-changing solution will help you:
• Increase productivity by 50%
• Streamline your workflow
• Save time and resources

Be among the first to try it out with our exclusive early access program.

Best regards,
Product Team`,
    campaignsUsed: 3,
    createdDate: "2024-02-20"
  },
  "3": {
  id: "3",
  name: "Abandoned Cart Reminder",
  subject: "You left something in your cart 🛒",
  body: `Hello {{name}},

We noticed you left a few items in your cart.

Complete your purchase today and enjoy:
• Free shipping on orders over $50
• 10% off your next order with code WELCOME10

Your cart is waiting for you!

Cheers,
The Sales Team`,
  campaignsUsed: 7,
  createdDate: "2024-03-12"
},
"4": {
  id: "4",
  name: "Event Invitation",
  subject: "You're Invited: Annual Customer Appreciation Event",
  body: `Hi {{name}},

We are thrilled to invite you to our Annual Customer Appreciation Event!

Join us for:
• Networking opportunities
• Exclusive product previews
• Refreshments and giveaways

📅 Date: June 25th
📍 Location: Grand Ballroom, City Center

Reserve your spot today!

Warm regards,
Event Coordinator`,
  campaignsUsed: 4,
  createdDate: "2024-04-05"
},
"5": {
  id: "5",
  name: "Feedback Request",
  subject: "Share your thoughts with us,Share your thoughts with us,Share your thoughts with us, Share your thoughts with us, Share your thoughts with us, Share your thoughts with us,Share your thoughts with us",
  body: `Dear {{name}},

Your opinion matters!

We'd love to hear your feedback about your recent experience with us.

Please take a moment to fill out this quick survey:
[Take the Survey](#)

As a thank you, you'll receive a 15% discount on your next order.

Thank you for helping us improve!

Best,
Customer Success Team`,
  campaignsUsed: 6,
  createdDate: "2024-02-28"
},
"6": {
  id: "6",
  name: "Subscription Renewal Reminder",
  subject: "Your subscription is about to expire",
  body: `Hello {{name}},

We hope you've enjoyed using our services.

This is a friendly reminder that your subscription will expire on {{expiry_date}}.

Renew now to continue enjoying:
• Unlimited access to premium features
• Priority support
• Exclusive content

[Renew Subscription](#)

Thank you for choosing us!

Sincerely,
The Subscription Team`,
  campaignsUsed: 12,
  createdDate: "2024-03-20"
},
"7": {
  id: "7",
  name: "Follow-Up Email",
  subject: "Just checking in 😊",
  body: `Hi {{name}},

I wanted to follow up on my previous email to see if you had any questions.

If there's anything I can assist you with, please let me know!

Here to help,
[Your Name]
Customer Success Team`,
  campaignsUsed: 5,
  createdDate: "2024-04-10"
}
};

export const templateList = Object.values(mockTemplateData);
