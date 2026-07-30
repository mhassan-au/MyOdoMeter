/**
 * lib/firebase/trips.ts
 * -------------------------------------------------------
 * Firestore helper functions for trip management.
 */

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { NewTrip, Trip } from "@/types/trip";

/**
 * Returns the trips collection reference for a logbook.
 */
function tripsCollection(vehicleId: string, logbookId: string) {
  return collection(db, "vehicles", vehicleId, "logbooks", logbookId, "trips");
}

/**
 * Load all trips for a logbook ordered by date.
 */
export async function getTrips(
  vehicleId: string,
  logbookId: string
): Promise<Trip[]> {
  const q = query(tripsCollection(vehicleId, logbookId), orderBy("date", "asc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map((d) => ({
    id: d.id,
    ...(d.data() as Omit<Trip, "id">),
  }));
}

/**
 * Add a new trip.
 */
export async function addTrip(
  vehicleId: string,
  logbookId: string,
  trip: NewTrip
) {
  return addDoc(tripsCollection(vehicleId, logbookId), {
    ...trip,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
}

/**
 * Update an existing trip.
 */
export async function updateTrip(
  vehicleId: string,
  logbookId: string,
  tripId: string,
  updates: Partial<NewTrip>
) {
  const tripRef = doc(
    db,
    "vehicles",
    vehicleId,
    "logbooks",
    logbookId,
    "trips",
    tripId
  );

  return updateDoc(tripRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

/**
 * Delete a trip.
 */
export async function deleteTrip(
  vehicleId: string,
  logbookId: string,
  tripId: string
) {
  const tripRef = doc(
    db,
    "vehicles",
    vehicleId,
    "logbooks",
    logbookId,
    "trips",
    tripId
  );

  return deleteDoc(tripRef);
}