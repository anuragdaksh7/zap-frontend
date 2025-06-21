'use client';

import { useState } from "react";
import { CSVDialog } from "@/components/CSVDialog";

const page = () => {
    const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(true);
  return (
    <div>
        <CSVDialog 
            isOpen={isUploadDialogOpen} 
            onClose={() => setIsUploadDialogOpen(false)} 
          />
    </div>
  )
}

export default page