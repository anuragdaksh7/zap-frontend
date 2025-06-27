"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  Edit,
  Calendar,
  Mail,
  Target,
  Trash2,
} from "lucide-react";
import { templateList } from "@/lib/data/templatesData";

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
      <main className="flex-1 w-full ">
        <header className="w-full bg-white text-foreground border-b-[1px] px-6 pt-1 h-[10vh] flex-between">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-charcoal">Templates</h1>
            <p className="text-medium-gray">
              Create, manage and organize your email templates
            </p>
          </div>
        </header>

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
            <Button className="bg-cta hover:bg-cta-hover text-white w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              New Template
            </Button>
          </div>

          {/* Templates Grid */}
          {filterTemplates.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterTemplates.map((template) => (
                <Card
                  key={template.id}
                  className="border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden"
                >
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-charcoal group-hover:text-cta transition-colors  min-h-[3rem] line-clamp-2">
                        {template.name}
                      </CardTitle>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {/* edit template */}
                        <Link href={`/user/templates/${template.id}/edit`}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 w-8 p-0 hover:bg-cta hover:text-white"
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                        </Link>
                        {/* delete template */}
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-red-500 hover:text-white"
                          onClick={() => handleDelete(template.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Usage Stats */}
                    <div className="flex items-center gap-3">
                      <Target className="w-4 h-4 text-medium-gray flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-charcoal mb-1">
                          Campaign Usage
                        </p>
                        <Badge
                          variant="outline"
                          className={`text-xs ${getTemplateColor(
                            template.campaignsUsed
                          )}`}
                        >
                          {template.campaignsUsed} campaigns
                        </Badge>
                      </div>
                    </div>

                    {/* Created Date */}
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-medium-gray flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-charcoal mb-1">
                          Created
                        </p>
                        <p className="text-xs text-medium-gray">
                          {dateFormat(template.createdDate)}
                        </p>
                      </div>
                    </div>

                    {/* Edit Button */}
                    <Link
                      href={`/user/templates/${template.id}/edit`}
                      className="block"
                    >
                      <Button
                        variant="outline"
                        className="w-full mt-4 border-gray-300 hover:border-cta hover:text-cta hover:bg-cta/5 group-hover:hidden"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Template
                      </Button>
                    </Link>
                  </CardContent>

                  {/* Subject animation */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cta via-cta to-transparent text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium opacity-90">
                          Subject
                        </p>
                        <p className="text-sm font-semibold line-clamp-3">
                          {template.subject}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
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
      </main>
    </div>
  );
}