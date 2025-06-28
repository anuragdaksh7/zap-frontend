"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Save, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { mockTemplateData } from "@/lib/data/templatesData";
import Link from "next/link";
import { TemplateDetails } from "@/components/Templates/TemplateDetails";
interface Template {
  id: string;
  name: string;
  sender: string;
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
  const [sender, setSender] = useState("");
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
      setSender(template.sender);
      setSubject(template.subject);
      setBody(template.body);
    }
  }, [id]);

  const handleSave = () => {
    console.log("Saving template:", {
      id,
      name: templateName,
      sender,
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
      <main className="flex-1 w-full h-screen flex flex-col">
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

        <div className="flex-1 overflow-y-auto">
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

                <Button onClick={handleSave} className="btn-fill">
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>

            {/* Template Form */}
            <TemplateDetails
              templateName={templateName}
              setTemplateName={setTemplateName}
              sender={sender}
              setSender={setSender}
              subject={subject}
              setSubject={setSubject}
              body={body}
              setBody={setBody}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
