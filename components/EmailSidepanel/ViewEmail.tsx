import React from "react";
import { Paperclip } from "lucide-react";

const email = {
  subject: "Exciting Product Update for Your Team",
  body: `Hi John,

I hope this message finds you well. I wanted to reach out regarding our latest product update, which I believe could be a great fit for your team. Please let me know if you’d like to schedule a quick call to discuss further.
I hope this message finds you well. I wanted to reach out regarding our latest product update, which I believe could be a great fit for your team. Please let me know if you’d like to schedule a quick call to discuss further.
I hope this message finds you well. I wanted to reach out regarding our latest product update, which I believe could be a great fit for your team. Please let me know if you’d like to schedule a quick call to discuss further.
I hope this message finds you well. I wanted to reach out regarding our latest product update, which I believe could be a great fit for your team. Please let me know if you’d like to schedule a quick call to discuss further.

Best regards,
Alice`,
  attachments: [
    "https://example.com/files/product-brochure.pdf",
    "https://example.com/files/demo-video.mp4",
  ],
};

const getFileName = (url: string) => {
  try {
    return decodeURIComponent(url.split("/").pop() || url);
  } catch {
    return url;
  }
};

const ViewEmail = () => {
  return (
    <div className="w-full h-full bg-white border border-gray-300 rounded-lg flex flex-col">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <h2 className="font-medium text-xl text-foreground">
          <span className="font-semibold text-foreground mr-2">Subject:</span>
          {email.subject}
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-4 whitespace-pre-line text-[1rem] text-foreground overflow-auto">
        {email.body}
      </div>
      {email.attachments.length > 0 && (
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
          <h3 className="font-semibold mb-2">Attachments</h3>
            <ul className="space-y-1">
              {email.attachments.map((attachment, index) => (
                <li key={index}>
                  <a
                    href={attachment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <Paperclip className="w-4 h-4" />
                    {getFileName(attachment)}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      )}
    </div>
  );
};

export default ViewEmail;
