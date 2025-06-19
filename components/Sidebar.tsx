"use client";
import {
  BookmarkIcon,
  GroupIcon,
  LayoutDashboard,
  LogOut,
  Pin,
  Search,
  Settings,
  Tag,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { Avatar } from "./ui/avatar";

const Sidebar = () => {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        footerRef.current &&
        !footerRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    }
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);
  return (
    <div className="h-full w-[15rem] border-x-[0.5px] border-border flex-divide relative">
      <header className="flex-start h-[10vh] w-full border-y-[0.5px] border-border gap-2">
        <div className="bg-cta text-white w-[25px] h-[25px] flex-center ml-3 rounded-sm">
          Z
        </div>
        <h1 className="font-bold text-xl text-foreground">ZapMail</h1>
      </header>
      <section className="flex flex-col justify-start items-start h-[70vh] mt-3 px-5 w-full gap-2 border-b-[0.5px] border-border">
        <h3 className="text-sm">NAVIGATION</h3>
        <Link
          className={pathname === "/user" ? "sidebar-active" : "sidebar-link"}
          href={"/user"}
        >
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link
          className={
            pathname === "/user/bookmarks" ? "sidebar-active" : "sidebar-link"
          }
          href={"/user/bookmarks"}
        >
          <BookmarkIcon size={20} /> Bookmarks
        </Link>
        <Link
          className={
            pathname === "/user/collections" ? "sidebar-active" : "sidebar-link"
          }
          href={"/user/collections"}
        >
          <GroupIcon size={20} /> Collections
        </Link>
        <Link
          className={
            pathname === "/user/pinned" ? "sidebar-active" : "sidebar-link"
          }
          href={"/user/pinned"}
        >
          <Pin size={20} /> Pinned
        </Link>
        <Link
          className={
            pathname === "/user/tags" ? "sidebar-active" : "sidebar-link"
          }
          href={"/user/tags"}
        >
          <Tag size={20} /> Tags
        </Link>
        <div className="sidebar-link">
          <Search size={20} /> Search
        </div>
      </section>
      <footer className="h-[20vh] flex-center w-full relative" ref={footerRef}>
        {showPopup && (
          <div className={`absolute bottom-[80%] left-1/2 -translate-x-1/2 bg-white border border-border rounded-md shadow-lg z-50 w-[12rem] flex flex-col transition-all duration-200 ${showPopup ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
    `}>
            <Link
              href="/user/profile"
              className="px-4 py-2 hover:bg-muted text-sm rounded-t-md"
              onClick={() => setShowPopup(false)}
            >
              <User size={16} className="inline mr-2" />
              Profile
            </Link>
            <Link
              href="/user/settings"
              className="px-4 py-2 hover:bg-muted text-sm"
              onClick={() => setShowPopup(false)}
            >
              <Settings size={16} className="inline mr-2" />
              Settings
            </Link>
            <button
              className="px-4 py-2 hover:bg-muted text-sm text-left rounded-b-md"
              onClick={() => {
                setShowPopup(false);
                // handle logout here
              }}
            >
              <LogOut size={16} className="inline mr-2" />
              Logout
            </button>
          </div>
        )}
        <div className="flex-start px-3 py-2 h-auto w-auto gap-2 cursor-pointer hover:bg-muted rounded-md" onClick={() => setShowPopup((prev) => !prev)}>
          <Avatar className="flex-center border bg-cta text-white">JD</Avatar>
          <div className="flex flex-col justify-start items-start ml-2">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">
              johndoe@gmail.com
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
