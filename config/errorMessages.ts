/**
 * errorMessages.ts
 *
 * Purpose:
 * Centralised application error messages.
 *
 * Do not place error strings directly
 * inside components/services.
 */

export const ERROR_MESSAGES = {
  // General errors

  UNKNOWN_ERROR: "An unexpected error occurred.",

  NETWORK_ERROR: "Unable to connect to the server.",

  UNAUTHORISED: "You do not have permission to perform this action.",

  SOMETHING_WENT_WRONG: "Something went wrong.",

  // Vehicle errors

  VEHICLE_NOT_FOUND: "Vehicle could not be found.",

  VEHICLE_SAVE_FAILED: "Unable to save vehicle.",

  VEHICLE_DELETE_FAILED: "Unable to delete vehicle.",

  // Logbook errors

  LOGBOOK_NOT_FOUND: "Logbook could not be found.",

  LOGBOOK_SAVE_FAILED: "Unable to save logbook.",

  // Trip errors

  TRIP_NOT_FOUND: "Trip could not be found.",

  TRIP_SAVE_FAILED: "Unable to save trip.",

  TRIP_DELETE_FAILED: "Unable to delete trip.",

  // Firebase errors

  FIREBASE_CONNECTION_FAILED: "Database connection failed.",

  FIREBASE_OPERATION_FAILED: "Database operation failed.",

  // Export errors

  EXPORT_FAILED: "Unable to export data.",
} as const;
