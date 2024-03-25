"use client";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import { Menu } from "primereact/menu";
import { MenuItem } from "primereact/menuitem";
import { Toast } from "primereact/toast";

export default function page() {
  const toast = useRef<Toast>(null);
  const items: MenuItem[] = [
    {
      label: "Documents",
      items: [
        {
          label: "New",
          icon: "pi pi-plus",
        },
        {
          label: "Search",
          icon: "pi pi-search",
        },
      ],
    },
    {
      label: "Profile",
      items: [
        {
          label: "Settings",
          icon: "pi pi-cog",
        },
        {
          label: "Logout",
          icon: "pi pi-sign-out",
        },
      ],
    },
  ];
  return (
    <div className="grid mt-4 ml-2">
      <div className="col-4">
        <img
          src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          alt="unknown"
        />
      </div>
      <div className="col-8">KULLANICI İSMİ</div>
      <div className="col-4">
        <Toast ref={toast} />
        <Menu model={items} />
      </div>
      <div className="col-8">DASHBOARD</div>
    </div>
  );
}
