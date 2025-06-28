"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const SAMPLE_EMAIL = `
Hi John,

I hope this message finds you well. I wanted to reach out regarding our latest product update, which I believe could be a great fit for your team. Please let me know if you’d like to schedule a quick call to discuss further.

Best regards,
Alice
`;

export const CreateTemplateDialog = ({
  dialogLabel = "+ Create Template",
  icon,
}: {
  dialogLabel?: string;
  icon?: React.ReactNode; 
}) => {
  const [formData, setFormData] = useState({
    senderName: "",
    subject: "",
    prompt: "",
  });
  const [showSample, setShowSample] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Save logic here (e.g., API call)
    console.log("Saved data:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="btn-hollow"
        >
          {icon}
          {dialogLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl bg-background p-6 rounded-xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-foreground mb-2">
            {showSample ? " Sample Email" : " Create Email Template"}
          </DialogTitle>
        </DialogHeader>

        {!showSample ? (
          <div className="flex flex-col gap-5 mt-2">
            <div className="flex gap-4">
              <input
                type="text"
                name="senderName"
                value={formData.senderName}
                onChange={handleChange}
                placeholder="Sender name"
                className="flex-1 p-3 border border-border rounded-md text-base bg-muted/50 placeholder-muted-foreground focus:outline-cta"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="flex-1 p-3 border border-border rounded-md text-base bg-muted/50 placeholder-muted-foreground focus:outline-cta"
              />
            </div>

            <textarea
              name="prompt"
              value={formData.prompt}
              onChange={handleChange}
              placeholder="Add writing instructions, tone, and details..."
              className="w-full h-40 p-3 border border-border rounded-md text-base bg-muted/50 placeholder-muted-foreground resize-none focus:outline-cta"
            />

            <div className="flex justify-center gap-4 pt-4">
              <Button
                variant="outline"
                className="btn-hollow"
                onClick={() => setShowSample(true)}
              >
                 View Sample
              </Button>
              <Button className="btn-fill" onClick={handleSave}>
                 Save Template
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-5 mt-4">
            <div className="bg-muted border border-border rounded-md p-4 text-sm text-foreground whitespace-pre-line min-h-[200px]">
              {SAMPLE_EMAIL}
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <Button
                variant="outline"
                className="btn-hollow"
                onClick={() => setShowSample(false)}
              >
                Edit Prompt
              </Button>
              <Button className="btn-fill" onClick={handleSave}>
                Save Template
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
