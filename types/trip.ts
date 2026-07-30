/**
 * types/trip.ts
 * -------------------------------------------------------
 * Trip model for the MyOdoMeter application.
 * Each trip belongs to a specific logbook.
 */

import { Timestamp } from "firebase/firestore";

/**
 * Trip type
 */
export interface Trip {
  id: string;

  // Date of the trip
  date: string; // YYYY-MM-DD

  // Odometer readings
  startOdometer: number;
  endOdometer: number;
  distanceKm: number;

  // Purpose of travel
  purpose: "Business" | "Private";

  // Optional notes
  notes?: string;

  // Audit timestamps
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

/**
 * Input type used when creating a trip.
 * The Firestore document ID will be generated automatically.
 */
export type NewTrip = Omit<
  Trip,
  "id" | "createdAt" | "updatedAt"
>;