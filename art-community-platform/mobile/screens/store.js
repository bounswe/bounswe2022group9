import create from "zustand";

export const useUserStore = create((set, get) => ({
  userId: 0,
  token: "",
  setUserId: (userId) => set(userId),
  setToken: (token) => set(token),
}));
