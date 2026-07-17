import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SIZES, TYPOGRAPHY } from "../constants/theme";

export default function Auth({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    console.log(
      `[Arco Auth] ${isLogin ? "Logging in" : "Registering"}:`,
      email,
    );
    navigation.navigate("BankLink"); // Routes to the new screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            {/* Header Section */}
            <View style={styles.headerContainer}>
              <Text style={styles.title}>
                {isLogin ? "Welcome back." : "Create your engine."}
              </Text>
              <Text style={styles.subtitle}>
                {isLogin
                  ? "Enter your credentials to access your Arco dashboard."
                  : "Secure your identity to begin automating your wealth."}
              </Text>
            </View>

            {/* Input Section */}
            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                  style={styles.input}
                  placeholder="you@example.com"
                  placeholderTextColor={COLORS.text.secondaryLight}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="••••••••"
                  placeholderTextColor={COLORS.text.secondaryLight}
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <TouchableOpacity
                style={styles.primaryButton}
                onPress={handleAuth}
              >
                <Text style={styles.buttonText}>
                  {isLogin ? "Sign In" : "Initialize Account"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Footer Toggle */}
            <View style={styles.footer}>
              <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                <Text style={styles.toggleText}>
                  {isLogin
                    ? "Don't have an account? Create one."
                    : "Already have an account? Sign in."}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background.light,
  },
  keyboardView: {
    flex: 1,
  },
  inner: {
    flex: 1,
    paddingHorizontal: SIZES.padding * 2,
    justifyContent: "space-between",
  },
  headerContainer: {
    marginTop: 60,
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
  formContainer: {
    marginTop: 40,
  },
  inputWrapper: {
    marginBottom: 24,
  },
  label: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text.primaryLight,
    marginBottom: 8,
  },
  input: {
    height: 56,
    backgroundColor: COLORS.background.surfaceLight,
    borderWidth: 1,
    borderColor: COLORS.border.light,
    borderRadius: SIZES.radius,
    paddingHorizontal: 16,
    fontSize: 16,
    color: COLORS.text.primaryLight,
    fontFamily: TYPOGRAPHY.fontFamily,
  },
  primaryButton: {
    backgroundColor: COLORS.text.primaryLight,
    height: SIZES.buttonHeight,
    borderRadius: SIZES.radius,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    color: COLORS.background.light,
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    marginBottom: 40,
    alignItems: "center",
  },
  toggleText: {
    fontFamily: TYPOGRAPHY.fontFamily,
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.text.secondaryLight,
  },
});
