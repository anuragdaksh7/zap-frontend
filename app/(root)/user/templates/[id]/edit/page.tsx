"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Save, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { mockTemplateData } from "@/lib/data/templatesData";
import Link from "next/link";
interface Template {
  id: string;
  name: string;
  subject: string;
  body: string;
  campaignsUsed: number;
  createdDate: string;
}

export default function EditTemplatePage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();

  const id = params?.id as string | undefined;

  const [templateName, setTemplateName] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [originalTemplate, setOriginalTemplate] = useState<Template | null>(
    null
  );

  useEffect(() => {
    if (id && mockTemplateData[id]) {
      const template = mockTemplateData[id];
      setOriginalTemplate(template);
      setTemplateName(template.name);
      setSubject(template.subject);
      setBody(template.body);
    }
  }, [id]);

  const handleSave = () => {
    console.log("Saving template:", {
      id,
      name: templateName,
      subject,
      body,
    });

    toast({
      title: "Template saved",
      description: "Your template has been updated successfully.",
    });

    router.push("/templates");
  };

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this template? This action cannot be undone."
      )
    ) {
      console.log("Deleting template:", id);

      toast({
        title: "Template deleted",
        description: "The template has been deleted successfully.",
        variant: "destructive",
      });

      router.push("/templates");
    }
  };

  const handleBack = () => {
    router.push("/templates");
  };

  if (!originalTemplate) {
    return (
      <div className="min-h-screen flex w-full bg-anti-flash-white">
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-medium-gray text-lg">
              Template not found.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-anti-flash-white overflow-x-hidden">
      <main className="flex-1 w-full ">
        <header className="w-full bg-white text-foreground border-b-[1px] px-6 pt-1 h-[10vh] flex-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-charcoal">Edit Template</h1>
            <p className=" text-sm text-foreground">
              Created on{" "}
              {new Date(originalTemplate.createdDate).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}{" "}
              • Used in {originalTemplate.campaignsUsed} campaigns
            </p>
          </div>
        </header>
         <div className="w-full px-4 md:px-6 py-2">
          <div className="flex justify-between items-center">
            <Link href={`/user/templates`} className="block">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="mb-4 text-medium-gray hover:text-charcoal hover:bg-muted"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Templates
              </Button>
            </Link>

            {/* Action Buttons */}
          <div className="flex justify-between items-center gap-2 mb-2">
            <Button
              variant="destructive"
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>

            <Button
              onClick={handleSave}
              className="bg-cta hover:bg-cta-hover text-white"
            >
              <Save className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
          </div>

          {/* Template Form */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader className="border-b border-gray-100 bg-white">
              <CardTitle className="text-xl text-charcoal">
                Template Details
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Template Name */}
              <div className="space-y-2">
                <Label
                  htmlFor="templateName"
                  className="text-charcoal font-medium"
                >
                  Template Name
                </Label>
                <Input
                  id="templateName"
                  value={templateName}
                  onChange={(e) => setTemplateName(e.target.value)}
                  placeholder="Enter template name"
                  className="border-gray-300 focus:border-cta focus:ring-cta"
                />
              </div>

              {/* Email Subject */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-charcoal font-medium">
                  Email Subject
                </Label>
                <Input
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter email subject"
                  className="border-gray-300 focus:border-cta focus:ring-cta"
                />
              </div>

              {/* Email Body */}
              <div className="space-y-2">
                <Label htmlFor="body" className="text-charcoal font-medium">
                  Email Body
                </Label>
                <Textarea
                  id="body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Enter email body content"
                  rows={12}
                  className="border-gray-300 focus:border-cta focus:ring-cta resize-none"
                />
                <p className="text-sm text-medium-gray">
                  You can use variables like name, email, company in your
                  template using double curly braces.
                </p>
              </div>
            </CardContent>
          </Card>

          
        </div>
      </main>
    </div>
  );
}
