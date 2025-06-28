"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Mail, CopyPlus } from "lucide-react";
import { templateList } from "@/lib/data/templatesData";
import { TemplatesDialog } from "@/components/Templates/TemplatesDialogBox";
import { TemplateCard } from "@/components/Templates/TemplatesCard";
import { CreateTemplateDialog } from "@/components/CreateTemplate";

export default function TemplatesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [templates, setTemplates] = useState(templateList);

  const filterTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleDelete = (id: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this template?"
    );
    if (confirm) {
      setTemplates((prev) => prev.filter((template) => template.id !== id));
    }
  };

  const getTemplateColor = (campaignsUsed: number) => {
    if (campaignsUsed >= 10)
      return "bg-accent/20 text-accent-foreground border-accent/30";
    if (campaignsUsed >= 5) return "bg-cta/20 text-cta border-cta/30";
    return "bg-warning/20 text-orange-700 border-warning/30";
  };

  return (
    <div className="min-h-screen w-full bg-anti-flash-white overflow-x-hidden">
      <main className="flex-1 w-full h-screen flex flex-col">
        <header className="w-full bg-white text-foreground border-b-[1px] px-6 pt-1 h-[10vh] flex-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-charcoal">Templates</h1>
            <p className="text-medium-gray">
              Create, manage and organize your email templates
            </p>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="w-full px-4 md:px-6 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-medium-gray" />
                <Input
                  placeholder="Search templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-cta focus:ring-cta"
                />
              </div>
              <CreateTemplateDialog dialogLabel="Create New template" icon={<CopyPlus className="w-4 h-4 mr-2"/>}/>
            </div>

            {/* Templates Grid */}
            {filterTemplates.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filterTemplates.map((template) => (
                  <TemplateCard
                    key={template.id}
                    template={template}
                    onDelete={handleDelete}
                    getTemplateColor={getTemplateColor}
                    dateFormat={dateFormat}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-medium-gray" />
                </div>
                <h3 className="text-lg font-medium text-charcoal mb-2">
                  No templates found
                </h3>
                <p className="text-medium-gray mb-6">
                  {searchTerm
                    ? "No templates match your search criteria."
                    : "Get started by creating your first email template."}
                </p>
                {!searchTerm && (
                  <Button className="bg-cta hover:bg-cta-hover text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Template
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
