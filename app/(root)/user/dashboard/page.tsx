import Component from "@/components/Chart";
import { DashboardTable } from "@/components/DashboardTable";
import { Button } from "@/components/ui/button";
import { PlusSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="w-full bg-white text-foreground border-b-[1px] py-3 px-6  mb-8 flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Welcome, {"John Doe"}!</h1>
        <p className="text-sm font-medium">Here's your email overview.</p>
      </div>
      <div className="w-full flex">
        <div className="w-[70%] bg-white border-2 rounded-xl p-4 mx-6">
          <DashboardTable />
        </div>
        <div className="flex-between flex-col gap-8">
          <Component
            totalEmails={862}
            breakdown={[
              { type: "unread", count: 275 },
              { type: "bookmarked", count: 200 },
              { type: "collections", count: 387 },
            ]}
          />
          <Button variant="outline" size="lg" className="btn-3 mb-2">
            <PlusSquare className="mr-2" />
            Add a New Campaign
          </Button>
        </div>
      </div>
    </div>
  );
}
