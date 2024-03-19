"use client";
import { useRouter } from "next/navigation";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { useRef } from "react";

export default function Navbar() {
  const menuRight = useRef<Menu>(null);

  const router = useRouter();

  const handleToMainPage = () => {
    router.push("/");
  };
  const cart: MenuItem[] = [
    {
      label: "Summary",
      items: [
        {
          label: "Refresh",
          template: itemRenderer,
        },
        {
          label: "Export",
          badge: 2,
          template: itemRenderer,
        },
      ],
    },
  ];
  const items: MenuItem[] = [
    {
      label: "AnaSayfa",
      icon: "pi pi-home",
      command: () => handleToMainPage(),
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <Menu
        model={cart}
        popup
        ref={menuRight}
        id="popup_menu_right"
        popupAlignment="right"
      />
      <Button
        label="Cart"
        icon="pi pi-align-right"
        className="mr-2"
        onClick={(event) => menuRight.current.toggle(event)}
        aria-controls="popup_menu_right"
        aria-haspopup
      />
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} start={start} end={end} />
    </div>
  );
}
