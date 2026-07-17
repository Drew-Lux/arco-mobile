import React from "react";
import CapsuleNav from "../components/CapsuleNav";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Atlas() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Atlas v1.0</Text>
          <View style={styles.statusBadge}>
            <View style={styles.pulseDot} />
            <Text style={styles.statusText}>Neural Core Online</Text>
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Active ML Models Panel */}
          <View style={styles.mlPanel}>
            <Text style={styles.mlTitle}>Active Microservices (Python)</Text>
            <View style={styles.mlRow}>
              <Text style={styles.mlLabel}>Txn Classification (K-Means)</Text>
              <Text style={styles.mlValue}>99%</Text>
            </View>
            <View style={styles.mlRow}>
              <Text style={styles.mlLabel}>Anomaly Detection</Text>
              <Text style={[styles.mlValue, { color: "#3B82F6" }]}>
                Running
              </Text>
            </View>
          </View>

          {/* Cron Job Insight Card */}
          <View style={styles.insightCard}>
            <Text style={styles.insightTitle}>Subscription Creep Detected</Text>
            <Text style={styles.insightBody}>
              You have 2 unused SaaS subscriptions mapping to your Investec
              account. Cancel to save R180/mo.
            </Text>
          </View>

          {/* Chat Interface */}
          <View style={styles.chatArea}>
            <View style={styles.atlasBubble}>
              <Text style={styles.atlasText}>
                I've analyzed your cashflow. Your transport expenses are 15%
                above the rolling average.
              </Text>
            </View>
            <View style={styles.userBubble}>
              <Text style={styles.userText}>What caused the spike?</Text>
            </View>
          </View>
        </ScrollView>

        {/* Input Bar - Anchored above keyboard, above the capsule nav */}
        <View style={styles.inputArea}>
          <TextInput
            style={styles.chatInput}
            placeholder="Ask Atlas about your wealth..."
            placeholderTextColor="#9CA3AF"
          />
        </View>
      </KeyboardAvoidingView>
      <CapsuleNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  title: { fontSize: 20, fontWeight: "800", color: "#111827" },
  statusBadge: { flexDirection: "row", alignItems: "center", gap: 6 },
  pulseDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#3B82F6",
  },
  statusText: { fontSize: 12, fontWeight: "600", color: "#3B82F6" },
  scrollContent: { padding: 16, paddingBottom: 160 },
  mlPanel: {
    backgroundColor: "#F4F5F7",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 16,
  },
  mlTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: "#111827",
    opacity: 0.6,
    marginBottom: 12,
  },
  mlRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  mlLabel: { fontSize: 12, color: "#111827" },
  mlValue: { fontSize: 12, fontWeight: "700", color: "#059669" },
  insightCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginBottom: 32,
  },
  insightTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: "#EF4444",
    marginBottom: 4,
  },
  insightBody: { fontSize: 14, color: "#111827", lineHeight: 20 },
  chatArea: { gap: 16 },
  atlasBubble: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
    padding: 16,
    borderRadius: 20,
    borderBottomLeftRadius: 4,
    maxWidth: "85%",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  atlasText: { color: "#111827", fontSize: 15, lineHeight: 22 },
  userBubble: {
    backgroundColor: "#3B82F6",
    alignSelf: "flex-end",
    padding: 16,
    borderRadius: 20,
    borderBottomRightRadius: 4,
    maxWidth: "80%",
  },
  userText: { color: "#FFFFFF", fontSize: 15, fontWeight: "500" },
  inputArea: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    paddingHorizontal: 16,
  },
  chatInput: {
    height: 52,
    backgroundColor: "#F4F5F7",
    borderRadius: 26,
    paddingHorizontal: 20,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    color: "#111827",
  },
});
