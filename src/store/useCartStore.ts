import { create } from "zustand";


type ICartStore={
cartItems:any[],
setCartItems:any

}
export const useCartStore = create<ICartStore>((set) => {
    return {
        cartItems: [],
        setCartItems: (label: string,itemRenderer:any) => {
          set((state) => {
            // Check if the item with the given label already exists in cart
            const itemIndex = state.cartItems.findIndex((item) => item.label === label);
    
            if (itemIndex !== -1) {
              // If item exists, update its badge
              const updatedCartItems = [...state.cartItems];
              updatedCartItems[itemIndex].badge += 1;
              return { cartItems: updatedCartItems };
            } else {
              // If item doesn't exist, add it to the cart with badge 1
              return {
                cartItems: [
                  ...state.cartItems,
                  { label: label, badge: 1, template: itemRenderer },
                ],
              };
            }
          });
        },
      };
    });