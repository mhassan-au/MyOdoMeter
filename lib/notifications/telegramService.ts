/**
 * telegramService.ts
 *
 * Purpose:
 * Sends application alerts to Telegram.
 */

import { ENABLE_TELEGRAM_ALERTS } from "@/config/telegramConfig";

interface TelegramPayload {
  module: string;

  level: string;

  message: string;

  data?: unknown;
}

/**
 * Send Telegram notification.
 */
export async function sendTelegramAlert(
  payload: TelegramPayload,
): Promise<void> {
  if (!ENABLE_TELEGRAM_ALERTS) {
    return;
  }

  try {
    const response = await fetch(
      "/api/notifications/telegram",

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: `🚨 MyOdoMeter Alert

Level:
${payload.level}

Module:
${payload.module}

Time:
${new Date().toISOString()}

Message:
${payload.message}

Data:
${JSON.stringify(payload.data, null, 2)}
`,
        }),
      },
    );

    if (!response.ok) {
      console.error("Telegram notification failed");
    }
  } catch (error) {
    console.error("Telegram service error", error);
  }
}
