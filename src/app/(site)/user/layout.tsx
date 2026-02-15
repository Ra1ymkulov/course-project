"use client";
import SideBar from "@/src/widgets/sidebar/SideBar";
import React from "react";

const LayoutSideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-[200px_1080px] min-h-screen">
        <SideBar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default LayoutSideBar;
