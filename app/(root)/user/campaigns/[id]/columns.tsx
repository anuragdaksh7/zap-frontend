"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { EmailSidePanel } from "@/components/EmailSidepanel/EmailSidePanel"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function getStatusBadge(status: string) {
  const variants = {
    active: "bg-green-100 text-green-800",
    unsubscribed: "bg-yellow-100 text-yellow-800",
    blacklisted: "bg-red-100 text-red-800",
    bounced: "bg-gray-100 text-gray-800",
  };

  return (
    variants[status as keyof typeof variants] || "bg-gray-100 text-gray-800"
  );
}

export type Lead = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  status: string;
  tags: string[];
  location: string;
  lastContact: string;
  responseAt: string;
  notes: string;
  linkedinURL: string;
};

export const columns: ColumnDef<Lead>[] = [
  // Sorting
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "fullName",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Full Name <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
    const name = row.getValue("fullName") as string;
    const email = row.getValue("email") as string;
    return (
      <EmailSidePanel
        trigger={
          <span className="hover:underline cursor-pointer">
            {name}
          </span>
        }
        rowData={{
          name,
          email,
          // profileUrl: "https://i.pravatar.cc/150?u=" + row.getValue("email"),
        }
        }
      />
    );
  },
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const name = row.getValue("fullName") as string;
      const email = row.getValue("email") as string;
      return (
        <EmailSidePanel
          trigger={
            <span className="cursor-pointer hover:underline">
              {email}
            </span>
          }
          rowData={{
            name,
            email,
          }}
          />
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");
      return (
        <Badge className={getStatusBadge(status)}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      );
    },
  },

  {
    accessorKey: "tags",
    header: "Tags",
    cell: ({ row }) => row.getValue<string[]>("tags").join(", "),
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "lastContact",
    header: "Last Contact",
    cell: ({ row }) => {
      const date = row.getValue("lastContact") as string | undefined;
      return (
        <div className="text-medium-gray">
          {date
            ? new Date(date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })
            : "N/A"}
        </div>
      );
    },
  },
  {
    accessorKey: "responseAt",
    header: "Response At",
    cell: ({ row }) => {
      const date = row.getValue("responseAt") as string | undefined;
      return (
        <div className="text-medium-gray">
          {date
            ? new Date(date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })
            : "N/A"}
        </div>
      );
    },
  },

  {
    accessorKey: "notes",
    header: "Notes",
  },
  {
    accessorKey: "linkedinURL",
    header: "LinkedIn",
    cell: ({ row }) => (
      <a
        className="text-blue-600 underline"
        href={row.getValue("linkedinURL")}
        target="_blank"
      >
        <Linkedin className="w-4 h-4" />
      </a>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const lead = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(lead.email)}
            >
              Copy Email
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View Details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
