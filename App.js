import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "none", // Instantly snaps between screens like a true tab bar
        }}
      >
        {/* Funnel */}
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="BankLink" component={BankLink} />

        {/* Core Hub */}
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Cashflow" component={Cashflow} />
        <Stack.Screen name="Portfolio" component={Portfolio} />
        <Stack.Screen name="Forecaster" component={Forecaster} />
        <Stack.Screen name="Atlas" component={Atlas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
