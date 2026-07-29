/**
 * File: config/appConfig.ts
 * Project: MyOdoMeter
 * Purpose:
 *   Central place for application configuration and shared constants.
 *   No secrets should be stored in this file.
 */

export const APP_NAME = "MyOdoMeter";

// -----------------------------------------------------------------------------
// Trip types
// -----------------------------------------------------------------------------
export const TRIP_TYPES = [
  "Uber",
  "Business",
  "Personal",
  "Work",
  "Other",
] as const;

// -----------------------------------------------------------------------------
// User roles
// -----------------------------------------------------------------------------
export const USER_ROLES = [
  "Owner",
  "Driver",
] as const;

// -----------------------------------------------------------------------------
// Expense categories
// -----------------------------------------------------------------------------
export const EXPENSE_CATEGORIES = [
  "Fuel",
  "Service",
  "Insurance",
  "Registration",
  "Repairs",
  "Tyres",
  "Cleaning",
  "Other",
] as const;

// -----------------------------------------------------------------------------
// Supported financial years
// -----------------------------------------------------------------------------
export const FINANCIAL_YEARS = [
  "2026-27",
  "2027-28",
  "2028-29",
] as const;