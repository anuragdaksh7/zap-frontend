'use client'
import React, { useState } from "react";
import { CampaignsTable } from "@/components/CampaignsTable";
import { PlusSquare } from "lucide-react";
import { CSVDialog } from "@/components/CSVDialog";
import { Button } from "@/components/ui/button";

const page = () => {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  return (
    <div className="w-[85%] h-screen">
      <header className="w-full bg-white text-foreground border-b-[1px] px-6 pt-1 mb-8 h-[10vh] flex-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Campaigns</h1>
          <p className="text-sm font-medium">
            Checkout all your campaigns here.
          </p>
        </div>
        <Button variant="outline" className="border-cta text-cta hover:bg-cta hover:text-white" onClick={() => setIsUploadDialogOpen(true)}>
                    <PlusSquare className="w-4 h-4 mr-2" />
                    Add campaigns
                  </Button>
      </header>
      <div className="w-[81vw] max-h-[80vh] bg-white border-2 rounded-xl p-4 mx-6 overflow-y-auto">
        <CampaignsTable />
      </div>
      <CSVDialog
          isOpen={isUploadDialogOpen}
          onClose={() => setIsUploadDialogOpen(false)}
        />
    </div>
  );
};

export default page;
