export enum CampaignStatus {
  Running = "running",
  Error = "error",
  Cancelled = "cancelled",
  Paused = "paused",
  Completed = "completed",
}

import {
  Loader2,
  AlertTriangle,
  Ban,
  PauseCircle,
  CheckCircle,
} from "lucide-react";

export const statusStyles: Record<
  CampaignStatus,
  { label: string; className: string; icon: React.ReactNode }
> = {
  [CampaignStatus.Running]: {
    label: "Running",
    className: "status-running",
    icon: <Loader2 className="w-4 h-4 mr-1" />,
  },
  [CampaignStatus.Error]: {
    label: "Error",
    className: "status-error",
    icon: <AlertTriangle className="w-4 h-4 mr-1" />,
  },
  [CampaignStatus.Cancelled]: {
    label: "Cancelled",
    className: "status-cancelled",
    icon: <Ban className="w-4 h-4 mr-1" />,
  },
  [CampaignStatus.Paused]: {
    label: "Paused",
    className: "status-paused",
    icon: <PauseCircle className="w-4 h-4 mr-1" />,
  },
  [CampaignStatus.Completed]: {
    label: "Completed",
    className: "status-completed",
    icon: <CheckCircle className="w-4 h-4 mr-1" />,
  },
};