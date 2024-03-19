import { Badge } from "primereact/badge";
import { MenuItem } from "primereact/menuitem";
import { create } from "zustand";

type ICartStore = {
  cart: MenuItem[],
  setCart: (cart: MenuItem[]) => void,
  itemRenderer: (item: MenuItem) => JSX.Element
};

export const usePostStore = create<ICartStore>((set) => {
  const itemRenderer = (item: MenuItem) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className="mx-2">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
    </a>
  );

  const initialCart: MenuItem[] = [
    {
      label: "Summary",
      items: [
      ],
    },
  ];

  return {
cart: initialCart,
    setCart: (itemName: string) => {
      set((state: ICartStore | undefined) => {
        if (!state) return;

        const existingItemIndex = state.cart[0]?.items.findIndex(item => item.label === itemName);

        if (existingItemIndex !== -1) {
          const updatedCart = [...state.cart];
          updatedCart[0].items[existingItemIndex].badge = (updatedCart[0].items[existingItemIndex].badge ?? 0) + 1;
          return { cart: updatedCart };
        } else {
          const newItem = { label: itemName, badge: 1, template: itemRenderer };
          return { cart: [{ ...state.cart[0], items: [...state.cart[0]?.items, newItem] }] };
        }
      });
    },
    itemRenderer
  };
});
