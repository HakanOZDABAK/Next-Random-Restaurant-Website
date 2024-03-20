"use client";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { Avatar } from "primereact/avatar";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { useRef, useState } from "react";

export default function Navbar() {
  const menuRight = useRef<Menu>(null);
const {cartItems} = useCartStore()
  const router = useRouter();

  const handleToMainPage = () => {
    router.push("/");
  };
  const itemRenderer = (item: MenuItem) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
    </a>
  );
  const cart: MenuItem[] = [
    {
      label: "Summary",
      items: cartItems
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
