"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@radix-ui/react-avatar";
import { useState } from "react";
import Inbox from "./Inbox";
import ViewEmail from "./ViewEmail";
import { Wand2, X } from "lucide-react";
import ResponseEmail from "./ResponseEmail";

interface EmailSidePanelProps {
  trigger: React.ReactNode;
  rowData: {
    name: string;
    email: string;
  };
}

interface Msg {
  id: number;
  text: string;
  sender: "me" | "them";
  timestamp: string;
}

export function EmailSidePanel({ trigger, rowData }: EmailSidePanelProps) {
  const [activeTabs, setActiveTabs] = useState<string[]>(["inbox"]);
  const [activeTab, setActiveTab] = useState("inbox");
  const [replyReference, setReplyReference] = useState<Msg | null>(null);
  const [prompt, setPrompt] = useState("");

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
      <SheetContent className="w-[37rem] sm:max-w-none p-0 flex flex-col h-full gap-0">
        {/* Header of email box */}
        <SheetHeader>
          <SheetTitle className="flex flex-col justify-evenly bg-muted top-0">
            <div className="flex items-center gap-4 p-4 border-b bg-muted">
              <Avatar className="flex-center border bg-cta text-white w-10 h-10 rounded-full">
                JD
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
          className="flex-1 overflow-auto"
        >
          <TabsList className="rounded-bl-none rounded-tl-none">
            <TabsTrigger value="inbox">Inbox</TabsTrigger>

            {activeTabs.includes("view") && (
              <TabsTrigger
                value="view"
                className="flex items-center justify-between gap-1 pr-2"
              >
                <span>View Email</span>
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab("view");
                  }}
                  className="text-red-500 hover:text-red-600 text-sm ml-1 cursor-pointer"
                  tabIndex={0}
                  role="button"
                  aria-label="Close view tab"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") closeTab("view");
                  }}
                >
                  <X />
                </span>
              </TabsTrigger>
            )}

            {activeTabs.includes("edit") && (
              <TabsTrigger
                value="edit"
                className="flex items-center justify-between gap-1 pr-2"
              >
                <span>Edit Email</span>
                <X
                  onClick={(e) => {
                    e.stopPropagation();
                    closeTab("edit");
                  }}
                  className="text-red-500 hover:text-red-600 text-sm ml-1"
                />
              </TabsTrigger>
            )}
          </TabsList>

          {/* Default Inbox */}
          <TabsContent
            value="inbox"
            className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-background"
          >
            <Inbox openTab={openTab} setReplyReference={setReplyReference} />
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
            <ResponseEmail />
          </TabsContent>
        </Tabs>
        {replyReference && (
          <div className="mx-6 mt-2 mb-0 flex items-start gap-2">
            <div
              className={`
        w-full px-4 py-2 rounded-lg text-sm shadow-sm border-l-4 bg-white text-foreground border-cta mr-auto rounded-bl-none relative
      `}
              style={{ opacity: 0.95 }}
            >
              <button
                onClick={() => setReplyReference(null)}
                className="absolute top-2 right-2 text-muted-foreground hover:text-red-500 p-1 rounded transition"
                aria-label="Cancel reply"
                type="button"
              >
                <X className="w-4 h-4" />
              </button>
              <span className="block font-semibold text-cta mb-1 text-xs">
                Replying to:
              </span>
              <span className="block">{replyReference.text}</span>
              <span className="block text-[0.7rem] text-muted-foreground mt-1">
                {replyReference.timestamp}
              </span>
            </div>
          </div>
        )}
        {/* send email input box */}
        <div className="px-6 py-4 border-t bg-white">
          <div className="flex items-center gap-2">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Write a prompt to generate a reply..."
              className="flex-1 active:border-cta focus:border-cta"
            />
            <Button
              variant="outline"
              size="icon"
              title="Generate AI Reply"
              className="bg-cta hover:bg-ctaHover text-white"
              onClick={() => openTab("edit")}
              disabled={!prompt.trim()}
            >
              <Wand2 className="w-4 h-4" />
            </Button>
            <Button
              className="border border-cta hover:bg-ctaHover hover:text-white"
              disabled={!prompt.trim()}
            >
              Send
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
