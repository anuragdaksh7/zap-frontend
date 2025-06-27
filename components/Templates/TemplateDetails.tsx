import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface TemplateDetailsProps {
  templateName: string;
  setTemplateName: (value: string) => void;
  subject: string;
  setSubject: (value: string) => void;
  body: string;
  setBody: (value: string) => void;
}

export function TemplateDetails({
  templateName,
  setTemplateName,
  subject,
  setSubject,
  body,
  setBody,
}: TemplateDetailsProps) {
  return (
    <Card className="border-gray-200 shadow-sm">
      <CardHeader className="border-b border-gray-100 bg-white">
        <CardTitle className="text-xl text-charcoal">
          Template Details
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {/* Template Name */}
        <div className="space-y-2">
          <Label htmlFor="templateName" className="text-charcoal font-medium">
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
            You can use variables like name, email, company in your template using double curly braces.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
