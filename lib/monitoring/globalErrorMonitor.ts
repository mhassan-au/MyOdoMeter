/**
 * globalErrorMonitor.ts
 *
 * Purpose:
 * Capture browser level errors
 * and unhandled promise failures.
 */

import { logger } from "@/lib/logger/logger";


/**
 * Initialise global error listeners.
 */
export function initialiseGlobalErrorMonitor() {


    if (
        typeof window === "undefined"
    ) {

        return;

    }


    /**
     * JavaScript runtime errors.
     */
    window.onerror = (
        message,
        source,
        line,
        column,
        error
    ) => {


        logger.error(
            "Global.WindowError",
            String(message),
            {
                source,
                line,
                column,
                stack: error?.stack
            }
        );


    };


    /**
     * Unhandled async errors.
     */
    window.onunhandledrejection = (
        event
    ) => {


        logger.error(
            "Global.PromiseRejection",
            event.reason?.message ??
            "Unhandled promise rejection",
            {
                reason: event.reason
            }
        );


    };

}