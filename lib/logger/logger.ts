/**
 * logger.ts
 *
 * Purpose:
 * Central application logging service.
 * Controls console logging, local storage,
 * and future external notifications.
 */

import { sendTelegramAlert } from "@/lib/notifications/telegramService";

import { isDebugEnabled } from "./debug";
import { LOG_STORAGE_KEY, MAX_LOGS, LogLevel } from "@/config/loggerConfig";

import { saveLog } from "./logStore";

/**
 * Logger context data.
 */
type LogData = unknown;

/**
 * Internal log processor.
 */
function writeLog(
  level: LogLevel,
  module: string,
  message: string,
  data?: LogData,
): void {
  const logEntry = {
    timestamp: new Date().toISOString(),

    level,

    module,

    message,

    data,
  };

  /*
   * DEBUG:
   * Only show in console when debug mode enabled.
   */
  if (level === "DEBUG" && isDebugEnabled()) {
    console.debug("[DEBUG]", logEntry);

    return;
  }

  /*
   * INFO and above:
   * Store locally.
   */
  saveLog(logEntry);

  /**
   * Send critical alerts externally.
   */
  if (level === "ERROR" || level === "CRITICAL") {
    sendTelegramAlert({
      module,

      level,

      message,

      data,
    });
  }

  /*
   * Console output.
   * Controlled by debug mode.
   */
  if (isDebugEnabled()) {
    switch (level) {
      case "INFO":
        console.info(logEntry);
        break;

      case "WARN":
        console.warn(logEntry);
        break;

      case "ERROR":
      case "CRITICAL":
        console.error(logEntry);
        break;
    }
  }

  /*
   * Future:
   * ERROR / CRITICAL
   * send Telegram notification here.
   */
}

/**
 * Application logger.
 */
export const logger = {
  /**
   * Debug information.
   */
  debug(module: string, message: string, data?: LogData): void {
    writeLog("DEBUG", module, message, data);
  },

  /**
   * General information.
   */
  info(module: string, message: string, data?: LogData): void {
    writeLog("INFO", module, message, data);
  },

  /**
   * Warning messages.
   */
  warn(module: string, message: string, data?: LogData): void {
    writeLog("WARN", module, message, data);
  },

  /**
   * Recoverable errors.
   */
  error(module: string, message: string, data?: LogData): void {
    writeLog("ERROR", module, message, data);
  },

  /**
   * Critical application failures.
   */
  critical(module: string, message: string, data?: LogData): void {
    writeLog("CRITICAL", module, message, data);
  },
};
