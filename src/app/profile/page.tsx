"use client";
import { ProfileTemplate } from "@/templates/ProfileTemplate";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";

export default function Page() {
  const toast = useRef(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<React.ReactNode>(null);
  let profileTemplate = new ProfileTemplate
  const items = [
    {
      label: "Documents",
      items: [
        {
          label: "New",
          icon: "pi pi-plus",
          command: () => setSelectedMenuItem(profileTemplate.homeTemplate()),

         
        },
        {
          label: "Search",
          icon: "pi pi-search",
          command: () => setSelectedMenuItem(profileTemplate.newTemplate()),

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
      <div className="col-8">
        {selectedMenuItem }
      </div>
    </div>
  );
}
