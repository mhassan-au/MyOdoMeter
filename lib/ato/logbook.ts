/**
 * lib/ato/logbook.ts
 * -------------------------------------------------------
 * ATO logbook calculations and validation helpers.
 */

import { Trip } from "@/types/trip";

/**
 * Validation result
 */
export interface LogbookValidation {
  valid: boolean;
  errors: string[];
}

/**
 * Summary result
 */
export interface LogbookSummary {
  totalKm: number;
  businessKm: number;
  privateKm: number;
  businessUsePercent: number;
  tripCount: number;
  startDate: string | null;
  endDate: string | null;
  durationDays: number;
  meets12WeekRequirement: boolean;
}

/**
 * Validate trips against ATO logbook requirements.
 */
export function validateTrips(trips: Trip[]): LogbookValidation {
  const errors: string[] = [];

  const sorted = [...trips].sort((a, b) => a.date.localeCompare(b.date));

  for (let i = 0; i < sorted.length; i++) {
    const trip = sorted[i];

    // End odometer must be >= start
    if (trip.endOdometer < trip.startOdometer) {
      errors.push(`Trip on ${trip.date}: end odometer is less than start odometer.`);
    }

    // Distance must match odometer readings
    const expectedDistance = trip.endOdometer - trip.startOdometer;
    if (trip.distanceKm !== expectedDistance) {
      errors.push(`Trip on ${trip.date}: distance does not match odometer readings.`);
    }

    // Continuity check
    if (i > 0) {
      const previous = sorted[i - 1];

      if (trip.startOdometer !== previous.endOdometer) {
        errors.push(
          `Odometer gap between ${previous.date} and ${trip.date}.`
        );
      }

      if (trip.date < previous.date) {
        errors.push(`Trip dates are not in chronological order.`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Calculate ATO logbook summary.
 */
export function calculateSummary(trips: Trip[]): LogbookSummary {
  if (trips.length === 0) {
    return {
      totalKm: 0,
      businessKm: 0,
      privateKm: 0,
      businessUsePercent: 0,
      tripCount: 0,
      startDate: null,
      endDate: null,
      durationDays: 0,
      meets12WeekRequirement: false,
    };
  }

  const sorted = [...trips].sort((a, b) => a.date.localeCompare(b.date));

  const totalKm = sorted.reduce((s, t) => s + t.distanceKm, 0);
  const businessKm = sorted
    .filter((t) => t.purpose === "Business")
    .reduce((s, t) => s + t.distanceKm, 0);
  const privateKm = totalKm - businessKm;

  const startDate = sorted[0].date;
  const endDate = sorted[sorted.length - 1].date;

  const durationMs =
    new Date(endDate).getTime() - new Date(startDate).getTime();

  const durationDays = Math.floor(durationMs / (1000 * 60 * 60 * 24)) + 1;

  return {
    totalKm,
    businessKm,
    privateKm,
    businessUsePercent:
      totalKm === 0 ? 0 : Number(((businessKm / totalKm) * 100).toFixed(1)),
    tripCount: sorted.length,
    startDate,
    endDate,
    durationDays,
    meets12WeekRequirement: durationDays >= 84,
  };
}