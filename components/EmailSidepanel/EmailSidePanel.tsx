// components/EmailSidePanel.tsx

"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar } from "@radix-ui/react-avatar";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Inbox from "./Inbox";
import EditEmail from "./EditEmail";
import ViewEmail from "./ViewEmail";
import { Sparkles } from "lucide-react";

interface EmailSidePanelProps {
  trigger: React.ReactNode;
  rowData: {
    name: string;
    email: string;
  };
}

export function EmailSidePanel({ trigger, rowData }: EmailSidePanelProps) {
  const [activeTabs, setActiveTabs] = useState<string[]>(["inbox"]);
  const [activeTab, setActiveTab] = useState("inbox");
  const openTab = (type: "view" | "edit") => {
    const tabKey = type === "view" ? "view" : "edit";
    if (!activeTabs.includes(tabKey)) {
      setActiveTabs((prev) => [...prev, tabKey]);
    }
    setActiveTab(tabKey);
  };

  const closeTab = (key: string) => {
    setActiveTabs((prev) => prev.filter((tab) => tab !== key));
    if (activeTab === key) setActiveTab("inbox");
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent className="w-[600px] sm:max-w-none p-0 flex flex-col h-full gap-0">
        {/* Header of email box */}
        <SheetHeader>
          <SheetTitle className="flex flex-col justify-evenly bg-muted top-0">
            <div className="flex items-center gap-4 p-4 border-b bg-muted">
              <Avatar className="flex-center border bg-cta text-white w-10 h-10 rounded-full border">
                I
              </Avatar>
              <div className="flex flex-col">
                <span className="font-semibold">{rowData.name}</span>
                <span className="text-sm text-muted-foreground">
                  {rowData.email}
                </span>
              </div>
            </div>
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription> */}
        </SheetHeader>

        {/* content  */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="flex-1 overflow-hidden"
        >
          <TabsList className="rounded-bl-none rounded-tl-none">
            <TabsTrigger value="inbox">Inbox</TabsTrigger>

            {activeTabs.includes("view") && (
              <TabsTrigger
                value="view"
                className="flex items-center justify-between gap-1 pr-2"
              >
                <span>View Email</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab("view");
                  }}
                  className="text-red-500 hover:text-red-600 text-sm ml-1"
                >
                  ✕
                </button>
              </TabsTrigger>
            )}

            {activeTabs.includes("edit") && (
              <TabsTrigger
                value="edit"
                className="flex items-center justify-between gap-1 pr-2"
              >
                <span>Edit Email</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab("edit");
                  }}
                  className="text-red-500 hover:text-red-600 text-sm ml-1"
                >
                  ✕
                </button>
              </TabsTrigger>
            )}
          </TabsList>

          {/* Default Inbox */}
          <TabsContent
            value="inbox"
            className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-background"
          >
            <Inbox openTab={openTab} />
          </TabsContent>

          {/* Single Click View */}
          <TabsContent
            value="view"
            className="flex-1 overflow-y-auto px-4 py-2 bg-background"
          >
            {/* Replace this with view email box file*/}
            <ViewEmail /> 
          </TabsContent>

          {/* Double Click View */}
          <TabsContent
            value="edit"
            className="flex-1 overflow-y-auto px-4 py-2 bg-background"
          >
            {/* Replace this with edit email box file */}
            <EditEmail />
          </TabsContent>
        </Tabs>

        {/* send email input box */}
        <div className="px-6 py-4 border-t bg-white">
          <div className="flex items-center gap-2">
            <Input placeholder="Reply Here..." className="flex-1" />
            <Button
              variant="outline"
              size="icon"
              title="Generate AI Reply"
              onClick={() => openTab("edit")}
            >
              <Sparkles className="w-4 h-4" />
            </Button>
            <Button>Send</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
