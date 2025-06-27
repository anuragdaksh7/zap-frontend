import Component from "@/components/Chart";
import { DashboardTable } from "@/components/DashboardTable";
// import { Button } from "@/components/ui/button";
// import { PlusSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="w-[85%] h-screen">
      <header className="heading">
        <h1 className="text-2xl font-bold">Welcome, {"John Doe"}!</h1>
        <p className="text-sm font-medium">Here&apos;s your email overview.</p>
      </header>
      <div className="w-full h-[90vh] flex-center p-4 gap-4">
        <div className="flex-1 max-h-[80vh] bg-white border-2 rounded-xl p-4 overflow-y-auto">
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
          {/* <Button variant="outline" size="lg" className="flex items-center justify-center bg-cta text-white h-[4rem] m-auto hover:bg-cta-hover">
            <PlusSquare/>
            Add Campaigns
          </Button> */}
        </div>
      </div>
    </div>
  );
}
