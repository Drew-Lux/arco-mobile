import React from "react";
import CapsuleNav from "../components/CapsuleNav";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Forecaster() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerTitle}>Engine Projection</Text>

        {/* Chart Placeholder */}
        <View style={styles.chartArea}>
          <Text style={styles.chartText}>
            Exponential Growth Curve (Solid Blue Line)
          </Text>
          <Text style={styles.chartSubtext}>
            w/ Transparent Confidence Interval Shade
          </Text>
        </View>

        {/* Inputs */}
        <View style={styles.inputGrid}>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Monthly (R)</Text>
            <TextInput
              style={styles.input}
              value="2500"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Return (%)</Text>
            <TextInput style={styles.input} value="10" keyboardType="numeric" />
          </View>
          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Horizon (Yrs)</Text>
            <TextInput style={styles.input} value="15" keyboardType="numeric" />
          </View>
        </View>

        {/* Insights */}
        <View style={styles.insightCard}>
          <Text style={styles.insightLabel}>Projected Final Value</Text>
          <Text style={styles.insightValue}>R 1,045,200</Text>
        </View>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={[styles.insightCard, { flex: 1 }]}>
            <Text style={styles.insightLabel}>To R1M</Text>
            <Text style={[styles.insightValue, { fontSize: 20 }]}>
              14.2 Yrs
            </Text>
          </View>
          <View style={[styles.insightCard, { flex: 1 }]}>
            <Text style={styles.insightLabel}>Interest Earned</Text>
            <Text
              style={[styles.insightValue, { fontSize: 20, color: "#059669" }]}
            >
              R 595,200
            </Text>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 24,
  },
  chartArea: {
    height: 240,
    backgroundColor: "#F4F5F7",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  chartText: { color: "#3B82F6", fontWeight: "700", fontSize: 14 },
  chartSubtext: { color: "#3B82F6", opacity: 0.6, fontSize: 12, marginTop: 4 },
  inputGrid: { flexDirection: "row", gap: 12, marginBottom: 32 },
  inputWrapper: { flex: 1 },
  label: { fontSize: 12, fontWeight: "600", color: "#111827", marginBottom: 8 },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    height: 48,
    paddingHorizontal: 12,
    fontSize: 16,
    fontVariant: ["tabular-nums"],
    color: "#111827",
  },
  insightCard: {
    backgroundColor: "#F4F5F7",
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 12,
  },
  insightLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#111827",
    opacity: 0.6,
    marginBottom: 8,
  },
  insightValue: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
    fontVariant: ["tabular-nums"],
  },
});
