'use client';
import React, { useState } from "react";
import { Textarea } from "../ui/textarea";

const initialEmail = {
  subject: "Exciting Product Update for Your Team",
  body: `Hi John,

I hope this message finds you well. I wanted to reach out regarding our latest product update, which I believe could be a great fit for your team. Please let me know if you’d like to schedule a quick call to discuss further.

Best regards,
Alice`
};

const ResponseEmail = () => {
  const [email, setEmail] = useState(initialEmail);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail({ ...email, [e.target.name]: e.target.value });
    // hsfdjsf
    console.log(email);
  };

  return (
    <div className="w-full flex-1 bg-white border border-gray-300 rounded-lg flex flex-col overflow-y-auto">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <input
          type="text"
          name="subject"
          value={email.subject}
          onChange={handleChange}
          className="w-full font-bold text-xl text-foreground bg-transparent outline-none"
        />
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <Textarea
          name="body"
          value={email.body}
          onChange={handleChange}
          className="w-full h-[25rem] resize-none text-[1rem] text-foreground bg-transparent outline-none"
        />
      </div>
    </div>
  );
};

export default ResponseEmail;