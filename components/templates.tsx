"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, PlusCircle, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

interface Template {
  id: number;
  name: string;
  description: string;
  isUserCreated?: boolean;
  createdAt?: Date;
}

interface TemplatesDialogProps {
  buttonLabel?: string;
  icon?: React.ReactNode;
  variant?: "outline" | "default";
}

export function TemplatesDialog({
  buttonLabel = "Select Templates",
  icon,
  variant = "outline",
}: TemplatesDialogProps) {
  const [templates, setTemplates] = useState<Template[]>([
    { id: 1, name: "Template 1", description: "Description" },
    { id: 2, name: "Template 2", description: "Description" },
  ]);

  const [selectedTemplateIds, setSelectedTemplateIds] = useState<number[]>([]);

  const handleToggle = (id: number) => {
    setSelectedTemplateIds((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };

  const addNewTemplate = () => {
    const nextId = templates.length + 1;
    const newTemplate: Template = {
      id: nextId,
      name: `Template ${nextId}`,
      description: "New Created template will be added here",
      isUserCreated: true,
      createdAt: new Date(),
    };
    setTemplates((prev) => [...prev, newTemplate]);
  };

  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const deleteTemplate = (id: number) => {
    setTemplates((prev) => prev.filter((template) => template.id !== id));
    setSelectedTemplateIds((prev) => prev.filter((tid) => tid !== id));
  };

  useEffect(() => {
    const storedTemplates = localStorage.getItem("created-templates");
    const storedSelected = localStorage.getItem("selected-templates");

    if(storedTemplates) setTemplates(JSON.parse(storedTemplates));
    if(storedSelected) setSelectedTemplateIds(JSON.parse(storedSelected));
  }, []);

  useEffect(() => {
    localStorage.setItem("created-templates", JSON.stringify(templates));
    localStorage.setItem("selected-templates", JSON.stringify(selectedTemplateIds));
  }, [templates, selectedTemplateIds]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          className="border-cta bg-cta text-white hover:bg-ctaHover hover:text-white"
        >
          {icon}
          {buttonLabel}
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Choose Templates</DialogTitle>
          <DialogDescription>
            Select templates for your personalized emails. Click Done when
            you’re finished.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 max-h-[60vh] overflow-y-auto px-1">
          {templates.map((template) => {
            const isSelected = selectedTemplateIds.includes(template.id);
            return (
              <div
                key={template.id}
                onClick={() => handleToggle(template.id)}
                className={`relative border p-4 rounded-md cursor-pointer transition-all ${
                  isSelected ? "border-cta bg-cta/10" : "hover:bg-muted"
                }`}
              >
                {template.isUserCreated && template.createdAt && (
                  <p className="text-xs text-gray-500 italic pl-40 absolute top-5">
                    Created by you on {formatDate(new Date(template.createdAt))}
                  </p>
                )}
                {/* Tick Icon for selected */}
                {isSelected && (
                  <CheckCircle2 className="absolute top-2 left-2 text-cta w-5 h-5" />
                )}

                {/* Delete button for user-created */}
                {template.isUserCreated && (
                  <Trash2
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent toggle
                      deleteTemplate(template.id);
                    }}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 w-5 h-5 cursor-pointer"
                  />
                )}

                <h4 className="font-semibold pl-6">{template.name}</h4>
                <p className="text-muted-foreground text-sm pl-6">
                  {template.description || "No description"}
                </p>
              </div>
            );
          })}
        </div>

        <DialogFooter className="mt-4">
          <div className="flex justify-between w-full">
            <Button variant="outline" onClick={addNewTemplate}>
              <PlusCircle className="w-4 h-4 mr-2" />
              Create New Template
            </Button>

            <div className="flex gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button
                  className="bg-cta text-white hover:bg-ctaHover"
                  onClick={() =>
                    console.log("Selected Template IDs:", selectedTemplateIds)
                  }
                >
                  Done
                </Button>
              </DialogClose>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
