/**
 * loggerConfig.ts
 *
 * Purpose:
 * Central configuration for application logging.
 */


/**
 * Local storage key for application logs.
 */
export const LOG_STORAGE_KEY = "myodometer_logs";


/**
 * Maximum number of logs retained locally.
 */
export const MAX_LOGS = 500;


/**
 * Supported application log levels.
 */
export type LogLevel =
    | "DEBUG"
    | "INFO"
    | "WARN"
    | "ERROR"
    | "CRITICAL";