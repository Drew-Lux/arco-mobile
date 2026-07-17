import React from "react";
import CapsuleNav from "../components/CapsuleNav";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Portfolio() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Massive Net Worth Header */}
        <View style={styles.header}>
          <Text style={styles.netWorthLabel}>Consolidated Net Worth</Text>
          <Text style={styles.netWorthValue}>R 84,250.00</Text>
          <View style={styles.returnPill}>
            <Text style={styles.returnText}>+R 1,240.50 (1.4%) 24H</Text>
          </View>
        </View>

        {/* Asset Allocation */}
        <View style={styles.allocationContainer}>
          <Text style={styles.sectionTitle}>Asset Allocation</Text>
          <View style={styles.stackedBar}>
            <View
              style={[
                styles.barSegment,
                { flex: 4, backgroundColor: "#3B82F6" },
              ]}
            />
            <View
              style={[
                styles.barSegment,
                { flex: 5, backgroundColor: "#059669" },
              ]}
            />
            <View
              style={[
                styles.barSegment,
                { flex: 1, backgroundColor: "#111827" },
              ]}
            />
          </View>
          <View style={styles.legend}>
            <Text style={styles.legendText}>
              <Text style={{ color: "#3B82F6" }}>●</Text> Liquid 40%
            </Text>
            <Text style={styles.legendText}>
              <Text style={{ color: "#059669" }}>●</Text> Equities 50%
            </Text>
            <Text style={styles.legendText}>
              <Text style={{ color: "#111827" }}>●</Text> Digital 10%
            </Text>
          </View>
        </View>

        {/* Account Vaults */}
        <Text style={styles.sectionTitle}>Account Vaults</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.vaultScroll}
        >
          <View style={[styles.vaultCard, { backgroundColor: "#111827" }]}>
            <Text style={styles.vaultName}>Investec Private</Text>
            <Text style={styles.vaultType}>Checking & Savings</Text>
            <Text style={styles.vaultBalance}>R 33,700.00</Text>
          </View>
          <View style={[styles.vaultCard, { backgroundColor: "#3B82F6" }]}>
            <Text style={styles.vaultName}>EasyEquities</Text>
            <Text style={styles.vaultType}>Tax Free Savings</Text>
            <Text style={styles.vaultBalance}>R 42,125.00</Text>
          </View>
        </ScrollView>

        {/* Top Holdings */}
        <Text style={styles.sectionTitle}>Top Holdings</Text>
        <View style={styles.holdingCard}>
          <View>
            <Text style={styles.holdingSymbol}>AAPL</Text>
            <Text style={styles.holdingName}>Apple Inc.</Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.holdingValue}>R 18,400</Text>
            <Text style={styles.holdingShares}>4.2 Shares</Text>
          </View>
        </View>
      </ScrollView>
      <CapsuleNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContent: { padding: 16, paddingBottom: 120 },
  header: { alignItems: "center", marginBottom: 40, marginTop: 16 },
  netWorthLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    opacity: 0.6,
    marginBottom: 8,
  },
  netWorthValue: {
    fontSize: 48,
    fontWeight: "800",
    color: "#111827",
    letterSpacing: -1,
    fontVariant: ["tabular-nums"],
    marginBottom: 12,
  },
  returnPill: {
    backgroundColor: "#Ecfdf5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  returnText: {
    color: "#059669",
    fontWeight: "700",
    fontSize: 14,
    fontVariant: ["tabular-nums"],
  },
  allocationContainer: { marginBottom: 32 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },
  stackedBar: {
    flexDirection: "row",
    height: 12,
    borderRadius: 6,
    overflow: "hidden",
    gap: 2,
    marginBottom: 12,
  },
  barSegment: { height: "100%" },
  legend: { flexDirection: "row", justifyContent: "space-between" },
  legendText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827",
    opacity: 0.8,
  },
  vaultScroll: { overflow: "visible", marginBottom: 32 },
  vaultCard: {
    width: 260,
    padding: 24,
    borderRadius: 16,
    marginRight: 16,
    height: 160,
    justifyContent: "space-between",
  },
  vaultName: { fontSize: 18, fontWeight: "700", color: "#FFFFFF" },
  vaultType: { fontSize: 12, color: "#FFFFFF", opacity: 0.6, marginTop: 4 },
  vaultBalance: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFFFFF",
    fontVariant: ["tabular-nums"],
  },
  holdingCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#F4F5F7",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 12,
  },
  holdingSymbol: { fontSize: 16, fontWeight: "700", color: "#111827" },
  holdingName: { fontSize: 12, color: "#111827", opacity: 0.6, marginTop: 2 },
  holdingValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    fontVariant: ["tabular-nums"],
  },
  holdingShares: { fontSize: 12, color: "#111827", opacity: 0.6, marginTop: 2 },
});
