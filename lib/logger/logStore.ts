/**
 * logStore.ts
 *
 * Purpose:
 * Local storage engine for application logs.
 * Keeps recent logs for debugging and developer support.
 */

import { LOG_STORAGE_KEY, MAX_LOGS, LogLevel } from "@/config/loggerConfig";

/**
 * Application log structure.
 */
export interface AppLog {
  timestamp: string;
  level: LogLevel;
  module: string;
  message: string;
  data?: unknown;
}

/**
 * Check if code is running in browser.
 */
function isBrowser(): boolean {
  return typeof window !== "undefined";
}

/**
 * Get existing logs from local storage.
 */
export function getLogs(): AppLog[] {
  if (!isBrowser()) {
    return [];
  }

  try {
    const stored = localStorage.getItem(LOG_STORAGE_KEY);

    if (!stored) {
      return [];
    }

    return JSON.parse(stored) as AppLog[];
  } catch (error) {
    console.error("Failed to read application logs", error);

    return [];
  }
}

/**
 * Save log entry.
 */
export function saveLog(log: AppLog): void {
  if (!isBrowser()) {
    return;
  }

  try {
    const logs = getLogs();

    logs.push(log);

    // Keep only latest 500 logs
    const trimmedLogs = logs.slice(-MAX_LOGS);

    localStorage.setItem(LOG_STORAGE_KEY, JSON.stringify(trimmedLogs));
  } catch (error) {
    console.error("Failed to save application log", error);
  }
}

/**
 * Clear all stored logs.
 */
export function clearLogs(): void {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(LOG_STORAGE_KEY);
}
