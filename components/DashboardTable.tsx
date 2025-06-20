"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CampaignStatus, statusStyles } from "@/lib/CampaignStatus";
import { useRouter } from "next/navigation";

const campaigns = [
  {
    _id: "1",
    name: "Welcome Series",
    status: "running",
    date: "2024-06-01T10:00:00.000Z",
  },
  {
    _id: "2",
    name: "Summer Promo",
    status: "paused",
    date: "2024-07-10T15:30:00.000Z",
  },
  {
    _id: "3",
    name: "Re-engagement",
    status: "error",
    date: "2024-06-15T08:45:00.000Z",
  },
  {
    _id: "4",
    name: "Product Launch",
    status: "running",
    date: "2024-06-20T12:00:00.000Z",
  },
  {
    _id: "5",
    name: "Feedback Request",
    status: "completed",
    date: "2024-05-30T09:20:00.000Z",
  },
  {
    _id: "6",
    name: "Holiday Sale",
    status: "cancelled",
    date: "2024-12-01T18:00:00.000Z",
  },
  {
    _id: "7",
    name: "Newsletter June",
    status: "running",
    date: "2024-06-05T07:10:00.000Z",
  },
  {
    _id: "8",
    name: "Feedback Request",
    status: "completed",
    date: "2024-05-30T09:20:00.000Z",
  },
  {
    _id: "9",
    name: "Holiday Sale",
    status: "cancelled",
    date: "2024-12-01T18:00:00.000Z",
  },
  {
    _id: "10",
    name: "Newsletter June",
    status: "completed",
    date: "2024-06-05T07:10:00.000Z",
  },
  {
    _id: "11",
    name: "Holiday Sale",
    status: "cancelled",
    date: "2024-12-01T18:00:00.000Z",
  },
  {
    _id: "12",
    name: "Newsletter June",
    status: "error",
    date: "2024-06-05T07:10:00.000Z",
  },
];

export function DashboardTable() {
  const router = useRouter();

  return (
    <Table>
      <TableCaption>A list of your recent campaigns.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campaigns.map((campaign) => (
          <TableRow
            key={campaign._id}
            className="cursor-pointer hover:bg-muted transition"
            onClick={() => router.push(`/user/campaign/${campaign._id}`)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push(`/user/campaign/${campaign._id}`);
              }
            }}
            role="button"
            aria-label={`View campaign ${campaign.name}`}
          >
            <TableCell className="font-medium">{campaign.name}</TableCell>
            <TableCell>{campaign.date}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold gap-1 ${
                  statusStyles[campaign.status as CampaignStatus]?.className ??
                  ""
                }`}
              >
                {statusStyles[campaign.status as CampaignStatus]?.icon}
                {statusStyles[campaign.status as CampaignStatus]?.label ??
                  campaign.status}
              </span>
              
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
