"use client";
import { ProfileTemplate } from "@/templates/ProfileTemplate";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";
import { FaBowlFood } from "react-icons/fa6";
import { MdOutlineRateReview } from "react-icons/md";

export default function Page() {
  const toast = useRef(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<React.ReactNode>(null);
  let profileTemplate = new ProfileTemplate
  const items = [
    {
      label: "Function",
      items: [
        {
          label: "Favorite Foods",
          icon: <FaBowlFood className="mr-2" /> ,
          command: () => setSelectedMenuItem(profileTemplate.homeTemplate()),

         
        },
        {
          label: "My Reviews",
          icon: <MdOutlineRateReview className="mr-2" />     ,
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
