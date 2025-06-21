import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Upload,
  Search,
  Filter,
  Users,
  UserX,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";

import { columns, Lead } from "./columns";
import { DataTable } from "./data-table";

// This is temporary mock data
async function getData(): Promise<Lead[]> {
  return [
    // Replace this with actual backend data
    //     async function getData(): Promise<Lead[]> {
    //   const res = await fetch("https://your-api.com/leads/campaign-id", {
    //     cache: "no-store",
    //   })
    //   const leads = await res.json()
    //   return leads
    // }

    // Example lead data
    {
      id: "1",
      fullName: "John Doe",
      email: "john@example.com",
      phone: "+91-9876543210",
      company: "TechCorp",
      position: "Developer",
      status: "unsubscribed",
      tags: ["newsletter", "beta"],
      location: "Mumbai, India",
      lastContact: "2024-05-01",
      responseAt: "2024-05-02",
      notes: "Very responsive lead",
      linkedinURL: "https://linkedin.com/in/johndoe",
    },
    {
      id: "2",
      fullName: "Aarav Mehta",
      email: "aarav.mehta@startuphub.in",
      phone: "+91-9988776655",
      company: "StartupHub",
      position: "Product Manager",
      status: "active",
      tags: ["demo", "newsletter"],
      location: "Bangalore, India",
      lastContact: "2024-05-04",
      responseAt: "2024-05-05T10:15:00Z",
      notes: "Interested in product demo",
      linkedinURL: "https://linkedin.com/in/aaravmehta",
    },
    {
      id: "3",
      fullName: "Sara Iqbal",
      email: "sara.iqbal@edtechplus.com",
      phone: "+91-9123456789",
      company: "EdTech Plus",
      position: "Marketing Lead",
      status: "unsubscribed",
      tags: ["webinar", "lead-magnet"],
      location: "Delhi, India",
      lastContact: "2024-04-28",
      responseAt: "2024-04-30T09:00:00Z",
      notes: "Unsubscribed after second email",
      linkedinURL: "https://linkedin.com/in/saraiqbal",
    },
    {
      id: "4",
      fullName: "Rohan Kapoor",
      email: "rohan.k@finwise.co",
      phone: "+91-9876001234",
      company: "FinWise",
      position: "Finance Analyst",
      status: "blacklisted",
      tags: ["spam", "incomplete"],
      location: "Pune, India",
      lastContact: "2024-03-15",
      responseAt: "2024-03-16T14:45:00Z",
      notes: "Marked as spam by multiple users",
      linkedinURL: "https://linkedin.com/in/rohankapoor",
    },
    {
      id: "5",
      fullName: "Neha Sharma",
      email: "neha.sharma@designco.in",
      phone: "+91-9812345678",
      company: "DesignCo",
      position: "UX Designer",
      status: "active",
      tags: ["newsletter", "interested"],
      location: "Chandigarh, India",
      lastContact: "2024-05-10",
      responseAt: "2024-05-11T11:20:00Z",
      notes: "Engaged with newsletter",
      linkedinURL: "https://linkedin.com/in/nehasharmaux",
    },
    {
      id: "6",
      fullName: "Vikram Rao",
      email: "vikram.rao@agriinnovate.com",
      phone: "+91-9900112233",
      company: "AgriInnovate",
      position: "CTO",
      status: "active",
      tags: ["founder", "vip"],
      location: "Hyderabad, India",
      lastContact: "2024-05-07",
      responseAt: "2024-05-08T08:30:00Z",
      notes: "Requested a custom integration",
      linkedinURL: "https://linkedin.com/in/vikramrao",
    },
    // Add more test data as needed
  ];
}

const CampaignPage = async () => {
  const data = await getData();

  const stats = {
    total: data.length,
    active: data.filter((lead) => lead.status === "active").length,
    unsubscribed: data.filter((lead) => lead.status === "unsubscribed").length,
    blacklisted: data.filter((lead) => lead.status === "blacklisted").length,
  };

  return (
    <div className="min-h-screen w-full bg-anti-flash-white overflow-x-hidden">
      <main className="flex-1 w-full ">
        <div className="sticky top-0 z-10 h-[10vh] w-full bg-white border-b border-gray-200 flex items-center p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-charcoal">Leads</h1>
                <p className="text-medium-gray">
                  Manage all your leads across campaigns
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              {/* <Link to="/leads/upload">
                  <Button variant="outline" className="border-ruddy-blue text-ruddy-blue hover:bg-ruddy-blue hover:text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Leads
                  </Button>
                </Link> */}
            </div>
          </div>
        </div>

        <div className="p-6 w-full">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Leads
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-charcoal">
                  {stats.total.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active</CardTitle>
                <Users className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">
                  {stats.active.toLocaleString()}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Unsubscribed
                </CardTitle>
                <UserX className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">
                  {stats.unsubscribed.toLocaleString()}
                </div>
                <Link
                  href="/buffer-unsubscribed"
                  className="text-xs text-yellow-600 hover:underline"
                >
                  View all →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Blacklisted
                </CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">
                  {stats.blacklisted.toLocaleString()}
                </div>
                <Link
                  href="/buffer-blacklist"
                  className="text-xs text-red-600 hover:underline"
                >
                  Manage →
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Filters and Search */}

          {/* Leads Table */}
          <div className="w-full px-0 py-2">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampaignPage;
