"use client";
import SideBar from "@/src/widgets/sidebar/SideBar";
import React from "react";

const LayoutSideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </div>
  );
};

export default LayoutSideBar;
