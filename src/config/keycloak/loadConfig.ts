// src/config/loadConfig.ts
import type { KeycloakType } from "../../types/keycloakType";

export async function loadConfig(): Promise<KeycloakType> {
  const mode = import.meta.env.VITE_MODE || "localhost";
  const res = await fetch("/keycloakConfig.json");

  if (!res.ok) throw new Error("Failed to load config.json");
  const allConfig = await res.json();
  const config = allConfig[mode];
  
  if (!config) throw new Error(`Config for mode "${mode}" not found`);
  return config;
}
