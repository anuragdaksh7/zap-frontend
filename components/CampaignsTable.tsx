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
import { format } from "date-fns";
import { ChevronsUpDown, Download, Trash2 } from "lucide-react";
import { useState } from "react";

type Prospect = {
  CampaignID: number;
  FullName: string;
  Email: string;
  Phone: string;
  Company: string;
  Position: string;
  LinkedInURL: string;
  Status: string;
  Tags: string;
  Location: string;
  LastContact: string;
  ResponseAt: string;
  Notes: string;
};

const runEveryOptions = [
  { label: "10 mins", value: 10 },
  { label: "20 mins", value: 20 },
  { label: "30 mins", value: 30 },
  { label: "1 hour", value: 60 },
];
const campaigns = [
  {
    _id: "1",
    name: "Welcome Series",
    status: "running",
    date: "2024-06-01T10:00:00.000Z",
    totalProspects: 1200,
    processedProspects: 800,
    runEvery: 2,
  },
  {
    _id: "2",
    name: "Summer Promo",
    status: "completed",
    date: "2024-07-10T15:30:00.000Z",
    totalProspects: 950,
    processedProspects: 950,
    runEvery: 4,
  },
  {
    _id: "3",
    name: "Re-engagement",
    status: "error",
    date: "2024-06-15T08:45:00.000Z",
    totalProspects: 500,
    processedProspects: 120,
    runEvery: 1,
  },
  {
    _id: "4",
    name: "Product Launch",
    status: "running",
    date: "2024-06-20T12:00:00.000Z",
    totalProspects: 2000,
    processedProspects: 1500,
    runEvery: 3,
  },
  {
    _id: "5",
    name: "Feedback Request",
    status: "completed",
    date: "2024-05-30T09:20:00.000Z",
    totalProspects: 700,
    processedProspects: 700,
    runEvery: 6,
  },
  {
    _id: "6",
    name: "Holiday Sale",
    status: "cancelled",
    date: "2024-12-01T18:00:00.000Z",
    totalProspects: 1800,
    processedProspects: 400,
    runEvery: 12,
  },
  {
    _id: "7",
    name: "Newsletter June",
    status: "running",
    date: "2024-06-05T07:10:00.000Z",
    totalProspects: 1100,
    processedProspects: 900,
    runEvery: 2,
  },
  {
    _id: "8",
    name: "Feedback Request",
    status: "completed",
    date: "2024-05-30T09:20:00.000Z",
    totalProspects: 700,
    processedProspects: 700,
    runEvery: 6,
  },
  {
    _id: "9",
    name: "Holiday Sale",
    status: "cancelled",
    date: "2024-12-01T18:00:00.000Z",
    totalProspects: 1800,
    processedProspects: 400,
    runEvery: 12,
  },
  {
    _id: "10",
    name: "Newsletter June",
    status: "completed",
    date: "2024-06-05T07:10:00.000Z",
    totalProspects: 1100,
    processedProspects: 1100,
    runEvery: 2,
  },
  {
    _id: "11",
    name: "Holiday Sale",
    status: "cancelled",
    date: "2024-12-01T18:00:00.000Z",
    totalProspects: 1800,
    processedProspects: 400,
    runEvery: 12,
  },
  {
    _id: "12",
    name: "Newsletter June",
    status: "error",
    date: "2024-06-05T07:10:00.000Z",
    totalProspects: 1100,
    processedProspects: 300,
    runEvery: 2,
  },
];

const prospects = [
  {
    CampaignID: 1,
    FullName: "Alice Johnson",
    Email: "alice.johnson@example.com",
    Phone: "+1-555-1234",
    Company: "Acme Corp",
    Position: "Marketing Manager",
    LinkedInURL: "https://linkedin.com/in/alicejohnson",
    Status: "Contacted",
    Tags: "lead,marketing",
    Location: "New York, USA",
    LastContact: "2024-06-01T10:00:00.000Z",
    ResponseAt: "2024-06-02T14:30:00.000Z",
    Notes: "Interested in demo",
  },
  {
    CampaignID: 1,
    FullName: "Bob Smith",
    Email: "bob.smith@example.com",
    Phone: "+1-555-5678",
    Company: "Beta LLC",
    Position: "CTO",
    LinkedInURL: "https://linkedin.com/in/bobsmith",
    Status: "No Response",
    Tags: "tech,lead",
    Location: "San Francisco, USA",
    LastContact: "2024-06-03T09:15:00.000Z",
    ResponseAt: "",
    Notes: "",
  },
  {
    CampaignID: 2,
    FullName: "Carol Lee",
    Email: "carol.lee@example.com",
    Phone: "+1-555-8765",
    Company: "Gamma Inc",
    Position: "Sales Lead",
    LinkedInURL: "https://linkedin.com/in/carollee",
    Status: "Responded",
    Tags: "sales,lead",
    Location: "Chicago, USA",
    LastContact: "2024-06-04T11:00:00.000Z",
    ResponseAt: "2024-06-05T13:00:00.000Z",
    Notes: "Requested pricing",
  },
  {
    CampaignID: 2,
    FullName: "David Kim",
    Email: "david.kim@example.com",
    Phone: "+1-555-4321",
    Company: "Delta Co",
    Position: "HR Manager",
    LinkedInURL: "https://linkedin.com/in/davidkim",
    Status: "Contacted",
    Tags: "hr,lead",
    Location: "Austin, USA",
    LastContact: "2024-06-06T15:00:00.000Z",
    ResponseAt: "",
    Notes: "",
  },
  {
    CampaignID: 3,
    FullName: "Eva Green",
    Email: "eva.green@example.com",
    Phone: "+1-555-2468",
    Company: "Epsilon Ltd",
    Position: "CEO",
    LinkedInURL: "https://linkedin.com/in/evagreen",
    Status: "Responded",
    Tags: "executive,lead",
    Location: "Boston, USA",
    LastContact: "2024-06-07T10:30:00.000Z",
    ResponseAt: "2024-06-08T09:00:00.000Z",
    Notes: "Wants follow-up",
  },
  {
    CampaignID: 3,
    FullName: "Frank Moore",
    Email: "frank.moore@example.com",
    Phone: "+1-555-1357",
    Company: "Zeta Group",
    Position: "Product Manager",
    LinkedInURL: "https://linkedin.com/in/frankmoore",
    Status: "No Response",
    Tags: "product,lead",
    Location: "Seattle, USA",
    LastContact: "2024-06-09T14:00:00.000Z",
    ResponseAt: "",
    Notes: "",
  },
  {
    CampaignID: 4,
    FullName: "Grace Lee",
    Email: "grace.lee@example.com",
    Phone: "+1-555-9753",
    Company: "Eta Solutions",
    Position: "Developer",
    LinkedInURL: "https://linkedin.com/in/gracelee",
    Status: "Contacted",
    Tags: "developer,lead",
    Location: "Denver, USA",
    LastContact: "2024-06-10T16:00:00.000Z",
    ResponseAt: "",
    Notes: "",
  },
  {
    CampaignID: 4,
    FullName: "Henry Adams",
    Email: "henry.adams@example.com",
    Phone: "+1-555-8642",
    Company: "Theta Tech",
    Position: "Designer",
    LinkedInURL: "https://linkedin.com/in/henryadams",
    Status: "Responded",
    Tags: "design,lead",
    Location: "Miami, USA",
    LastContact: "2024-06-11T12:00:00.000Z",
    ResponseAt: "2024-06-12T10:00:00.000Z",
    Notes: "Sent portfolio",
  },
  {
    CampaignID: 5,
    FullName: "Ivy Brown",
    Email: "ivy.brown@example.com",
    Phone: "+1-555-7531",
    Company: "Iota Works",
    Position: "Analyst",
    LinkedInURL: "https://linkedin.com/in/ivybrown",
    Status: "Contacted",
    Tags: "analyst,lead",
    Location: "Dallas, USA",
    LastContact: "2024-06-13T09:00:00.000Z",
    ResponseAt: "",
    Notes: "",
  },
  {
    CampaignID: 5,
    FullName: "Jack White",
    Email: "jack.white@example.com",
    Phone: "+1-555-1597",
    Company: "Kappa Partners",
    Position: "Consultant",
    LinkedInURL: "https://linkedin.com/in/jackwhite",
    Status: "No Response",
    Tags: "consultant,lead",
    Location: "Portland, USA",
    LastContact: "2024-06-14T11:00:00.000Z",
    ResponseAt: "",
    Notes: "",
  },
];

function downloadCSV(data: Prospect[], filename = "prospects.csv") {
  const header = Object.keys(data[0]);
  const csvRows = [
    header.join(","),
    ...data.map((row) =>
      header
        .map((field) => {
          let val = row[field as keyof Prospect] ?? "";
          // Escape quotes
          if (typeof val === "string") val = `"${val.replace(/"/g, '""')}"`;
          return val;
        })
        .join(",")
    ),
  ];
  const csvContent = csvRows.join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

export function CampaignsTable() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <Table className="overflow-auto">
      <TableCaption>A list of your recent campaigns.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[220px]">Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Prospects</TableHead>
          <TableHead>Run Every</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Download</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campaigns.map((campaign) => (
          <TableRow
            key={campaign._id}
            className="cursor-pointer hover:bg-muted transition"
            onClick={() => router.push(`/user/campaigns/${campaign._id}`)}
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
            <TableCell>{format(new Date(campaign.date), "PPP")}</TableCell>
            <TableCell className="tabular-nums">
              {campaign.processedProspects} of {campaign.totalProspects}
            </TableCell>
            <TableCell>
              <div className="relative w-full flex items-center gap-2">
                <button
                  className="py-1 rounded font-semibold transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(
                      openDropdown === campaign._id ? null : campaign._id
                    );
                  }}
                >
                  {campaign.runEvery === 60
                    ? "1 hour"
                    : runEveryOptions.find(
                        (opt) => opt.value === campaign.runEvery
                      )?.label || `${campaign.runEvery} hours`}
                </button>
                <ChevronsUpDown/>
                {openDropdown === campaign._id && (
                  <div className="absolute z-10 left-0 mt-1 w-32 bg-white border rounded shadow">
                    {runEveryOptions.map((opt) => (
                      <button
                        key={opt.value}
                        className="block w-full text-left px-3 py-2 hover:bg-muted"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(null);
                          // You can call your API here later
                          // e.g. updateRunEvery(campaign._id, opt.value)
                        }}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </TableCell>
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
            <TableCell>
              <button
                className="px-1 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                onClick={() => downloadCSV(prospects)}
              >
                <Download size={20} />
              </button>
            </TableCell>
            <TableCell>
              <button
                className="px-1 py-1 rounded bg-red-100 text-red-700 hover:bg-red-200 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  // handle delete
                }}
              >
                <Trash2 size={20} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
