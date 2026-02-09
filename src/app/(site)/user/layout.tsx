"use client";
import SideBar from "@/src/widgets/sidebar/SideBar";
import { useRouter } from "next/navigation";
import React from "react";

const LayoutSideBar = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div style={{ display: "flex" }} className="layoutSideBar">
      <SideBar />
      {children}
    </div>
  );
};

export default LayoutSideBar;
