import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { COLORS, SIZES, TYPOGRAPHY } from "../constants/theme";

export default function CapsuleNav() {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: "Dashboard", label: "Hub" },
    { name: "Cashflow", label: "Flow" },
    { name: "Portfolio", label: "Assets" },
    { name: "Forecaster", label: "Predict" },
    { name: "Atlas", label: "Atlas" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.capsule}>
        {tabs.map((tab) => {
          const isActive = route.name === tab.name;
          return (
            <TouchableOpacity
              key={tab.name}
              style={[styles.navItem, isActive && styles.activePill]}
              onPress={() => navigation.navigate(tab.name)}
            >
              {/* Note: We will swap Text for SVG icons later per your spec */}
              <Text style={[styles.navText, isActive && styles.activeText]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 32, // Detached from bottom bezel
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  capsule: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF", // Pure white per spec
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 40,
    borderWidth: 1, // 1px border per spec
    borderColor: "#E5E7EB", // Light gray structural element
    justifyContent: "space-between",
    width: "90%",
  },
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  activePill: {
    backgroundColor: "#F4F5F7", // Solid colored pill behind active icon
  },
  navText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    color: "#111827", // Deep slate accent
    fontSize: 12,
    fontWeight: "600",
  },
  activeText: {
    color: "#3B82F6", // Corporate blue
  },
});
