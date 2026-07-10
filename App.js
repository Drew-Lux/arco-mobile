import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { COLORS, TYPOGRAPHY } from "./src/constants/theme";

export default function App() {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <View style={StyleSheet.card}>
        <Text style={StyleSheet.title}>Arco Premium Engine</Text>
        <Text style={StyleSheet.balance}>R10,000.00</Text>
        <Text style={StyleSheet.status}>Design System Initialized</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    backgroundColor: COLORS.background.light,
    borderWidth: 1,
    borderColor: COLORS.border.light,
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 16,
    color: COLORS.text.secondaryLight,
    marginBottom: 8,
  },
  balance: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.text.primaryLight,
    ...TYPOGRAPHY.tabularNumbers, // Enforces alignment on the simulator
    marginBottom: 16,
  },
  status: {
    fontSize: 12,
    color: COLORS.success,
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
