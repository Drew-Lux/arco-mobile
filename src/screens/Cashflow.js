import React, { useState } from "react";
import CapsuleNav from "../components/CapsuleNav";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cashflow() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Active Cashflow</Text>
          <View style={styles.badge}>
            <View style={styles.badgeDot} />
            <Text style={styles.badgeText}>Live Sync</Text>
          </View>
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          <View style={[styles.summaryCard, { backgroundColor: "#059669" }]}>
            <Text style={[styles.summaryLabel, { color: "#FFFFFF" }]}>
              Total Inflow
            </Text>
            <Text style={[styles.summaryValue, { color: "#FFFFFF" }]}>
              R 32,000
            </Text>
          </View>
          <View style={[styles.summaryCard, { backgroundColor: "#0F172A" }]}>
            <Text style={[styles.summaryLabel, { color: "#FFFFFF" }]}>
              Net Cashflow
            </Text>
            <Text style={[styles.summaryValue, { color: "#FFFFFF" }]}>
              + R 7,500
            </Text>
          </View>
        </View>

        {/* Budget Utilization */}
        <View style={styles.budgetContainer}>
          <Text style={styles.sectionTitle}>Budget Utilization</Text>

          <View style={styles.budgetItem}>
            <View style={styles.budgetRow}>
              <Text style={styles.budgetCategory}>Housing</Text>
              <Text style={styles.budgetAmounts}>R 12k / R 12k</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: "100%", backgroundColor: "#EF4444" },
                ]}
              />
            </View>
          </View>

          <View style={styles.budgetItem}>
            <View style={styles.budgetRow}>
              <Text style={styles.budgetCategory}>Transport</Text>
              <Text style={styles.budgetAmounts}>R 2.5k / R 4k</Text>
            </View>
            <View style={styles.progressBarBg}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: "62%", backgroundColor: "#3B82F6" },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Ledger Segment Tabs */}
        <Text style={styles.sectionTitle}>Transaction Ledger</Text>
        <View style={styles.segmentControl}>
          {["All", "In", "Out"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.segmentTab,
                activeTab === tab && styles.segmentTabActive,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.segmentText,
                  activeTab === tab && styles.segmentTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <CapsuleNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContent: { padding: 16, paddingBottom: 120 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  title: { fontSize: 24, fontWeight: "800", color: "#111827" },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#Ecfdf5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#059669",
  },
  badgeText: { fontSize: 12, fontWeight: "700", color: "#059669" },
  summaryContainer: { flexDirection: "row", gap: 12, marginBottom: 32 },
  summaryCard: { flex: 1, padding: 20, borderRadius: 12 },
  summaryLabel: {
    fontSize: 12,
    opacity: 0.8,
    marginBottom: 8,
    fontWeight: "600",
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: "700",
    fontVariant: ["tabular-nums"],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },
  budgetContainer: { marginBottom: 32 },
  budgetItem: { marginBottom: 16 },
  budgetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  budgetCategory: { fontSize: 14, fontWeight: "500", color: "#111827" },
  budgetAmounts: {
    fontSize: 14,
    color: "#111827",
    opacity: 0.6,
    fontVariant: ["tabular-nums"],
  },
  progressBarBg: {
    height: 8,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBarFill: { height: "100%", borderRadius: 4 },
  segmentControl: {
    flexDirection: "row",
    backgroundColor: "#F4F5F7",
    padding: 4,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  segmentTab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 6,
  },
  segmentTabActive: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  segmentText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    opacity: 0.6,
  },
  segmentTextActive: { opacity: 1, color: "#111827" },
});
