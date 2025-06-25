import { useState } from "react";
import { cn } from "@/lib/utils";

interface Msg {
  id: number;
  text: string;
  sender: "me" | "them";
  timestamp: string;
}

interface InboxProps {
  openTab: (type: "view" | "edit") => void;
  setReplyReference?: (msg: Msg) => void;
}
const Inbox = ({ openTab, setReplyReference }: InboxProps) => {
  const [messages] = useState<Msg[]>([
    {
      id: 1,
      text: "Meeting Reminder: Project Sync at 3 PM",
      sender: "them",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      text: "Re: Updated Budget Proposal Attached",
      sender: "me",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      text: "Upcoming Webinar: AI Trends in 2025",
      sender: "them",
      timestamp: "10:35 AM",
    },
  ]);

  return (
    <div className="flex flex-col h-[500px] overflow-y-auto px-4 py-2 space-y-2 bg-background">
      {messages.map((Msg) => (
        <div
          key={Msg.id}
          className={cn(
            "max-w-[70%] px-4 py-2 rounded-lg text-sm shadow-sm relative cursor-pointer",
            Msg.sender == "me"
              ? "bg-cta ml-auto text-right rounded-br-none text-white"
              : "bg-white mr-auto text-left rounded-bl-none"
          )}
          onClick={() => {
            if (setReplyReference) setReplyReference(Msg);
            openTab("view")
          }}
          onDoubleClick={() => {
            openTab("edit");
          }}
        >
          {Msg.text}
          <span className={cn("block text-[0.7rem] text-gray-500 mt-1", Msg.sender === "me" ? "text-white" : "")}>
            {Msg.timestamp}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Inbox;
