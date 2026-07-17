import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useAppStore } from "../store/useAppStore";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, TYPOGRAPHY } from "../constants/theme";

export default function BankLink({ navigation }) {
  const [isLinking, setIsLinking] = useState(false);

  const login = useAppStore((state) => state.login);
  const setFinancialData = useAppStore((state) => state.setFinancialData);

  const handleConnect = () => {
    setIsLinking(true);

    setTimeout(() => {
      // 1. Inject the user identity
      login({ firstName: "Drew", email: "drew@example.com" });

      // 2. Inject the financial data (this will eventually come from your Node backend)
      setFinancialData({
        healthScore: 840,
        totalBalance: 24500,
        monthlyIncome: 32000,
        transactions: [
          {
            id: 1,
            name: "Investec Transfer",
            amount: "+R 8,500.00",
            positive: true,
          },
          { id: 2, name: "Woolworths", amount: "-R 450.00", positive: false },
        ],
      });

      setIsLinking(false);
      navigation.navigate("Dashboard");
    }, 2500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.stepText}>STEP 2 OF 2</Text>
          <Text style={styles.title}>Connect your bank.</Text>
          <Text style={styles.subtitle}>
            Arco uses bank-level encryption to securely sync your transactions.
            We never store your login credentials.
          </Text>
        </View>

        {/* Secure Shield / Connection Graphic Placeholder */}
        <View style={styles.graphicContainer}>
          <View style={[styles.node, styles.arcoNode]}>
            <Text style={styles.nodeText}>A</Text>
          </View>
          <View style={styles.connectionLine} />
          <View style={styles.node}>
            <Text style={styles.nodeText}>?</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleConnect}
          disabled={isLinking}
        >
          {isLinking ? (
            <ActivityIndicator color={COLORS.background.light} />
          ) : (
            <Text style={styles.buttonText}>Establish Secure Connection</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity style={styles.skipButton}>
          <Text style={styles.skipText}>I'll do this later</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.light,
  },
  content: {
    flex: 1,
    paddingHorizontal: SIZES.padding * 2,
    justifyContent: "center",
  },
  header: {
    marginBottom: 40,
  },
  stepText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.accent,
    letterSpacing: 1.5,
    marginBottom: 12,
  },
  title: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.text.primaryLight,
    marginBottom: 12,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 16,
    color: COLORS.text.secondaryLight,
    lineHeight: 24,
  },
  graphicContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
  },
  node: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: COLORS.background.surfaceLight,
    borderWidth: 1,
    borderColor: COLORS.border.light,
    justifyContent: "center",
    alignItems: "center",
  },
  arcoNode: {
    backgroundColor: COLORS.text.primaryLight,
  },
  nodeText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.text.secondaryLight,
  },
  connectionLine: {
    width: 60,
    height: 2,
    backgroundColor: COLORS.border.light,
    borderStyle: "dashed",
  },
  footer: {
    padding: SIZES.padding * 2,
    paddingBottom: 40,
  },
  primaryButton: {
    backgroundColor: COLORS.text.primaryLight,
    height: SIZES.buttonHeight,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    color: COLORS.background.light,
    fontSize: 16,
    fontWeight: "600",
  },
  skipButton: {
    height: SIZES.buttonHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  skipText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text.secondaryLight,
  },
});
