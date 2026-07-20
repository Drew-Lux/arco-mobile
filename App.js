import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// State & Services
import { useAppStore } from "./src/store/useAppStore";
import { Vault } from "./src/services/vault";

// Entry Funnel
import Onboarding from "./src/screens/Onboarding";
import Auth from "./src/screens/Auth";
import BankLink from "./src/screens/BankLink";

// Core Pillars
import Dashboard from "./src/screens/Dashboard";
import Cashflow from "./src/screens/Cashflow";
import Portfolio from "./src/screens/Portfolio";
import Forecaster from "./src/screens/Forecaster";
import Atlas from "./src/screens/Atlas";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  // Pulling our authentication state directly from Zustand
  const isAuthenticated = useAppStore((state) => state.isAuthenticated);
  const login = useAppStore((state) => state.login);

  useEffect(() => {
    async function checkIdentity() {
      try {
        // 1. Check the hardware keychain for a JWT
        const token = await Vault.getToken();

        if (token) {
          console.log("[Arco Engine] Valid token found. Restoring session...");
          login({ firstName: "Drew", email: "drew@example.com" }, token);
        }
      } catch (error) {
        console.error("[Arco Engine] Bootstrapping failed:", error);
      } finally {
        // 2. Hide the loading state and reveal the app
        setIsBootstrapping(false);
      }
    }

    checkIdentity();
  }, []);

  // Show a blank screen (or loading spinner) while we check the vault
  if (isBootstrapping) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#111827" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      >
        {isAuthenticated ? (
          // --- THE CORE APP --- (Only exists if logged in)
          <>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Cashflow" component={Cashflow} />
            <Stack.Screen name="Portfolio" component={Portfolio} />
            <Stack.Screen name="Forecaster" component={Forecaster} />
            <Stack.Screen name="Atlas" component={Atlas} />
          </>
        ) : (
          // --- THE FUNNEL --- (Only exists if logged out)
          <>
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="BankLink" component={BankLink} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
