"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Trash2, Target, Calendar } from "lucide-react";

interface Template {
  id: string;
  name: string;
  subject: string;
  createdDate: string;
  campaignsUsed: number;
}

interface TemplateCardProps {
  template: Template;
  onDelete: (id: string) => void;
  getTemplateColor: (campaignsUsed: number) => string;
  dateFormat: (dateString: string) => string;
}

export function TemplateCard({
  template,
  onDelete,
  getTemplateColor,
  dateFormat,
}: TemplateCardProps) {
  return (
    <Card className="border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.02] group relative overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg text-charcoal group-hover:text-cta transition-colors min-h-[3rem] line-clamp-2">
            {template.name}
          </CardTitle>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {/* <Link href={`/user/templates/${template.id}/edit`}>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 hover:bg-cta hover:text-white"
              >
                <Edit className="w-4 h-4" />
              </Button>
            </Link> */}
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:rounded hover:bg-red-100 hover:text-red-700 hover:bg-red-200 transition"
              onClick={() => onDelete(template.id)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Usage */}
        <div className="flex items-center gap-3">
          <Target className="w-4 h-4 text-medium-gray flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-charcoal mb-1">
              Campaign Usage
            </p>
            <Badge
              variant="outline"
              className={`text-xs ${getTemplateColor(template.campaignsUsed)}`}
            >
              {template.campaignsUsed} campaigns
            </Badge>
          </div>
        </div>

        {/* Created Date */}
        <div className="flex items-center gap-3">
          <Calendar className="w-4 h-4 text-medium-gray flex-shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-medium text-charcoal mb-1">Created</p>
            <p className="text-xs text-medium-gray">
              {dateFormat(template.createdDate)}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <Link href={`/user/templates/${template.id}/edit`} className="block">
          <Button
            variant="outline"
            className="w-full mt-4 border-gray-300 hover:border-cta hover:text-cta hover:bg-cta/5"
          >
            <Edit className="w-4 h-4 mr-2" />
            Edit Template
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
