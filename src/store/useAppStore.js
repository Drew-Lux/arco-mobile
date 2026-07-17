import { create } from "zustand";

export const useAppStore = create((set) => ({
  // --- AUTHENTICATION STATE ---
  user: null,
  isAuthenticated: false,

  // Actions
  login: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
    }),
  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),

  // --- FINANCIAL STATE ---
  healthScore: 0,
  totalBalance: 0,
  monthlyIncome: 0,
  transactions: [],

  // Actions
  setFinancialData: (data) =>
    set((state) => ({
      ...state,
      ...data,
    })),

  clearData: () =>
    set({
      healthScore: 0,
      totalBalance: 0,
      monthlyIncome: 0,
      transactions: [],
    }),
}));
