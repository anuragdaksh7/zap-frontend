import { CampaignsTable } from "@/components/CampaignsTable";
import { PlusSquare } from "lucide-react";
import { CSVDialog } from "@/components/CSVDialog";

const page = () => {
  return (
    <div className="w-[85%] h-screen">
      <header className="w-full bg-white text-foreground border-b-[1px] px-6 pt-1 h-[10vh] flex-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Campaigns</h1>
          <p className="text-sm font-medium">
            Checkout all your campaigns here.
          </p>
        </div>
        <CSVDialog
          dialogLabel="Upload Leads"
          icon={<PlusSquare className="w-4 h-4 mr-2" />}
        />
      </header>
      <div className="w-full h-[90vh] flex-center p-4">
        <div className="w-[81vw] max-h-[80vh] bg-white border-2 rounded-xl p-4 mx-auto overflow-y-auto">
          <CampaignsTable />
        </div>
      </div>
    </div>
  );
};

export default page;
