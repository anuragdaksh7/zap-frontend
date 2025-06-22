import React, { useState } from "react";
import { CampaignsTable } from "@/components/CampaignsTable";
import CSVDialog from "@/components/CSVDialog";

const page = () => {
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(true);
  return (
    <div className="w-[85%] h-screen">
      <header className="w-full bg-white text-foreground border-b-[1px] px-6 pt-1 mb-8 h-[10vh] flex-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Campaigns</h1>
          <p className="text-sm font-medium">
            Checkout all your campaigns here.
          </p>
        </div>
        <CSVDialog
          isOpen={isUploadDialogOpen}
          onClose={() => setIsUploadDialogOpen(false)}
        />
      </header>
      <div className="w-[81vw] max-h-[80vh] bg-white border-2 rounded-xl p-4 mx-6 overflow-y-auto">
        <CampaignsTable />
      </div>
    </div>
  );
};

export default page;
