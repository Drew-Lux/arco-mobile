import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, TYPOGRAPHY } from "../constants/theme";

export default function Onboarding({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Premium Placeholder for an eventual SVG/Lottie graphic */}
        <View style={styles.graphicPlaceholder}>
          <Text style={styles.logoText}>Arco</Text>
        </View>

        <Text style={styles.title}>Beyond the Notes App.</Text>
        <Text style={styles.subtitle}>
          Stop tracking and start building. Connect your accounts to automate
          your spending habits and unlock personalized investment education.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("Auth")}
        >
          <Text style={styles.buttonText}>Initialize Engine</Text>
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
    alignItems: "center",
  },
  graphicPlaceholder: {
    width: 120,
    height: 120,
    backgroundColor: COLORS.background.surfaceLight,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: COLORS.border.light,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  logoText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.text.primaryLight,
    letterSpacing: -1,
  },
  title: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.text.primaryLight,
    textAlign: "center",
    marginBottom: 16,
  },
  subtitle: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 16,
    color: COLORS.text.secondaryLight,
    textAlign: "center",
    lineHeight: 24,
  },
  footer: {
    padding: SIZES.padding * 2,
    paddingBottom: 40, // Extra padding for the physical home indicator
  },
  primaryButton: {
    backgroundColor: COLORS.text.primaryLight,
    height: SIZES.buttonHeight,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    color: COLORS.background.light,
    fontSize: 16,
    fontWeight: "600",
  },
});
