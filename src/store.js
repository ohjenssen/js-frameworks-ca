import { create } from 'zustand';

const useProductsStore = create((set) => ({
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
  addOne: (product) => set((state) => {
    const updatedCart = [...state.cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return { cart: updatedCart };
  }),
  clearCart: () => set(() => {
    localStorage.removeItem('cart');
    return { cart: [] };
  }),
  checkout: () => set(() => {
    localStorage.removeItem('cart');
    
  })
}));

export default useProductsStore;