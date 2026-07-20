import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "arco_jwt_auth_token";

// Save the jwt token after login
export const Vault = {
  saveToken: async (token) => {
    try {
      await SecureStore.setItemAsync(TOKEN_KEY, token);
      console.log("[Arco Vault] Token secured in hardware keychain.");
    } catch (error) {
      console.error("[Arco Vault] Failed to secure token: ", error);
    }
  },

  //get token for api requests
  getToken: async () => {
    try {
      return await SecureStore.getItemAsync(TOKEN_KEY);
    } catch (error) {
      console.error("[Arco Vault] Failed to retrieve token: ", error);
      return null;
    }
  },

  destroyToken: async () => {
    try {
      await SecureStore.deleteItemAsync(TOKEN_KEY);
      console.log("[Arco Vault] Token completely destroyed.");
    } catch (error) {
      console.log("[Arco Vault] Failed to destroy token: ", error);
    }
  },
};
