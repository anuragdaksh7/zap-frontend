"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { EmailSidePanel } from "@/components/EmailSidepanel/EmailSidePanel"
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CellContext } from "@tanstack/react-table";
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

export function useLeadColumns(updateField: (id: string, field: string, value: string) => void) {
  const [editingCell, setEditingCell] = useState<{ rowId: string; columnId: string; value: string } | null>(null);
  

  const startEditing = (rowId: string, columnId: string, initialValue: string) => {
    setEditingCell({ rowId, columnId, value: initialValue });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editingCell) {
      setEditingCell({ ...editingCell, value: e.target.value });
    }
  };

  const save = (rowId: string, columnId: string) => {
    if (editingCell) {
      updateField(rowId, columnId, editingCell.value);
      setEditingCell(null);
    }
  };

  const editableCell = (field: keyof Lead) => ({
    cell: ({ row }: CellContext<Lead, unknown>) => {
      const isEditing = editingCell !== null && editingCell.rowId === row.id && editingCell.columnId === field;
      const initialValue = row.getValue(field) as string;

      return isEditing ? (
        <Input
          autoFocus
          value={editingCell?.value ?? ""}
          onChange={handleChange}
          onBlur={() => save(row.id, field)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && save(row.id, field)}
        />
      ) : (
        <span
          className="cursor-pointer hover:underline"
          onClick={() => startEditing(row.id, field, initialValue || "")}
        >
          {initialValue || "—"}
        </span>
      );
    },
  });

  const columns: ColumnDef<Lead>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
          onCheckedChange={(v) => table.toggleAllPageRowsSelected(!!v)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(v) => row.toggleSelected(!!v)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "fullName",
      header: "Full Name",
      cell: ({ row }) => {
        const name = row.getValue("fullName") as string;
        const email = row.getValue("email") as string;
        return (
          <EmailSidePanel
            trigger={<span className="hover:underline cursor-pointer">{name}</span>}
            rowData={{ name, email }}
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
            trigger={<span className="hover:underline cursor-pointer">{email}</span>}
            rowData={{ name, email }}
          />
        );
      },
    },
    {
      accessorKey: "phone",
      header: "Phone",
      ...editableCell("phone"),
    },
    {
      accessorKey: "company",
      header: "Company",
      ...editableCell("company"),
    },
    {
      accessorKey: "position",
      header: "Position",
      ...editableCell("position"),
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
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
      cell: ({ row }) => {
        const isEditing = editingCell !== null && editingCell.rowId === row.id && editingCell.columnId === "tags";
        const tagsArray = row.getValue("tags") as string[];
        const initialValue = tagsArray?.join(", ") || "";

        return isEditing ? (
          <Input
            autoFocus
            value={editingCell?.value ?? ""}
            onChange={handleChange}
            onBlur={() => save(row.id, "tags")}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && save(row.id, "tags")}
          />
        ) : (
          <span
            className="cursor-pointer hover:underline"
            onClick={() => startEditing(row.id, "tags", initialValue || "")}
          >
            {initialValue || "—"}
          </span>
        );
      },
    },
    {
      accessorKey: "location",
      header: "Location",
      ...editableCell("location"),
    },
    {
      accessorKey: "notes",
      header: "Notes",
      ...editableCell("notes"),
    },
    {
      accessorKey: "linkedinURL",
      header: "LinkedIn",
      ...editableCell("linkedinURL"),
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

  return columns;
}

