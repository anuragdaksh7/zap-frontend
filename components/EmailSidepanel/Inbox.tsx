import { useState } from "react";
import { cn } from "@/lib/utils";
import { Tabs } from "../ui/tabs";

interface Msg {
  id: number;
  text: string;
  sender: "me" | "them";
  timestamp: string;
}

interface InboxProps {
  openTab: (type: "view" | "edit") => void;
}
const Inbox = ({openTab}: InboxProps) => {
    const [messages] = useState<Msg[]>([
        {
          id: 1,
          text: "Hey there! Just wanted to check in.",
          sender: "them",
          timestamp: "10:30 AM",
        },
        {
          id: 2,
          text: "All good here! Working on the report.",
          sender: "me",
          timestamp: "10:32 AM",
        },
        {
          id: 3,
          text: "Great! Ping me once done.",
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
                        "max-w-[70%] px-4 py-2 rounded-lg text-sm shadow-sm relative",
                        Msg.sender == "me"
                          ? "bg-cta ml-auto text-right rounded-br-none"
                          : "bg-white mr-auto text-left rounded-bl-none"
                      )}
                      onClick={() => openTab("view")}
                      onDoubleClick={() => openTab("edit")}
                    >
                      {Msg.text}
                      <span className="block text-[0.7rem] text-gray-500 mt-1">
                        {Msg.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
  )
}

export default Inbox