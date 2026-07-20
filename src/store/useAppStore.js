import { create } from "zustand";
import { Vault } from "../services/vault"; // 1. Import the vault

export const useAppStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  // 2. Update login to accept a token and lock it away
  login: async (userData, token) => {
    if (token) {
      await Vault.saveToken(token);
    }
    set({ user: userData, isAuthenticated: true });
  },

  // 3. Update logout to destroy the token in the vault
  logout: async () => {
    await Vault.destroyToken();
    set({
      user: null,
      isAuthenticated: false,
      healthScore: 0,
      totalBalance: 0,
      monthlyIncome: 0,
      transactions: [],
    });
  },

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
