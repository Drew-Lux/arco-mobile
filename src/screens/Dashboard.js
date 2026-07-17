import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CapsuleNav from "../components/CapsuleNav";
import { useAppStore } from "../store/useAppStore";

export default function Dashboard() {
  // Pulling live global state instead of using hardcoded variables
  const user = useAppStore((state) => state.user);
  const healthScore = useAppStore((state) => state.healthScore);
  const totalBalance = useAppStore((state) => state.totalBalance);
  const monthlyIncome = useAppStore((state) => state.monthlyIncome);
  const transactions = useAppStore((state) => state.transactions);

  // A simple calculation for "Safe to Spend" based on the state income
  const safeToSpend = monthlyIncome > 0 ? monthlyIncome * 0.15 : 0;

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Welcome back,</Text>
            <Text style={styles.name}>{user ? user.firstName : "Guest"}</Text>
          </View>
          <View style={styles.avatarPlaceholder} />
        </View>

        {/* 2x2 Metrics Grid */}
        <View style={styles.grid}>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Health Score</Text>
            <Text style={styles.metricValue}>
              {healthScore || "--"}
              <Text style={styles.metricSuffix}>/1000</Text>
            </Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Safe to Spend</Text>
            <Text style={styles.currencyValue}>
              R {safeToSpend.toLocaleString()}
            </Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Total Balance</Text>
            <Text style={styles.currencyValue}>
              R {totalBalance.toLocaleString()}
            </Text>
          </View>
          <View style={styles.metricCard}>
            <Text style={styles.metricLabel}>Monthly Income</Text>
            <Text style={[styles.currencyValue, { color: "#059669" }]}>
              R {monthlyIncome.toLocaleString()}
            </Text>
          </View>
        </View>

        {/* 4-Week Trend Placeholder */}
        <View style={styles.chartContainer}>
          <Text style={styles.sectionTitle}>Spending Trend</Text>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.placeholderText}>
              Pure Bar Chart (4-Week Span)
            </Text>
          </View>
        </View>

        {/* Recent Activity */}
        <View style={styles.activityHeader}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        {transactions.length > 0 ? (
          transactions.map((tx) => (
            <View key={tx.id} style={styles.txCard}>
              <View style={styles.txLeft}>
                <View
                  style={[
                    styles.txIcon,
                    { backgroundColor: tx.positive ? "#059669" : "#F4F5F7" },
                  ]}
                />
                <Text style={styles.txName}>{tx.name}</Text>
              </View>
              <Text
                style={[
                  styles.txAmount,
                  { color: tx.positive ? "#059669" : "#111827" },
                ]}
              >
                {tx.amount}
              </Text>
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>No recent activity found.</Text>
        )}
      </ScrollView>

      {/* Floating Navigation */}
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
  greeting: { fontSize: 14, color: "#111827", opacity: 0.6 },
  name: { fontSize: 24, fontWeight: "700", color: "#111827", marginTop: 2 },
  avatarPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F4F5F7",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 24 },
  metricCard: {
    flex: 1,
    minWidth: "45%",
    backgroundColor: "#F4F5F7",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  metricLabel: {
    fontSize: 12,
    color: "#111827",
    opacity: 0.6,
    marginBottom: 8,
    fontWeight: "600",
  },
  metricValue: { fontSize: 24, fontWeight: "800", color: "#111827" },
  metricSuffix: { fontSize: 14, color: "#111827", opacity: 0.4 },
  currencyValue: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111827",
    fontVariant: ["tabular-nums"],
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 16,
  },
  chartContainer: { marginBottom: 24 },
  chartPlaceholder: {
    height: 160,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: { color: "#111827", opacity: 0.4, fontSize: 12 },
  activityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  viewAllText: { color: "#3B82F6", fontWeight: "600", fontSize: 14 },
  txCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  txLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  txIcon: { width: 32, height: 32, borderRadius: 16 },
  txName: { fontSize: 16, fontWeight: "500", color: "#111827" },
  txAmount: { fontSize: 16, fontWeight: "600", fontVariant: ["tabular-nums"] },
  emptyText: {
    fontSize: 14,
    color: "#111827",
    opacity: 0.5,
    fontStyle: "italic",
    marginTop: 8,
  },
});
