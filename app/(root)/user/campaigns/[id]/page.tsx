'use client';

import {
  Upload,
  Boxes,
} from "lucide-react";

import { columns, Lead } from "./columns";
import { DataTable } from "./data-table";
import { useState, useEffect } from "react";
import { CSVDialog } from "@/components/CSVDialog";
import { TemplatesDialog } from "@/components/Templates/TemplatesDialogBox";

// This is temporary mock data
async function getData(): Promise<Lead[]> {
  return [
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
    {
      id: "7",
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
    {
      id: "8",
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
    {
      id: "9",
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
    {
      id: "10",
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
  ];
}

const CampaignPage = () => {
  const [data, setData] = useState<Lead[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const leads = await getData();
      setData(leads);
    };
    fetchData();
  }, []);

  return (
    <div className="w-[85%] h-screen bg-anti-flash-white overflow-x-hidden">
      <main className="flex-1 w-full ">
       <header className="w-full bg-white text-foreground border-b-[1px] px-6 pt-1 h-[10vh] flex-between">
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-charcoal">Leads</h1>
                <p className="text-medium-gray">
                  Manage all your leads across campaigns
                </p>
            </div>
            <div className="flex items-center space-x-3">
                <TemplatesDialog buttonLabel="Select Templates" icon ={<Boxes className="w-4 h-4 mr-2" />}/>
                <CSVDialog dialogLabel="Upload Leads" icon={<Upload className="w-4 h-4 mr-2" />} />
            </div>
        </header>

        <div className="w-full h-[90vh] flex-center p-6">
          {/* Stats Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
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
              </CardContent>
            </Card>
          </div> */}

          {/* Leads Table */}
          <div className="w-full px-0 py-2 h-full">
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CampaignPage;
