import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  subscribeWithSelector,
} from "zustand/middleware";
import toast from "react-hot-toast";

export const useCart = create(
  subscribeWithSelector(
    persist(
      (set) => ({
        cartItems: [
          {
            image: "",
            title: "A product",
            price: 20,
            quantity: 6,
          },
        ],
        total: 0,
        onAdd: (product) =>
          set((state) => {
            const existingItem = state.cartItems.find(
              (item) => item.id === product.id
            );

            toast.success(`${product?.title} added to cart!`, {
              duration: 3000,
              position: "bottom-left",
              style: {
                backgroundColor: "var(--font-color)",
                color: "var(--background)",
              },
            });

            if (!existingItem) {
              return {
                cartItems: [...state.cartItems, { ...product, quantity: 1 }],
                total: (state.total += Number(product.price)),
              };
            }

            if (existingItem) {
              return {
                cartItems: state.cartItems.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                ),
                total: (state.total += Number(product.price)),
              };
            }
          }),
        onRemove: (id, title) =>
          set((state) => {
            const existingItem = state.cartItems.find((item) => item.id === id);

            if (!existingItem) return;

            toast.success(`${title} removed from cart!`, {
              duration: 3000,
              position: "bottom-left",
              style: {
                backgroundColor: "var(--font-color)",
                color: "var(--background)",
              },
            });

            return {
              cartItems: state.cartItems.filter((item) => item.id !== id),
              total: state.total - existingItem.quantity * existingItem.price,
            };
          }),

        onIncrease: (id) =>
          set((state) => {
            const index = state.cartItems.findIndex((item) => item.id === id);

            if (index === -1) return;

            state.cartItems[index].quantity += 1;
            state.total += Number(state.cartItems[index].price);

            return {
              cartItems: state.cartItems,
              total: state.total,
            };
          }),

        onDecrease: (id, title) =>
          set((state) => {
            const index = state.cartItems.findIndex((item) => item.id === id);

            if (index === -1) return;

            state.cartItems[index].quantity -= 1;
            state.total -= Number(state.cartItems[index].price);

            if (state.cartItems[index].quantity === 0) {
              state.cartItems.splice(index, 1);

              toast.success(`${title} removed from cart!`, {
                duration: 3000,
                position: "bottom-left",
                style: {
                  backgroundColor: "var(--font-color)",
                  color: "var(--background)",
                },
              });
            }

            return {
              cartItems: state.cartItems,
              total: state.total,
            };
          }),
      }),
      {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);
