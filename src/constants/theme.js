import { Platform } from "react-native";

export const COLORS = {
  // 60% Dominant: Backgrounds & Canvas
  background: {
    light: "#FFFFFF",
    dark: "#0F172A",
    surfaceLight: "#F4F5F7",
    surfaceDark: "#1E293B",
  },

  // 30% Structural: Borders, Dividers, Secondary Text
  border: {
    light: "#E5E7EB",
    dark: "#334155",
  },
  text: {
    primaryLight: "#111827",
    primaryDark: "#F8FAFC",
    secondaryLight: "#6B7280",
    secondaryDark: "#94A3B8",
  },

  // 10% Accents: CTAs, Trends, Focal Points
  accent: "#3B82F6", // Corporate Blue
  success: "#059669", // Positive Trends (Green)
  error: "#EF4444", // Negative Trends (Red)
};

export const SIZES = {
  padding: 16,
  margin: 16,
  radius: 12,
  buttonHeight: 52,
};

export const TYPOGRAPHY = {
  fontFamily: Platform.select({
    ios: "SF Pro Display",
    android: "Roboto",
  }),
  // Enforces tabular/monospaced alignment for clean fintech alignment
  tabularNumbers: {
    fontVariant: ["tabular-nums"],
  },
};
