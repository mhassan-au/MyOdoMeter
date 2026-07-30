/**
 * telegramConfig.ts
 *
 * Purpose:
 * Central Telegram notification configuration.
 */


/**
 * Enable or disable Telegram alerts.
 */
export const ENABLE_TELEGRAM_ALERTS =
    process.env.ENABLE_TELEGRAM_ALERTS === "true";



/**
 * Telegram notification levels.
 */
export const TELEGRAM_ALERT_LEVELS = [

    "ERROR",

    "CRITICAL"

] as const;