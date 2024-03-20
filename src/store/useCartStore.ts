import { create } from "zustand";


type ICartStore={
cartItems:any[],
setCartItems:any,



}
export const useCartStore = create<ICartStore>((set) => {
    return {
        cartItems: [],
        setCartItems: (label: string,itemRenderer:any) => {
          set((state) => {
            const itemIndex = state.cartItems.findIndex((item) => item.label === label);
    
            if (itemIndex !== -1) {
              const updatedCartItems = [...state.cartItems];
              updatedCartItems[itemIndex].badge += 1;
              return { cartItems: updatedCartItems };
            } else {
              return {
                cartItems: [
                  ...state.cartItems,
                  { label: label, badge: 1,cost:5+"$", template: itemRenderer },
                ],
              };
            }
          });
        },
        

        };
    
    });