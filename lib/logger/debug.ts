/**

* debug.ts
*
* Purpose:
* Central place for determining whether debug logging is enabled.
* This file should remain lightweight and safe to import anywhere.
  */

/**

* Returns true when debug logging is enabled.
*
* Enable by setting:
* NEXT_PUBLIC_DEBUG=true
  */
export function isDebugEnabled(): boolean {
  return process.env.NEXT_PUBLIC_DEBUG === "true";
}

/**

* Helper for conditional debug execution.
*
* Example:
* ifDebug(() => console.log("Debug info"));
  */
export function ifDebug(callback: () => void): void {
  if (isDebugEnabled()) {
    callback();
  }
}
