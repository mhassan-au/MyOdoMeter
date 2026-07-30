/**
 * route.ts
 *
 * Purpose:
 * Server endpoint for Telegram notifications.
 *
 * Keeps Telegram secrets server-side.
 */

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { message } = body;

    const token = process.env.TELEGRAM_BOT_TOKEN;

    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        {
          success: false,
          message: "Telegram configuration missing",
        },

        {
          status: 500,
        },
      );
    }

    await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          chat_id: chatId,

          text: message,
        }),
      },
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
      },

      {
        status: 500,
      },
    );
  }
}
