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
  dialogLabel = "Create Template",
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
          className="border-cta text-cta hover:bg-cta hover:text-white"
        >
          {icon}
          {dialogLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>
            {showSample ? "Sample Email" : "Create Email Template"}
          </DialogTitle>
        </DialogHeader>
        {!showSample ? (
          <div className="flex flex-col gap-6 mt-2">
            <div className="flex gap-4">
              <input
                type="text"
                name="senderName"
                value={formData.senderName}
                onChange={handleChange}
                placeholder="sender name"
                className="flex-1 p-4 bg-transparent border border-black rounded text-black placeholder-black text-lg"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="flex-1 p-4 bg-transparent border border-black rounded text-black placeholder-black text-lg"
              />
            </div>
            <textarea
              name="prompt"
              value={formData.prompt}
              onChange={handleChange}
              placeholder="add writing instructions and tone"
              className="w-full h-48 p-4 bg-transparent border border-black rounded text-black placeholder-black text-lg resize-none"
            />
            <div className="flex gap-4 justify-center mt-2">
              <Button
                type="button"
                className="border border-cta text-cta text-md hover:bg-cta hover:text-white"
                onClick={() => setShowSample(true)}
              >
                View sample email
              </Button>
              <Button type="button" className="btn-1" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6 mt-2">
            <div className="bg-gray-100 border border-black rounded p-4 text-black whitespace-pre-line min-h-[200px]">
              {SAMPLE_EMAIL}
            </div>
            <div className="flex gap-4 justify-center mt-2">
              <Button
                type="button"
                className="border border-cta text-cta text-md hover:bg-cta hover:text-white"
                onClick={() => setShowSample(false)}
              >
                Edit prompt
              </Button>
              <Button type="button" className="btn-1" onClick={handleSave}>
                Save
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};